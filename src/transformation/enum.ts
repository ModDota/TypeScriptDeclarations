import { topLevel, getType, makeComment } from './utils';

export interface File {
  [name: string]: EnumDeclaration;
}

export type EnumDeclaration = EnumValue[];
export interface EnumValue {
  description?: string;
  key: string;
  value: number | [number, number, number] | '<handle>';
}

const globalHandles: { [key: string]: string } = {
  Entities: 'CEntities',
  Convars: 'Convars',
  GlobalSys: 'GlobalSys',
  HeroList: 'CScriptHeroList',
  GridNav: 'GridNav',
  ProjectileManager: 'ProjectileManager',
  DOTAGameManager: 'CDOTAGameManager',
  ParticleManager: 'CScriptParticleManager',
  NativeFunctions: 'any',
  GameRules: 'CDOTAGamerules',
  Tutorial: 'CDOTATutorial',
  CustomGameEventManager: 'CCustomGameEventManager',
  VoteSystem: 'CDOTAVoteSystem',
  CustomNetTables: 'CCustomNetTableManager',
  CustomUI: 'CDOTA_CustomUIManager',
};

function enumValue(value: EnumValue) {
  let declaration = '';
  if (value.description != null) declaration += makeComment(value.description, 1);
  declaration += `${value.key} = ${String(value.value)},`;
  return declaration;
}

function enumDeclaration(name: string, values: EnumDeclaration) {
  const enums = values.map(value => enumValue(value)).join('\n');
  return `declare enum ${name} {\n${enums}\n}`;
}

function varDeclaration(value: EnumValue) {
  let declaration = '';
  if (value.description != null) declaration += makeComment(value.description, 1);

  let type;
  if (globalHandles[value.key] != null) {
    type = getType(globalHandles[value.key]);
  } else if (Array.isArray(value.value)) {
    type = getType('Vector');
  } else {
    type = getType('number');
  }

  declaration += `declare var ${value.key}: ${type};`;

  return declaration;
}

export default function file(file: File) {
  return topLevel(
    Object.entries(file).map(
      ([name, values]) =>
        name === '_Unscoped'
          ? values.map(value => varDeclaration(value))
          : enumDeclaration(name, values),
    ),
  );
}
