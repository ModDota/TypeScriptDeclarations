import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import _ from 'lodash';
import {
  emit,
  getFunction,
  getFunctionParameters,
  getReturnType,
  getType,
  withDescription,
} from './utils';

const omittedNames = ['ListenToGameEvent', 'CCustomGameEventManager.RegisterListener'];

export const generatedApi = emit(
  api.map(rootElement => {
    const typeName = rootElement.name;
    if (omittedNames.includes(typeName)) return [];

    if (rootElement.kind === 'function') {
      return getFunction((p, r) => dom.create.function(typeName, p, r), typeName, rootElement);
    }

    const declarations: dom.TopLevelDeclaration[] = [];
    const mainDeclarationMembers = _.flatMap(
      rootElement.members,
      (member): dom.ObjectTypeMember[] => {
        const fullName = `${typeName}.${member.name}`;
        if (omittedNames.includes(fullName)) return [];

        return member.kind === 'field'
          ? [
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
            ]
          : getFunction((p, r) => dom.create.method(member.name, p, r), fullName, member);
      },
    );

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
          dom.create.functionType(
            getFunctionParameters(typeName, rootElement.call.args, false, 'void'),
            getReturnType(rootElement.call.returns),
          ),
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

      declarations.push(dom.create.const(typeName, constructorTypes));
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
