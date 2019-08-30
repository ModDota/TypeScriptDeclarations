import * as ts from 'typescript';

// tslint:disable-next-line: no-require-imports no-var-requires
const enumMappings: Record<string, Record<string, string>> = require('./enum-mappings.json');

const createError = (messageText: string) =>
  ts.createCall(ts.createIdentifier('error'), undefined, [ts.createStringLiteral(messageText)]);

const replaceNode: ts.Visitor = node => {
  // Would be handled as a part of main process of const enum transform
  if (!ts.isPropertyAccessExpression(node) && !ts.isElementAccessExpression(node)) return;
  const { expression } = node;
  if (!ts.isIdentifier(expression)) return;

  const enumName = expression.text;
  const enumMembers = enumMappings[enumName];
  if (enumMembers == null) return;

  let nameText: string;
  if (ts.isPropertyAccessExpression(node)) {
    nameText = node.name.text;
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
    : createError(`${nameText} is not a valid ${enumName} member`);
};

export default (): ts.TransformerFactory<ts.SourceFile> => context => {
  const visit: ts.Visitor = node => replaceNode(node) || ts.visitEachChild(node, visit, context);
  return file => ts.visitNode(file, visit);
};
