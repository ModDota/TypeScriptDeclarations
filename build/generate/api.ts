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

export const generatedApi = emit(
  api.map(rootElement => {
    if (rootElement.kind === 'function') {
      if (rootElement.name === 'ListenToGameEvent') return [];
      return getFunction(
        (p, r) => dom.create.function(rootElement.name, p, r),
        rootElement.name,
        rootElement,
      );
    }

    const declarations: dom.TopLevelDeclaration[] = [];
    const typeName = rootElement.name;

    const mainDeclarationMembers = _.flatMap(
      rootElement.members,
      (member): dom.ObjectTypeMember[] =>
        member.kind === 'field'
          ? [
              withDescription(
                dom.create.property(
                  member.name,
                  getType(member.types, 'null'),
                  member.types.includes('nil')
                    ? dom.DeclarationFlags.Optional
                    : dom.DeclarationFlags.None,
                ),
                member.description,
              ),
            ]
          : getFunction(
              (p, r) => dom.create.method(member.name, p, r),
              `${typeName}.${member.name}`,
              member,
            ),
    );

    if (rootElement.kind === 'class') {
      mainDeclarationMembers.push(
        dom.create.property('__instance__', dom.create.namedTypeReference('never')),
      );

      const constructorTypes = dom.create.intersection([]);
      if (typeName !== rootElement.instance) {
        constructorTypes.members.push(
          dom.create.namedTypeReference(`__InstanceGlobalType<${typeName}>`),
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
);
