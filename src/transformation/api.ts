import { topLevel, getType, makeComment } from './utils';

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
  return args.map((_t, i) => `arg${i + 1}`);
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

  return args
    .map((argType, argIndex) => {
      const argName = argNames![argIndex];
      if (parametersTypeMap[argName] != null) {
        argType = parametersTypeMap[argName];
      }

      return `${argName}: ${getType(argType)}`;
    })
    .join(', ');
}

function makeGenerics(func: FunctionDeclaration, returns: string) {
  const genericNames = ['T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let typeParameters = '<';
  const parametersTypeMap: { [key: string]: string } = {};

  if (func.generics != null) {
    func.generics.forEach(genericExp => {
      const genericName = genericNames.shift();
      if (genericName == null) throw new Error(`Too many generics: ${func.generics!.join(', ')}`);

      if (genericExp === '$return') {
        typeParameters += `${genericName} extends ${returns}`;
        returns = genericName;
      } else {
        const [base, path] = genericExp.split(/\$/);
        let argNames = func.arg_names;
        if (argNames == null) argNames = makeArgNames(func.args);
        if (!argNames.includes(base)) {
          throw new Error(`Invalid generic: ${genericExp}, no such base type`);
        }

        if (path != null) {
          const argType = func.args[argNames.findIndex(x => x === base)];
          typeParameters += `${genericName} extends ${path}`;
          parametersTypeMap[base] = argType.replace(path, genericName);
        } else {
          typeParameters += `${genericName} extends ${base}`;
          parametersTypeMap[base] = genericName;
        }
      }
    });
  }
  typeParameters += '>';

  return {
    parametersTypeMap,
    returns,
    typeParameters: typeParameters === '<>' ? '' : typeParameters,
  };
}

function functionDeclaration(name: string, func: FunctionDeclaration) {
  let declaration = '';
  if (func.description != null) declaration += makeComment(func.description, 0);
  const { returns, parametersTypeMap, typeParameters } = makeGenerics(func, func.return);
  const parameters = functionParameters(func.args, func.arg_names, parametersTypeMap);

  declaration += `declare function ${name}${typeParameters}(${parameters}): ${getType(returns)}`;
  return declaration;
}

function methodSignatureOrDeclaration(name: string, func: FunctionDeclaration) {
  let declaration = '';
  if (func.description != null) declaration += makeComment(func.description, 1);
  const { returns, parametersTypeMap, typeParameters } = makeGenerics(func, func.return);
  const parameters = functionParameters(func.args, func.arg_names, parametersTypeMap);

  declaration += `${name}${typeParameters}(${parameters}): ${getType(returns)}`;
  return declaration;
}

function scopeDeclaration(scopeName: string, scope: ScopeDeclaration) {
  let declaration = '';
  if (scope.call != null) {
    declaration += functionDeclaration(scopeName, scope.call) + '\n';
  }
  const extended = scope.extends != null ? ` extends ${scope.extends} ` : ' ';
  if (scope.description != null) declaration += makeComment(scope.description, 0);

  declaration += `interface ${scopeName}${extended} {\n`;
  Object.entries(scope.functions).map(
    ([funcName, func]) => (declaration += methodSignatureOrDeclaration(funcName, func) + '\n'),
  );

  declaration += `}`;

  return declaration;
}

export default function file(file: File) {
  return (
    '/// <reference path="enum.generated.d.ts" />\n\n' +
    topLevel(
      Object.entries(file).map(([scopeName, scope]) => {
        if (scopeName === 'Global') {
          return Object.entries(scope.functions).map(([funcName, func]) => {
            return functionDeclaration(funcName, func) + '\n';
          });
        }

        return scopeDeclaration(scopeName, scope);
      }),
    )
  );
}
