import types from '@moddota/dota-data/files/vscripts/api-types';
import * as dom from 'dts-dom';
import _ from 'lodash';
import { emit, getType, withDescription } from './utils';

export const generatedApiTypes = emit(
  types.flatMap<dom.ModuleMember>((declaration) => {
    const typeName = declaration.name;

    switch (declaration.kind) {
      case 'primitive':
        return [];

      case 'nominal': {
        let type: dom.Type;

        if (declaration.name === 'PlayerID') {
          type = dom.create.union(_.range(-1, 24).map(dom.type.numberLiteral));
        } else {
          type = dom.create.objectType([
            dom.create.property(
              '__tag__',
              dom.type.stringLiteral(declaration.name),
              dom.DeclarationFlags.ReadOnly,
            ),
          ]);

          if (declaration.baseType) {
            type = dom.create.intersection([getType([declaration.baseType], true), type]);
          }
        }

        return withDescription(dom.create.alias(declaration.name, type), declaration.description);
      }

      case 'object': {
        const typeDeclaration = dom.create.interface(typeName);

        typeDeclaration.members = declaration.fields.flatMap((member) =>
          withDescription(
            dom.create.property(
              member.name,
              getType(member.types, false),
              member.types.includes('nil')
                ? dom.DeclarationFlags.Optional
                : dom.DeclarationFlags.None,
            ),
            member.description,
          ),
        );

        if (declaration.extend != null) {
          typeDeclaration.baseTypes = declaration.extend.map((t) => dom.create.interface(t));
        }

        return withDescription(typeDeclaration, declaration.description);
      }
    }
  }),
);
