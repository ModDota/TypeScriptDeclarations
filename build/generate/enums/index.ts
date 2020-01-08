import enums from 'dota-data/files/vscripts/enums';
import * as dom from 'dts-dom';
import _ from 'lodash';
import { emit, withDescription } from '../utils';
import { isGlobalEnumMember, normalizeEnumMemberName, normalizeEnumName } from './normalize';

function generate(normalize: boolean) {
  const declarations: dom.TopLevelDeclaration[] = [];

  for (const declaration of enums) {
    if (declaration.kind === 'constant') {
      declarations.push(
        withDescription(
          dom.create.const(declaration.name, dom.type.numberLiteral(declaration.value)),
          declaration.description,
        ),
      );
      continue;
    }

    const [globals, members] = _.partition(
      declaration.members,
      member => normalize && isGlobalEnumMember(member, declaration),
    );

    for (const global of globals) {
      declarations.push(
        withDescription(
          dom.create.const(global.name, dom.type.numberLiteral(global.value)),
          global.description,
        ),
      );
    }

    if (members.length > 0) {
      const normalizedEnumName = normalizeEnumName(declaration.name);
      const enumDeclaration = withDescription(
        dom.create.enum(normalize ? normalizedEnumName : declaration.name, true),
        declaration.description,
      );

      enumDeclaration.members = members.map(member => {
        const name = normalize ? normalizeEnumMemberName(member.name, declaration) : member.name;
        const key = /^\d/.test(name) ? JSON.stringify(name) : name;
        return withDescription(dom.create.enumValue(key, member.value), member.description);
      });

      if (declaration.name !== normalizedEnumName) {
        const aliasKind = normalize ? 'Non-normalized' : 'Normalized';
        declarations.push(
          withDescription(
            dom.create.alias(
              normalize ? declaration.name : normalizedEnumName,
              dom.create.namedTypeReference(normalize ? normalizedEnumName : declaration.name),
            ),
            `@deprecated ${aliasKind} enum name. Defined only for library compatibility.`,
          ),
        );
      }

      declarations.push(enumDeclaration);
    }
  }

  return declarations;
}

export const generatedEnums = emit(generate(false), false);
export const generatedEnumsNormalized = emit(generate(true), false);
