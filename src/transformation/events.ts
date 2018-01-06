import { attachComment, typeReference } from './utils';
import * as ts from '../../node_modules/typescript/lib/typescript'; // ???
import { pascalCase } from '../../node_modules/change-case/change-case';

export interface File {
  [name: string]: EventDeclaration;
}

interface EventDeclaration {
  [key: string]: string;
}

function interfaceProperties(args: EventDeclaration) {
  return Object.entries(args)
    .filter(([key]) => !['local', '_description'].includes(key))
    .map(([key, value]) =>
      ts.createPropertySignature(undefined, key, undefined, typeReference(value), undefined),
    );
}

function eventDeclaration(name: string, event: EventDeclaration) {
  let comment = 'Register as a listener for a game event from script.';
  if (event._description != null) comment += '\n' + event._description;

  const interfaceName = pascalCase(name) + 'Event';

  const interfaceProps = interfaceProperties(event);

  const interfaceDef = attachComment(
    ts.createInterfaceDeclaration(
      undefined,
      undefined,
      interfaceName,
      undefined,
      undefined,
      interfaceProps,
    ),
    event._description,
  );

  const isEmpty = interfaceProps.length === 0;

  const method = attachComment(
    ts.createFunctionDeclaration(
      undefined,
      [ts.createToken(ts.SyntaxKind.DeclareKeyword)],
      undefined,
      'ListenToGameEvent',
      undefined,
      [
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          'eventName',
          undefined,
          ts.createLiteralTypeNode(ts.createLiteral(name)),
        ),
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          'callback',
          undefined,
          ts.createFunctionTypeNode(
            undefined,
            [
              ts.createParameter(
                undefined,
                undefined,
                undefined,
                'event',
                undefined,
                isEmpty ? ts.createTypeLiteralNode([]) : typeReference(interfaceName),
              ),
            ],
            ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
          ),
        ),
        ts.createParameter(
          undefined,
          undefined,
          undefined,
          'context',
          undefined,
          typeReference('table'),
        ),
      ],
      typeReference('EventListenerID'),
      undefined,
    ),
    comment,
  );

  return isEmpty ? [method] : [method, interfaceDef];
}

export default function file(file: File) {
  return Object.entries(file).reduce(
    (acc, [name, event]) => acc.concat(eventDeclaration(name, event)),
    [] as ts.Statement[],
  );
}
