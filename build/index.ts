import fs from 'fs-extra';
import path from 'path';
import { generated } from './generate';
import { generatedEnumMappings } from './generate/enums/mappings';

fs.outputFileSync(
  path.resolve(__dirname, '../enum-mappings.json'),
  JSON.stringify(generatedEnumMappings, null, 2),
);

for (const [type, content] of Object.entries(generated)) {
  fs.outputFileSync(path.resolve(__dirname, `../types/${type}.generated.d.ts`), content);
}
