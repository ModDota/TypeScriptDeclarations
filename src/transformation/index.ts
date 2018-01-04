import * as ts from '../../node_modules/typescript/lib/typescript'; // ???
import transformApi from './api';
import transformEnum from './enum';
import transformEvents from './events';

export default function generate(apiDef: any, enumDef: any, eventsDef: any) {
  const file = ts.createSourceFile('', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
  file.statements = ts.createNodeArray(
    transformApi(apiDef)
      .concat(transformEnum(enumDef))
      .concat(transformEvents(eventsDef)),
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  return printer.printFile(file);
}

export { File as APIFile } from './api';
export { File as EnumFile } from './enum';
export { File as EventsFile } from './events';
