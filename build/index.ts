import fs from 'fs-extra';
import path from 'path';
import { generated } from './generate';

for (const [type, content] of Object.entries(generated)) {
  fs.outputFileSync(path.resolve(__dirname, `../types/${type}.generated.d.ts`), content);
}
