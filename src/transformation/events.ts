import { attachComment, typeReference } from './utils';
import * as ts from '../../node_modules/typescript/lib/typescript'; // ???

export interface File {
  [name: string]: EventDeclaration;
}

interface EventDeclaration {
  description?: string;
  args: { [key: string]: string };
}

function functionParameters(args: { [key: string]: string }) {
  return Object.entries(args)
    .filter(([key]) => key !== 'local')
    .map(([key, value]) =>
      ts.createPropertySignature(undefined, key, undefined, typeReference(value), undefined),
    );
}

function eventDeclaration(name: string, event: EventDeclaration) {
  const parameters = ts.createTypeLiteralNode(functionParameters(event.args));
  let comment = 'Register as a listener for a game event from script.';
  if (event.description != null) comment += '\n' + event.description;

  return attachComment(
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
            [ts.createParameter(undefined, undefined, undefined, 'event', undefined, parameters)],
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
}

export default function file(file: File) {
  return Object.entries(file).map(([name, event]) => {
    return eventDeclaration(name, event);
  });
}
