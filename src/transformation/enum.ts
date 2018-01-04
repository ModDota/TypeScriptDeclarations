import { attachComment, typeReference } from './utils';
import * as ts from '../../node_modules/typescript/lib/typescript'; // ???

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
  return attachComment(
    ts.createEnumMember(value.key, ts.createNumericLiteral(String(value.value))),
    value.description,
  );
}

function enumDeclaration(name: string, values: EnumDeclaration) {
  return ts.createEnumDeclaration(
    undefined,
    [ts.createToken(ts.SyntaxKind.DeclareKeyword)],
    name,
    values.map(value => enumValue(value)),
  );
}

function varDeclaration(value: EnumValue) {
  let type;

  if (globalHandles[value.key] != null) {
    type = typeReference(globalHandles[value.key]);
  } else if (Array.isArray(value.value)) {
    type = typeReference('Vector');
  } else {
    type = typeReference('number');
  }

  return attachComment(
    ts.createVariableStatement(
      [ts.createToken(ts.SyntaxKind.DeclareKeyword)],
      [ts.createVariableDeclaration(value.key, type)],
    ),
    value.description,
  );
}

export default function file(file: File) {
  return Object.entries(file).reduce(
    (acc, [name, values]) => {
      if (name === '_Unscoped') {
        acc.push(...values.map(value => varDeclaration(value)));
      } else {
        acc.push(enumDeclaration(name, values));
      }
      return acc;
    },
    [] as ts.Statement[],
  );
}
