import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import { emit, getFunction, getType, withDescription } from './utils';

export const generatedApi = emit(
  api.map(rootElement => {
    const typeName = rootElement.name;
    if (typeName === 'ListenToGameEvent') return [];

    if (rootElement.kind === 'function') {
      return getFunction((p, r) => dom.create.function(typeName, p, r), typeName, rootElement);
    }

    const declarations: dom.TopLevelDeclaration[] = [];
    const mainDeclarationMembers = rootElement.members.flatMap<dom.ObjectTypeMember>(member => {
      const fullName = `${typeName}.${member.name}`;
      return member.kind === 'field'
        ? withDescription(
            dom.create.property(
              member.name,
              getType(member.types, false),
              member.types.includes('nil')
                ? dom.DeclarationFlags.Optional
                : dom.DeclarationFlags.None,
            ),
            member.description,
          )
        : getFunction((p, r) => dom.create.method(member.name, p, r), fullName, member);
    });

    if (rootElement.kind === 'class') {
      mainDeclarationMembers.push(
        dom.create.property('__instance__', dom.create.namedTypeReference('never')),
      );

      const constructorTypes = dom.create.intersection([]);
      if (typeName !== rootElement.instance) {
        constructorTypes.members.push(
          dom.create.namedTypeReference(`DotaConstructor<${typeName}>`),
        );
      }

      if (rootElement.call != null) {
        constructorTypes.members.push(
          ...getFunction(dom.create.functionType, typeName, rootElement.call),
        );
      }

      if (rootElement.instance != null) {
        const typeNameReference = dom.create.namedTypeReference(typeName);
        if (typeName === rootElement.instance) {
          constructorTypes.members.push(typeNameReference);
        } else {
          declarations.push(dom.create.const(rootElement.instance, typeNameReference));
        }
      }

      declarations.push(
        withDescription(
          dom.create.const(typeName, constructorTypes),
          rootElement.clientName === typeName ? '@both' : undefined,
        ),
      );

      if (rootElement.clientName != null && rootElement.clientName !== typeName) {
        declarations.push(
          withDescription(
            dom.create.const(
              rootElement.clientName,
              dom.create.typeof(dom.create.namedTypeReference(typeName)),
            ),
            '@client',
          ),
        );
      }
    }

    const extendedType =
      rootElement.kind === 'class' && rootElement.extend != null
        ? dom.create.interface(rootElement.extend)
        : undefined;

    let mainTypeDeclaration: dom.ModuleMember;
    const hasOverloadedOperators = rootElement.members.some(m => m.name === '__add');
    if (hasOverloadedOperators) {
      mainTypeDeclaration = dom.create.alias(
        typeName,
        dom.create.intersection([
          dom.create.namedTypeReference('__NumberLike'),
          ...(extendedType ? [extendedType] : []),
          dom.create.objectType(mainDeclarationMembers),
        ]),
      );
    } else {
      mainTypeDeclaration = dom.create.interface(typeName);
      mainTypeDeclaration.members = mainDeclarationMembers;
      if (extendedType) {
        mainTypeDeclaration.baseTypes = [extendedType];
      }
    }

    declarations.push(withDescription(mainTypeDeclaration, rootElement.description));
    return declarations;
  }),
  true,
);
