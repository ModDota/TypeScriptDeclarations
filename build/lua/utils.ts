import assert from 'assert';
import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import _ from 'lodash';
import path from 'path';
import prettier from 'prettier';
import { wrapDescription } from '../common/utils';

const wrapJsDoc = (start: string, description: string) =>
  `${start} ${wrapDescription(description, start.length + 1).trimStart()}`;

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

const typePredicates: Record<string, string> = {
  IsValidEntity: 'entity is CBaseEntity',
  'CBaseEntity.IsBaseNPC': 'this is CDOTA_BaseNPC',
  'CBaseEntity.IsPlayer': 'this is CDOTAPlayer',
  'CDOTA_BaseNPC.IsBarracks': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsBuilding': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsClone': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsCourier': 'this is CDOTA_Unit_Courier',
  'CDOTA_BaseNPC.IsCreature': 'this is CDOTA_BaseNPC_Creature',
  'CDOTA_BaseNPC.IsFort': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsHero': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsRealHero': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsShrine': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_BaseNPC.IsTempestDouble': 'this is CDOTA_BaseNPC_Hero',
  'CDOTA_BaseNPC.IsTower': 'this is CDOTA_BaseNPC_Building',
  'CDOTA_PlayerResource.IsValidPlayer': 'playerId is PlayerID',
  'CDOTA_PlayerResource.IsValidPlayerID': 'playerId is PlayerID',
  'CDOTA_PlayerResource.IsValidTeamPlayer': 'playerId is PlayerID',
  'CDOTA_PlayerResource.IsValidTeamPlayerID': 'playerId is PlayerID',
  'CDOTABaseAbility.IsItem': 'this is CDOTA_Item',
};

function getReturnType(identifier: string, types: api.Type[]): dom.Type {
  if (typePredicates[identifier]) {
    return dom.create.namedTypeReference(typePredicates[identifier]);
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
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

  if (identifier.startsWith('CCustomGameEventManager.')) {
    const generic = dom.create.typeParameter(
      'T',
      dom.create.union([dom.type.string, dom.type.object]) as any,
    );

    const nameType = dom.create.union([
      dom.create.namedTypeReference('(T extends string ? T : string)'),
      dom.create.namedTypeReference('keyof CustomGameEventDeclarations'),
    ]);

    if (identifier === 'CCustomGameEventManager.RegisterListener') {
      fn.typeParameters.push(generic);
      fn.parameters.find(x => x.name === 'eventName')!.type = nameType;

      (fn.parameters[1]
        .type as dom.FunctionType).parameters[2].type = dom.create.namedTypeReference(
        'NetworkedData<CCustomGameEventManager.InferEventType<T, object> & { PlayerID: PlayerID }>',
      );
    }

    if (identifier.startsWith('CCustomGameEventManager.Send_')) {
      fn.typeParameters.push(generic);
      fn.parameters.find(x => x.name === 'eventName')!.type = nameType;
      fn.parameters.find(x => x.name === 'eventData')!.type = dom.create.namedTypeReference(
        'CCustomGameEventManager.InferEventType<T, never>',
      );
    }
  }

  if (identifier.startsWith('CCustomNetTableManager.')) {
    const nameType = dom.create.typeParameter(
      'TName',
      dom.create.namedTypeReference('keyof CustomNetTableDeclarations') as any,
    );

    const tableType = dom.create.typeParameter(
      'T',
      dom.create.namedTypeReference('CustomNetTableDeclarations[TName]') as any,
    );

    const keyType = dom.create.typeParameter('K', dom.create.namedTypeReference('keyof T') as any);
    fn.typeParameters.push(nameType, tableType, keyType);
    fn.parameters[0].type = nameType;
    fn.parameters[1].type = keyType;

    if (identifier === 'CCustomNetTableManager.GetTableValue') {
      fn.returnType = dom.create.namedTypeReference('NetworkedData<T[K]>');
    } else if (identifier === 'CCustomNetTableManager.SetTableValue') {
      fn.parameters[2].type = dom.create.namedTypeReference('T[K]');
    } else {
      assert(false);
    }
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

  if (identifier === 'CBaseEntity.SetContextThink') {
    ((fn.parameters[1].type as dom.UnionType).members[0] as dom.FunctionType).parameters = [
      dom.create.parameter('this', dom.type.this),
    ];
  }

  return [fn];
}

const prettierConfig: prettier.Options = {
  parser: 'typescript',
  ...prettier.resolveConfig.sync(
    path.resolve(__dirname, '../../packages/dota-lua-types/types/_.generated.d.ts'),
    { editorconfig: true },
  ),
};

export const emit = (
  declarations: _.ListOfRecursiveArraysOrValues<dom.TopLevelDeclaration | string>,
  serverDefault: boolean,
) =>
  prettier.format(
    (serverDefault ? '// @validateApiUsageDefault server\n\n' : '') +
      _.flattenDeep(declarations)
        .map(x => dom.emit(x as any))
        .join('')

        .replace(/\r\n/g, '\n')
        .replace(/(?<=\s*)\/\*\*\n\s*\* @(\w+?)\n\s*\*\//g, '/** @$1 */'),
    prettierConfig,
  );
