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

    const interfaceDeclaration = withDescription(
      dom.create.interface(rootElement.name),
      rootElement.description,
    );
    if (rootElement.kind === 'class' && rootElement.extend != null) {
      interfaceDeclaration.baseTypes = [dom.create.interface(rootElement.extend)];
    }

    interfaceDeclaration.members = _.flatMap(
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
              `${rootElement.name}.${member.name}`,
              member,
            ),
    );

    if (rootElement.kind === 'class') {
      interfaceDeclaration.members.push(
        withDescription(
          dom.create.property('__instance__', dom.create.namedTypeReference('never')),
          "@deprecated Internal type, don't use",
        ),
      );

      const constructorTypes = dom.create.intersection([]);
      if (rootElement.name !== rootElement.instance) {
        constructorTypes.members.push(
          dom.create.namedTypeReference(`__InstanceGlobalType<${interfaceDeclaration.name}>`),
        );
      }

      if (rootElement.call != null) {
        constructorTypes.members.push(
          dom.create.functionType(
            getFunctionParameters(rootElement.name, rootElement.call.args, false, 'void'),
            getReturnType(rootElement.call.returns),
          ),
        );
      }

      if (rootElement.instance != null) {
        if (rootElement.name === rootElement.instance) {
          constructorTypes.members.push(interfaceDeclaration);
        } else {
          declarations.push(dom.create.const(rootElement.instance, interfaceDeclaration));
        }
      }

      declarations.push(dom.create.const(rootElement.name, constructorTypes));
    }

    const hasOverloadedOperators = rootElement.members.some(m => m.name === '__add');
    if (hasOverloadedOperators) {
      interfaceDeclaration.name += 'Type';
      declarations.push(
        dom.create.alias(
          rootElement.name,
          dom.create.intersection([
            dom.create.namedTypeReference('__NumberLike'),
            interfaceDeclaration,
          ]),
        ),
      );
    }

    declarations.push(interfaceDeclaration);
    return declarations;
  }),
);
