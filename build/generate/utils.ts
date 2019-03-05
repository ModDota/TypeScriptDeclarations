import { FunctionDeclaration, FunctionType, Parameter, Type } from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import _ from 'lodash';
import wordwrap from 'wordwrap';

const wrapDescription = (desc: string, start = 0) =>
  wordwrap({ stop: 80, start })(desc.replace(/\n/g, '\n\n'));

const wrapJsDoc = (start: string, description: string) =>
  `${start} ${wrapDescription(description, start.length + 1).trimLeft()}`;

export function withDescription<T extends dom.DeclarationBase>(declaration: T, desc?: string) {
  if (desc != null) declaration.jsDocComment = wrapDescription(desc);
  return declaration;
}

const functionsWithOptionalArguments = ['Vector'];
const typeGuards: Record<string, string> = {
  // 'CBaseEntity.IsNPC': 'CDOTA_BaseNPC',
  'CBaseEntity.IsPlayer': 'CDOTAPlayer',
  'CDOTABaseAbility.IsItem': 'CDOTA_Item',
  // 'CDOTA_BaseNPC.IsAncient': creep?
  // 'CDOTA_BaseNPC.IsBarracks': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsBuilding': 'CDOTA_BaseNPC_Building',
  // 'CDOTA_BaseNPC.IsClone': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsCourier': 'CDOTA_Unit_Courier',
  'CDOTA_BaseNPC.IsCreature': 'CDOTA_BaseNPC_Creature',
  // 'CDOTA_BaseNPC.IsCreep': creep?
  // 'CDOTA_BaseNPC.IsFort': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsHero': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsRealHero': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsShrine': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsTempestDouble': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsTower': 'CDOTA_BaseNPC_Building',
};

const getTypeGuard = (identifier: string) =>
  typeGuards[identifier] != null
    ? dom.create.namedTypeReference(`this is ${typeGuards[identifier]}`)
    : undefined;

const typeMap: Record<string, string> = {
  bool: 'boolean',
  byte: 'number',
  short: 'number',
  int: 'number',
  uint: 'number',
  long: 'number',
  float: 'number',
  ehandle: 'number',
  handle: 'object',
  table: 'object',
  variant: 'any',
  nil: 'null', // All properties containing `nil` should be marked as optional, so undefined is granted
  function: 'Function',

  // TODO:
  Vector2D: 'any',
};

export const getType = (types: Type[], nilType: string, thisType?: string): dom.Type =>
  dom.create.union(
    types.map(x =>
      typeof x === 'string'
        ? dom.create.namedTypeReference(x === 'nil' ? nilType : typeMap[x] || x)
        : 'array' in x
        ? dom.create.array(getType([x.array], nilType, thisType))
        : // TODO: functionLike can't be used because functionType not supports typeParameters
          dom.create.functionType(
            getFunctionParameters('', x.args, false, thisType),
            getReturnType(x.returns),
          ),
    ),
  );

export const getReturnType = (types: Type[]) =>
  _.isEqual(types, ['nil']) ? dom.type.void : getType(types, 'undefined');

export function getFunctionParameters(
  identifier: string,
  parameters: Parameter[],
  useContext: boolean,
  thisType?: string,
) {
  const newParameters = parameters.map(({ name, types }) => {
    if (_.isEqual(types, ['*this'])) types = [useContext ? 'T' : 'nil'];

    const isOptional = functionsWithOptionalArguments.includes(identifier);
    const argThisType = useContext ? 'T' : 'void';
    const realType = getType(types, isOptional ? 'null' : 'null | undefined', argThisType);

    // TODO: Make dom.ParameterFlags.Optional work on CallSignature nodes
    return dom.create.parameter(name + (isOptional ? '?' : ''), realType);
  });

  if (thisType != null) {
    newParameters.unshift(dom.create.parameter('this', dom.create.namedTypeReference(thisType)));
  }

  return newParameters;
}

type DeclarationWithTypeParameters = dom.DeclarationBase & { typeParameters: dom.TypeParameter[] };
export function getFunction<T extends DeclarationWithTypeParameters>(
  createType: (parameters: dom.Parameter[], returnType: dom.Type) => T,
  identifier: string,
  func: FunctionType | FunctionDeclaration,
): T[] {
  const comments: string[] = [];
  if ('description' in func && func.description) comments.push(wrapDescription(func.description));

  func.args
    .filter(x => x.description != null)
    .forEach(x => comments.push(wrapJsDoc(`@param ${x.name}`, x.description!)));
  if ('deprecated' in func) comments.push(wrapJsDoc('@deprecated', func.deprecated!));

  if (comments.length > 1) comments.splice(1, 0, '');

  // TODO: https://github.com/TypeScriptToLua/TypeScriptToLua/pull/465
  const thisType = !identifier.includes('.') ? 'void' : undefined;
  const returnedType = getTypeGuard(identifier) || getReturnType(func.returns);
  if (!func.args.some(x => _.isEqual(x.types, ['*this']))) {
    const fn = createType(
      getFunctionParameters(identifier, func.args, false, thisType),
      returnedType,
    );
    fn.jsDocComment = comments.join('\n');
    return [fn];
  }

  const [withContext, withoutContext] = [true, false].map(useContext =>
    createType(getFunctionParameters(identifier, func.args, useContext, thisType), returnedType),
  );

  withContext.typeParameters.push(dom.create.typeParameter('T'));
  [withContext, withoutContext].forEach(d => (d.jsDocComment = comments.join('\n')));

  return [withContext, withoutContext];
}

export const emit = (declarations: _.ListOfRecursiveArraysOrValues<dom.TopLevelDeclaration>) =>
  _.flattenDeep(declarations)
    .map(x => dom.emit(x))
    .join('');
