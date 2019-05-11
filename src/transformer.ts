import * as ts from 'typescript';

// tslint:disable-next-line: no-require-imports no-var-requires
const enumMappings: Record<string, Record<string, string>> = require('../enum-mappings.json');

const createError = (messageText: string) =>
  ts.createCall(ts.createIdentifier('error'), undefined, [ts.createStringLiteral(messageText)]);

export default (): ts.TransformerFactory<ts.SourceFile> => context => {
  const replaceNode: ts.Visitor = node => {
    // Would be handled as a part of main process of const enum transform
    if (!ts.isPropertyAccessExpression(node) && !ts.isElementAccessExpression(node)) return;
    const { expression } = node;
    if (!ts.isIdentifier(expression)) return;

    const enumMembers = enumMappings[String(expression.escapedText)];
    if (enumMembers == null) return;

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

    const originalName = enumMembers[nameText];
    return originalName != null
      ? ts.createIdentifier(originalName)
      : createError(`${nameText} is not a valid ${enumMembers.name} member`);
  };

  const visit: ts.Visitor = node => replaceNode(node) || ts.visitEachChild(node, visit, context);
  // TODO: https://github.com/Microsoft/TypeScript/pull/29871
  return file => ts.visitNode(file, visit);
};
