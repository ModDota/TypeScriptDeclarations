import { attachComment, typeReference } from './utils';
import * as ts from '../../node_modules/typescript/lib/typescript'; // ???

export interface File {
  [name: string]: ScopeDeclaration;
}

export interface ScopeDeclaration {
  description?: string;
  extends?: string;
  functions: { [name: string]: FunctionDeclaration };

  ignore?: boolean;
  call?: FunctionDeclaration;
}

export interface FunctionDeclaration {
  arg_names?: string[];
  args: string[];
  description?: string;
  return: string;
}

function functionParameters(args: string[], argNames?: string[]) {
  if (argNames == null) argNames = args.map((t, i) => `arg${i + 1}`);
  if (argNames.length !== args.length) {
    throw new Error(
      `Number of arg_names (${argNames.length}) not matches number of args (${args.length})`,
    );
  }

  return args.map((argType, argIndex) => {
    const argName = argNames![argIndex];
    return ts.createParameter(
      undefined,
      undefined,
      undefined,
      argName,
      undefined,
      typeReference(argType),
      undefined,
    );
  });
}

function methodDeclaration(name: string, returnType: string, func: FunctionDeclaration) {
  return attachComment(
    ts.createFunctionDeclaration(
      undefined,
      [ts.createToken(ts.SyntaxKind.DeclareKeyword)],
      undefined,
      name,
      undefined,
      functionParameters(func.args, func.arg_names),
      typeReference(returnType),
      undefined,
    ),
    func.description,
  );
}

function functionDeclarationMethodSignature(name: string, func: FunctionDeclaration) {
  return attachComment(
    ts.createMethodSignature(
      undefined,
      functionParameters(func.args, func.arg_names),
      typeReference(func.return),
      ts.createIdentifier(name),
      undefined,
    ),
    func.description,
  );
}

function scopeDeclaration(scopeName: string, scope: ScopeDeclaration): ts.Statement[] {
  const nodes = [];
  if (scope.call != null) nodes.push(methodDeclaration(scopeName, scopeName, scope.call));

  nodes.push(
    attachComment(
      ts.createInterfaceDeclaration(
        undefined,
        undefined,
        scopeName,
        undefined,
        scope.extends != null
          ? [
              ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
                ts.createExpressionWithTypeArguments([], ts.createIdentifier(scope.extends)),
              ]),
            ]
          : undefined,
        Object.entries(scope.functions).map(([funcName, func]) =>
          functionDeclarationMethodSignature(funcName, func),
        ),
      ),
      scope.description,
    ),
  );

  return nodes;
}

export default function file(file: File) {
  return Object.entries(file).reduce(
    (acc, [scopeName, scope]) => {
      if (scopeName === 'Global') {
        acc.push(
          ...Object.entries(scope.functions).map(([funcName, func]) =>
            methodDeclaration(funcName, func.return, func),
          ),
        );
      } else {
        acc.push(...scopeDeclaration(scopeName, scope));
      }
      return acc;
    },
    [] as ts.Statement[],
  );
}
