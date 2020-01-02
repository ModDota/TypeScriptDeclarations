import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import _ from 'lodash';
import wordwrap from 'wordwrap';

export const wrapDescription = (desc: string, start = 0) =>
  wordwrap({ stop: 80, start })(desc.replace(/\n/g, '\n\n'));

const wrapJsDoc = (start: string, description: string) =>
  `${start} ${wrapDescription(description, start.length + 1).trimLeft()}`;

export function withDescription<T extends dom.DeclarationBase>(declaration: T, desc?: string) {
  if (desc != null) declaration.jsDocComment = wrapDescription(desc);
  return declaration;
}

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

  // TODO:
  Vector2D: 'any',
};

export function getType(types: api.Type[], includeUndefined: boolean, thisType?: string): dom.Type {
  const domTypes = types.flatMap<dom.Type>(type =>
    type === 'nil' && !includeUndefined
      ? []
      : typeof type === 'string'
      ? dom.create.namedTypeReference(typeMap[type] || type)
      : 'array' in type
      ? dom.create.array(getType([type.array], true, thisType))
      : getFunction(dom.create.functionType, '', type),
  );

  return domTypes.length === 1 ? domTypes[0] : dom.create.union(domTypes);
}

const typeGuards: Record<string, string> = {
  'CBaseEntity.IsBaseNPC': 'CDOTA_BaseNPC',
  'CBaseEntity.IsPlayer': 'CDOTAPlayer',
  'CDOTABaseAbility.IsItem': 'CDOTA_Item',
  'CDOTA_BaseNPC.IsBarracks': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsBuilding': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsClone': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsCourier': 'CDOTA_Unit_Courier',
  'CDOTA_BaseNPC.IsCreature': 'CDOTA_BaseNPC_Creature',
  'CDOTA_BaseNPC.IsFort': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsHero': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsRealHero': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsShrine': 'CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsTempestDouble': 'CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsTower': 'CDOTA_BaseNPC_Building',
};

function getReturnType(identifier: string, types: api.Type[]): dom.Type {
  if (typeGuards[identifier]) {
    return dom.create.namedTypeReference(`this is ${typeGuards[identifier]}`);
  }

  const domType = _.isEqual(types, ['nil']) ? dom.type.void : getType(types, true);

  if (identifier.includes('.On') && typeof domType === 'object' && domType.kind === 'union') {
    domType.members = domType.members.map(x =>
      typeof x === 'object' && x.kind === 'name' && x.name === 'undefined' ? 'void' : x,
    );
  }

  return domType;
}

const parameterNamesMap: Record<string, string> = {
  default: 'defaultValue',
  function: 'func',
};

const functionsWithOptionalParameters = ['Vector'];
function getFunctionParameters(
  identifier: string,
  parameters: api.FunctionParameter[],
  thisType?: string,
) {
  const domParameters = parameters.map(({ name, types }) => {
    const isOptional = functionsWithOptionalParameters.includes(identifier);
    return dom.create.parameter(
      // TODO: Make dom.ParameterFlags.Optional work on CallSignature nodes
      (parameterNamesMap[name] ?? name) + (isOptional ? '?' : ''),
      getType(types, !isOptional, 'void'),
    );
  });

  if (thisType != null) {
    domParameters.unshift(dom.create.parameter('this', dom.create.namedTypeReference(thisType)));
  }

  return domParameters;
}

interface CallableDeclaration extends dom.DeclarationBase {
  parameters: dom.Parameter[];
  returnType: dom.Type;
  typeParameters: dom.TypeParameter[];
}

export function getFunction<T extends CallableDeclaration>(
  createType: (parameters: dom.Parameter[], returnType: dom.Type) => T,
  identifier: string,
  func: api.FunctionType | api.FunctionDeclaration,
  defaultAvailability: api.Availability = 'server',
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
  const returnType = getReturnType(identifier, func.returns);
  const fn = createType(getFunctionParameters(identifier, func.args, thisType), returnType);
  fn.jsDocComment = comments.join('\n');

  if (identifier === 'CCustomGameEventManager.RegisterListener') {
    const generic = dom.create.typeParameter('T', dom.type.object as any);
    fn.typeParameters.push(generic);
    (fn.parameters[1].type as dom.FunctionType).parameters[2].type = dom.create.intersection([
      generic,
      dom.create.namedTypeReference('{ PlayerID: PlayerID }'),
    ]);
  }

  // Callback with optional context
  if (identifier === 'ListenToGameEvent') {
    const [withoutContext, withContext] = _.times(2, () => {
      const nameType = dom.create.typeParameter(
        'TName',
        dom.create.namedTypeReference('keyof GameEventDeclarations') as any,
      );

      const eventType = dom.create.namedTypeReference(
        'GameEventProvidedProperties & GameEventDeclarations[TName]',
      );

      const declaration = _.cloneDeep(fn);
      declaration.typeParameters.push(nameType);
      declaration.parameters[1].type = nameType;
      (declaration.parameters[2].type as dom.FunctionType).parameters[1].type = eventType;
      return declaration;
    });

    // TODO:
    const contextType = dom.create.typeParameter(
      'TContext',
      dom.create.namedTypeReference('{}') as any,
    );
    (withContext.parameters[2].type as dom.FunctionType).parameters[0].type = contextType;
    withContext.typeParameters.push(contextType);
    withContext.parameters[3].type = contextType;

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
