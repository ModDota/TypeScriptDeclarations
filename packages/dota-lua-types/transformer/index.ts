import * as ts from 'typescript';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mappings: Record<string, Record<string, string>> = require('./mappings.json');

function getMapping(name: string) {
  if (Object.prototype.hasOwnProperty.call(mappings, name)) {
    return mappings[name];
  }
}

const replaceNode: ts.Visitor = (node) => {
  // Would be handled as a part of main process of const enum transform
  if (!ts.isPropertyAccessExpression(node) && !ts.isElementAccessExpression(node)) return;
  const { expression } = node;
  if (!ts.isIdentifier(expression)) return;

  const enumMembers = getMapping(expression.text);
  if (!enumMembers) return;

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

  if (Object.prototype.hasOwnProperty.call(enumMembers, nameText)) {
    return ts.factory.createIdentifier(enumMembers[nameText]);
  }
};

const createDotaTransformer = (): ts.TransformerFactory<ts.SourceFile> => (context) => {
  const visit: ts.Visitor = (node) => replaceNode(node) || ts.visitEachChild(node, visit, context);
  return (file) => ts.visitEachChild(file, visit, context);
};

export default createDotaTransformer;
