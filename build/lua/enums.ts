import enums from '@moddota/dota-data/files/vscripts/enums';
import {
  generateEnumDeclarations,
  isGlobalEnumMember,
  normalizeEnumMemberName,
  normalizeEnumName,
} from '../common/enums';

export const generatedEnums = generateEnumDeclarations(enums, false, false, true);
export const generatedEnumsNormalized = generateEnumDeclarations(enums, true, true, false);
export const generatedEnumMappings = Object.fromEntries(
  enums
    .filter((x): x is enums.Enum => x.kind === 'enum')
    .flatMap((value) => {
      const mappings = Object.fromEntries(value.members.map((m) => [m.name, m.name]));

      const normalizedEnumName = normalizeEnumName(value.name);
      const normalizedMappings = Object.fromEntries(
        value.members
          .filter((m) => !isGlobalEnumMember(m, value))
          .map((m) => [normalizeEnumMemberName(m.name, value), m.name]),
      );

      return value.name === normalizedEnumName
        ? [[value.name, { ...mappings, ...normalizedMappings }]]
        : [
            [value.name, mappings],
            [normalizedEnumName, normalizedMappings],
          ];
    }),
);
