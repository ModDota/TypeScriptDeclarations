import _ from 'lodash';
import enums from 'dota-data/files/panorama/enums';

export function normalizeEnumName(name: string) {
  const normalized = name.startsWith('modifier')
    ? `Modifier${_.upperFirst(name.slice('modifier'.length))}`
    : _.upperFirst(_.camelCase(name.replace(/^E?(DOTA|Dota)_?/, '').replace(/_t$/, '')));

  if (normalizedEnumNames[name] != null) {
    if (normalizedEnumNames[name] === normalized) {
      throw new Error(`Unnecessary enum normalization override: ${name} -> ${normalized}`);
    }

    return normalizedEnumNames[name];
  }

  return normalized;
}

const normalizedEnumNames: Record<string, string> = {
  DOTATeam_t: 'DotaTeam',
  attackfail: 'AttackRecord',
  DOTAScriptInventorySlot_t: 'InventorySlot',
  DOTA_RUNES: 'RuneType',
  quest_text_replace_values_t: 'QuestTextReplaceValue',
  subquest_text_replace_values_t: 'SubquestTextReplaceValue',
  DOTASlotType_t: 'LoadoutType',
  LuaModifierType: 'LuaModifierMotionType',
  DOTAMinimapEvent_t: 'MinimapEventType',
  EShareAbility: 'ItemShareability',
  dotaunitorder_t: 'UnitOrder',
};

export function normalizeEnumMemberName(name: string, declaration: enums.Enum) {
  let common = findCommonStart(
    declaration.members.filter(m => !isGlobalEnumMember(m, declaration)).map(m => m.name),
  );

  // It has only one member
  if (declaration.name === 'EffectFlags') {
    common = 'EF_';
  }

  let normalizedName = name;

  normalizedName = normalizedName.replace(common, '');
  normalizedName = _.snakeCase(normalizedName).toUpperCase();

  const normalizer = memberNameNormalizers[declaration.name];
  if (normalizer != null) {
    normalizedName = normalizer({ name, normalizedName });
  }

  return normalizedName;
}

type MemberNameNormalizer = (args: { name: string; normalizedName: string }) => string;
const memberNameNormalizers: Record<string, MemberNameNormalizer> = {
  DOTA_HeroPickState: ({ name }) => name.replace(/^DOTA_HERO_?PICK_STATE_/, ''),
  DOTAScriptInventorySlot_t: ({ normalizedName }) => normalizedName.replace('_SLOT_', '_'),
  FindOrder: ({ normalizedName }) => (normalizedName === 'ANY_ORDER' ? 'ANY' : normalizedName),
  LuaModifierType: ({ normalizedName }) => normalizedName.replace('MOTION_', ''),
  modifierfunction: ({ name }) => name.replace(/^MODIFIER_(PROPERTY|EVENT|FUNCTION)_/, ''),
  subquest_text_replace_values_t: ({ normalizedName }) => normalizedName.replace('_VALUE', ''),
};

function findCommonStart(strings: string[]) {
  if (strings.length < 2) return '';
  return strings.slice(1).reduce((common, string) => {
    while (!string.startsWith(common)) {
      common = common.slice(0, -1);
    }

    return common;
  }, strings[0]);
}

export const isGlobalEnumMember = (member: enums.EnumMember, declaration: enums.Enum) =>
  globalEnumMembers.has(member.name) || declaration.name === 'DOTALimits_t';

const globalEnumMembers = new Set([
  'DOTA_DEFAULT_UI_ELEMENT_COUNT',
  'DOTA_HEROPICK_STATE_COUNT',
  'DOTA_HUD_VISIBILITY_COUNT',
  'DOTA_LOADOUT_TYPE_COUNT',
  'DOTA_PLAYER_LOADOUT_END',
  'DOTA_PLAYER_LOADOUT_START',
  'DOTA_PROJECTILE_ATTACHMENT_LAST',
  'DOTA_RUNE_COUNT',
  'DOTA_TEAM_COUNT',
  'DOTA_TEAM_CUSTOM_COUNT',
  'DOTA_TEAM_CUSTOM_MAX',
  'DOTA_TEAM_CUSTOM_MIN',
  'DOTA_TEAM_FIRST',
  'DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT',
  'MAX_PATTACH_TYPES',
  'MODIFIER_FUNCTION_LAST',
  'MODIFIER_STATE_LAST',
  'QUEST_NUM_TEXT_REPLACE_VALUES',
]);
