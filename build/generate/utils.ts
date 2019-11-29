import {
  Availability,
  FunctionDeclaration,
  FunctionType,
  Parameter,
  Type,
} from 'dota-data/files/vscripts/api';
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
  nil: 'undefined',
  function: 'Function',

  // TODO:
  Vector2D: 'any',
};

export function getType(types: Type[], includeUndefined: boolean, thisType?: string): dom.Type {
  const domTypes = types
    .filter(type => type !== 'nil' || includeUndefined)
    .map(type =>
      typeof type === 'string'
        ? dom.create.namedTypeReference(typeMap[type] || type)
        : 'array' in type
        ? dom.create.array(getType([type.array], true, thisType))
        : // TODO: functionLike can't be used because functionType not supports typeParameters
          dom.create.functionType(
            getFunctionParameters('', type.args, thisType),
            getReturnType(type.returns),
          ),
    );

  return domTypes.length === 1 ? domTypes[0] : dom.create.union(domTypes);
}

export const getReturnType = (types: Type[]) =>
  _.isEqual(types, ['nil']) ? dom.type.void : getType(types, true);

export function getFunctionParameters(
  identifier: string,
  parameters: Parameter[],
  thisType?: string,
) {
  const domParameters = parameters.map(({ name, types }) => {
    const isOptional = functionsWithOptionalArguments.includes(identifier);
    return dom.create.parameter(
      // TODO: Make dom.ParameterFlags.Optional work on CallSignature nodes
      name + (isOptional ? '?' : ''),
      getType(types, !isOptional, 'void'),
    );
  });

  if (thisType != null) {
    domParameters.unshift(dom.create.parameter('this', dom.create.namedTypeReference(thisType)));
  }

  return domParameters;
}

export function getFunction<T extends dom.MethodDeclaration | dom.FunctionDeclaration>(
  createType: (parameters: dom.Parameter[], returnType: dom.Type) => T,
  identifier: string,
  func: FunctionType | FunctionDeclaration,
  defaultAvailability: Availability = 'server',
): T[] {
  const comments: string[] = [];
  if ('description' in func && func.description) comments.push(wrapDescription(func.description));

  func.args
    .filter(x => x.description != null)
    .forEach(x => comments.push(wrapJsDoc(`@param ${x.name}`, x.description!)));
  if ('deprecated' in func) comments.push(wrapJsDoc('@deprecated', func.deprecated!));
  if ('available' in func && func.available !== defaultAvailability) {
    comments.push(`@${func.available}`);
  }

  if (comments.length > 1) comments.splice(1, 0, '');

  const thisType = !identifier.includes('.') ? 'void' : undefined;
  const returnType = getTypeGuard(identifier) || getReturnType(func.returns);
  const fn = createType(getFunctionParameters(identifier, func.args, thisType), returnType);
  fn.jsDocComment = comments.join('\n');

  // Callback with optional context
  if (identifier === 'ListenToGameEvent') {
    const [withoutContext, withContext] = _.times(2, () => _.cloneDeep(fn));

    // TODO:
    const generic = dom.create.typeParameter('T', dom.create.namedTypeReference('{}') as any);
    (withContext.parameters[2].type as dom.FunctionType).parameters[0].type = generic;
    withContext.typeParameters.push(generic);
    withContext.parameters[3].type = generic;

    withoutContext.parameters[3].type = dom.type.undefined;

    return [withoutContext, withContext];
  }

  // Callback with required context
  if (
    identifier.match(/^CDOTABaseGameMode\.Set.+Filter$/) ||
    identifier.startsWith('CDOTABaseGameMode.ListenForQuery')
  ) {
    // TODO:
    const generic = dom.create.typeParameter('T', dom.create.namedTypeReference('{}') as any);
    (fn.parameters[0].type as dom.FunctionType).parameters[0].type = generic;
    fn.parameters[1].type = generic;
    fn.typeParameters.push(generic);
  }

  return [fn];
}

export const emit = (
  declarations: _.ListOfRecursiveArraysOrValues<dom.TopLevelDeclaration>,
  serverDefault: boolean,
) =>
  (serverDefault ? '// @validateApiUsageDefault server\n\n' : '') +
  _.flattenDeep(declarations)
    .map(x => dom.emit(x))
    .join('')

    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trimRight())
    .join('\n')
    .trimRight()

    .replace(/\)=>/g, ') => ')
    .replace(/(?<=\s*)\/\*\*\n\s*\* @(\w+?)\n\s*\*\//g, '/** @$1 */');
