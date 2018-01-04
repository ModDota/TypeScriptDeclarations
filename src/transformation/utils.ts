import * as ts from '../../node_modules/typescript/lib/typescript'; // ???
import getType from '../getType';

export { default as getType } from '../getType';

export function attachComment<T extends ts.Node>(node: T, str?: string): T {
  if (str != null) {
    str = str
      .trim()
      .replace(/\*\//g, '* /')
      .replace(/\n/g, '\n *\n * ');
    const comment = `*\n * ${str}\n `;
    return ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, comment, true);
  }
  return node;
}

/* export function tsIgnore<T extends ts.Node>(node: T): T {
  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.SingleLineCommentTrivia,
    '@ts-ignore',
    true,
  );
} */

export function typeReference(type: string) {
  if (type === '') return undefined;
  return ts.createTypeReferenceNode(getType(type), undefined);
}
