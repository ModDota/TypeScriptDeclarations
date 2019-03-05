import enums from 'dota-data/files/vscripts/enums';
import * as dom from 'dts-dom';
import { emit, withDescription } from './utils';

export const generatedEnums = emit(
  enums.map(x => {
    if (x.kind === 'constant') {
      return withDescription(
        dom.create.const(x.name, dom.type.numberLiteral(x.value)),
        x.description,
      );
    }

    const declaration = withDescription(dom.create.enum(x.name, true), x.description);
    declaration.members = x.members.map(member => {
      // TODO: Names starting with numbers should be escaped
      const name = /^\d/.test(member.name) ? JSON.stringify(member.name) : member.name;
      return withDescription(dom.create.enumValue(name, member.value), member.description);
    });
    return declaration;
  }),
);
