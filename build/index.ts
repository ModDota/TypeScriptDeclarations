import fs from 'fs-extra';
import path from 'path';
import { generatedLua } from './lua';
import { generatedEnumMappings } from './lua/enums/mappings';
import { generatedPanorama } from './panorama';

const write = (packageName: string, type: string, content: string) =>
  fs.outputFile(
    path.resolve(__dirname, `../packages/${packageName}/types/${type}.generated.d.ts`),
    content,
  );

Promise.all([
  ...Object.entries(generatedLua).map(([t, c]) => write('dota-lua-types', t, c)),
  ...Object.entries(generatedPanorama).map(([t, c]) => write('panorama-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/dota-lua-types/enum-mappings.json'),
    generatedEnumMappings,
    { spaces: 4 },
  ),
]).catch(error => {
  console.error(error);
  process.exit(1);
});
