import * as prettier from 'prettier';
import transformApi from './api';
import transformEnum from './enum';
import transformEvents from './events';

export default function generate(apiDef: any, enumDef: any, eventsDef: any) {
  const generated = transformApi(apiDef) + transformEnum(enumDef) + transformEvents(eventsDef);
  return prettier.format(generated, {
    parser: 'typescript',
  });
}

export { File as APIFile } from './api';
export { File as EnumFile } from './enum';
export { File as EventsFile } from './events';
