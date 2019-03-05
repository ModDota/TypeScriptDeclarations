import enums from 'dota-data/files/vscripts/enums';
import * as ts from 'typescript';

const createError = (messageText: string) =>
  ts.createCall(ts.createIdentifier('error'), undefined, [ts.createStringLiteral(messageText)]);

export default (): ts.TransformerFactory<ts.SourceFile> => context => file => {
  function getNodeReplacement(node: ts.Node): ts.Expression | undefined {
    // Would be handled as a part of main process of const enum transform
    if (!ts.isPropertyAccessExpression(node) && !ts.isElementAccessExpression(node)) return;
    const { expression } = node;
    if (!ts.isIdentifier(expression)) return;

    const enumDeclaration = enums.find(x => x.name === expression.escapedText);
    if (!enumDeclaration || enumDeclaration.kind !== 'enum') return;

    let nameText: string;
    if (ts.isPropertyAccessExpression(node)) {
      if (!ts.isIdentifier(node.name)) return;
      nameText = node.name.escapedText as string;
    } else if (ts.isElementAccessExpression(node)) {
      if (!ts.isStringLiteral(node.argumentExpression)) {
        return createError(`A const enum member can only be accessed using a string literal.`);
      }
      nameText = node.argumentExpression.text;
    } else {
      return;
    }

    const member = enumDeclaration.members.find(x => x.name === nameText);
    return member
      ? ts.createIdentifier(member.originalName)
      : createError(`${nameText} is not a valid ${enumDeclaration.name} member`);
  }

  const visit: ts.Visitor = (node: ts.Node) => {
    const replacement = getNodeReplacement(node);
    return replacement || ts.visitEachChild(node, visit, context);
  };

  // TODO: https://github.com/Microsoft/TypeScript/pull/29871
  return ts.visitNode(file, visit);
};
