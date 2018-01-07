import * as got from 'got';
import * as path from 'path';
import * as JSON5 from 'json5';
import { promisify } from 'util';
// @ts-ignore
import * as vdf from 'vdf-extra';
import { readFile, writeFile } from 'fs';
import transform, { APIFile, EnumFile, EventsFile } from './transformation/index';

const readFileP = promisify(readFile);
const writeFileP = promisify(writeFile);

async function gotJSON(url: string) {
  const result = await got(url, { json: true });
  return result.body;
}

async function gotVDF(url: string) {
  const result = await got(url);
  return vdf.parse(result.body);
}

function mergeAPI(...files: APIFile[]) {
  const result: APIFile = {};
  files.forEach(file => {
    Object.entries(file).forEach(([scopeName, scope]) => {
      const oldScope = result[scopeName];
      if (oldScope == null) {
        result[scopeName] = scope;
      } else {
        if (scope.call != null) oldScope.call = scope.call;
        if (scope.description != null) oldScope.description = scope.description;
        if (scope.extends != null) oldScope.extends = scope.extends;
        if (scope.ignore != null) oldScope.ignore = scope.ignore;
        if (scope.interface != null) oldScope.interface = scope.interface;
        if (scope.functions != null) {
          Object.entries(scope.functions).map(([funcName, func]) => {
            const oldFunc = oldScope.functions[funcName];
            if (oldFunc == null) {
              oldScope.functions[funcName] = func;
            } else {
              Object.assign(oldFunc, func);
            }
          });
        }
      }
    });
  });
  return result;
}

function mergeEvents(...files: EventsFile[]) {
  const result: EventsFile = {};
  files.forEach(file => {
    Object.entries(file).forEach(([event, eventDef]) => {
      if (result[event] == null) result[event] = {};
      Object.assign(result[event], eventDef);
    });
  });
  return result;
}

async function makeDeclarations() {
  const [
    luaServer,
    luaServerEnums,
    overrideLuaServer,
    localOverrideLuaServer,
    events,
  ] = await Promise.all([
    gotJSON('https://github.com/SteamDatabase/GameTracking-Dota2/raw/master/_dump/lua/out0.json'),
    gotJSON(
      'https://github.com/SteamDatabase/GameTracking-Dota2/raw/master/_dump/lua/values0.json',
    ),
    gotJSON('https://raw.githubusercontent.com/ModDota/API/master/_data/override_lua_server.json'),
    (async () =>
      JSON5.parse(
        await readFileP(path.resolve(__dirname, './override_lua_server.json'), 'utf8'),
      ))(),
    Promise.all(
      ['gameevents', 'hltvevents', 'modevents', 'port_gameevents', 'serverevents'].map(file =>
        gotVDF(
          `https://raw.githubusercontent.com/SteamDatabase/GameTracking-Dota2/master/game/dota/pak01_dir/resource/${file}.res`,
        ),
      ),
    ),
  ]);

  return transform(
    mergeAPI(luaServer, overrideLuaServer, localOverrideLuaServer),
    luaServerEnums,
    mergeEvents(...events),
  );
}

(async () => {
  const dts = await makeDeclarations();
  await writeFileP(path.resolve(__dirname, '../types/dota.generated.d.ts'), dts);
})().catch(({ stack }) => console.error(stack));
