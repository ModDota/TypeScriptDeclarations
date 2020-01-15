import * as ts from 'typescript';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const enumMappings: Record<string, Record<string, string>> = require('./enum-mappings.json');

const replaceNode: ts.Visitor = node => {
  // Would be handled as a part of main process of const enum transform
  if (!ts.isPropertyAccessExpression(node) && !ts.isElementAccessExpression(node)) return;
  const { expression } = node;
  if (!ts.isIdentifier(expression)) return;

  const enumName = expression.text;
  if (!Object.prototype.hasOwnProperty.call(enumMappings, enumName)) return;

  let nameText: string;
  if (ts.isPropertyAccessExpression(node)) {
    nameText = node.name.text;
  } else if (ts.isElementAccessExpression(node)) {
    if (!ts.isStringLiteral(node.argumentExpression)) {
      return;
    }

    nameText = node.argumentExpression.text;
  } else {
    return;
  }

  const enumMembers = enumMappings[enumName];
  if (Object.prototype.hasOwnProperty.call(enumMembers, nameText)) {
    return ts.createIdentifier(enumMembers[nameText]);
  }
};

const createDotaTransformer = (): ts.TransformerFactory<ts.SourceFile> => context => {
  const visit: ts.Visitor = node => replaceNode(node) || ts.visitEachChild(node, visit, context);
  return file => ts.visitNode(file, visit);
};

export default createDotaTransformer;
