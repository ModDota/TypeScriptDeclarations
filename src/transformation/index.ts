import prettier from 'prettier';
import transformApi from './api';
import transformEnum from './enum';
import transformEvents from './events';

export default function generate(apiDef: any, enumDef: any, eventsDef: any) {
  const prettierOptions: prettier.Options = { parser: 'typescript' };
  return {
    api: prettier.format(transformApi(apiDef), prettierOptions),
    enum: prettier.format(transformEnum(enumDef), prettierOptions),
    events: prettier.format(transformEvents(eventsDef), prettierOptions),
  };
}

export { File as APIFile } from './api';
export { File as EnumFile } from './enum';
export { File as EventsFile } from './events';
