import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import { emit, getFunction, getType, withDescription } from './utils';

export const generatedApi = emit(
  api.map(declaration => {
    const typeName = declaration.name;
    if (typeName === 'ListenToGameEvent') return [];

    if (declaration.kind === 'function') {
      return getFunction((p, r) => dom.create.function(typeName, p, r), typeName, declaration);
    }

    const declarations: dom.TopLevelDeclaration[] = [];
    const mainDeclarationMembers = [...declaration.members].flatMap<dom.ObjectTypeMember>(
      member => {
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
      },
    );

    if (declaration.kind === 'class') {
      mainDeclarationMembers.push(
        dom.create.property('__instance__', dom.create.namedTypeReference('never')),
      );

      const constructorTypes = dom.create.intersection([]);
      if (typeName !== declaration.instance) {
        constructorTypes.members.push(
          dom.create.namedTypeReference(`DotaConstructor<${typeName}>`),
        );
      }

      if (declaration.call != null) {
        constructorTypes.members.push(
          ...getFunction(dom.create.functionType, typeName, declaration.call),
        );
      }

      if (declaration.instance != null) {
        const typeNameReference = dom.create.namedTypeReference(typeName);
        if (typeName === declaration.instance) {
          constructorTypes.members.push(typeNameReference);
        } else {
          declarations.push(dom.create.const(declaration.instance, typeNameReference));
        }
      }

      declarations.push(
        withDescription(
          dom.create.const(typeName, constructorTypes),
          declaration.clientName === typeName ? '@both' : undefined,
        ),
      );

      if (declaration.clientName != null && declaration.clientName !== typeName) {
        declarations.push(
          withDescription(
            dom.create.const(
              declaration.clientName,
              dom.create.typeof(dom.create.namedTypeReference(typeName)),
            ),
            '@client',
          ),
        );
      }
    }

    const extendedType =
      declaration.kind === 'class' && declaration.extend != null
        ? dom.create.interface(declaration.extend)
        : undefined;

    let mainTypeDeclaration: dom.ModuleMember;
    const hasOverloadedOperators = declaration.members.some(m => m.name === '__add');
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

    declarations.push(withDescription(mainTypeDeclaration, declaration.description));
    return declarations;
  }),
  true,
);
