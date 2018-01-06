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
  generics?: string[];
}

function makeArgNames(args: string[]) {
  return args.map((t, i) => `arg${i + 1}`);
}

function functionParameters(
  args: string[],
  argNames: string[] | undefined,
  parametersTypeMap: { [key: string]: string },
) {
  if (argNames == null) argNames = makeArgNames(args);
  if (argNames.length !== args.length) {
    throw new Error(
      `Number of arg_names (${argNames.length}) not matches number of args (${args.length})`,
    );
  }

  return args.map((argType, argIndex) => {
    const argName = argNames![argIndex];
    if (parametersTypeMap[argName]) {
      argType = parametersTypeMap[argName];
    }

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

function makeGenerics(func: FunctionDeclaration, returns: string) {
  const genericNames = ['T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const typeParameters: ts.TypeParameterDeclaration[] = [];
  const parametersTypeMap: { [key: string]: string } = {};

  if (func.generics) {
    func.generics.forEach(genericExp => {
      const genericName = genericNames.shift();
      if (genericName == null) throw new Error(`Too many generics: ${func.generics!.join(', ')}`);

      if (genericExp === '$return') {
        typeParameters.push(
          ts.createTypeParameterDeclaration(genericName, typeReference(returns), undefined),
        );

        returns = genericName;
      } else {
        const [base, path] = genericExp.split(/\$/);
        let argNames = func.arg_names;
        if (argNames == null) argNames = makeArgNames(func.args);
        if (!argNames.includes(base)) {
          throw new Error(`Invalid generic: ${genericExp}, no such base type`);
        }
        const argType = func.args[argNames.findIndex(x => x === base)];

        if (path) {
          const newType = argType.replace(path, genericName);
          typeParameters.push(
            ts.createTypeParameterDeclaration(genericName, typeReference(path), undefined),
          );
          parametersTypeMap[base] = newType;
        } else {
          typeParameters.push(
            ts.createTypeParameterDeclaration(genericName, typeReference(base), undefined),
          );
          parametersTypeMap[base] = genericName;
        }
      }
    });
  }

  return {
    parametersTypeMap,
    typeParameters,
    returns,
  };
}

function methodDeclaration(name: string, returnType: string, func: FunctionDeclaration) {
  const { returns, parametersTypeMap, typeParameters } = makeGenerics(func, returnType);
  return attachComment(
    ts.createFunctionDeclaration(
      undefined,
      [ts.createToken(ts.SyntaxKind.DeclareKeyword)],
      undefined,
      name,
      typeParameters,
      functionParameters(func.args, func.arg_names, parametersTypeMap),
      typeReference(returns),
      undefined,
    ),
    func.description,
  );
}

function functionDeclarationMethodSignature(name: string, func: FunctionDeclaration) {
  const { returns, parametersTypeMap, typeParameters } = makeGenerics(func, func.return);

  return attachComment(
    ts.createMethodSignature(
      undefined,
      functionParameters(func.args, func.arg_names, parametersTypeMap),
      typeReference(returns),
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
