import fs from 'fs';
import path from 'path';
import { generated } from './generate';

for (const [type, content] of Object.entries(generated)) {
  fs.writeFileSync(path.resolve(__dirname, `../types/${type}.generated.d.ts`), content);
}
