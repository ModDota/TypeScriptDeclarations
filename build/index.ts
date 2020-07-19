import fs from 'fs-extra';
import path from 'path';
import { generatedLua, generatedLuaEnumMappings } from './lua';
import { generatedPanorama, generatedPanoramaEnumMappings } from './panorama';

const write = (packageName: string, type: string, content: string) =>
  fs.outputFile(
    path.resolve(__dirname, `../packages/${packageName}/types/${type}.generated.d.ts`),
    content,
  );

Promise.all([
  ...Object.entries(generatedLua).map(([t, c]) => write('dota-lua-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/dota-lua-types/transformer/mappings.json'),
    generatedLuaEnumMappings,
    { spaces: 4 },
  ),

  ...Object.entries(generatedPanorama).map(([t, c]) => write('panorama-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/panorama-types/transformer/mappings.json'),
    generatedPanoramaEnumMappings,
    { spaces: 4 },
  ),
]).catch((error) => {
  console.error(error);
  process.exit(1);
});
