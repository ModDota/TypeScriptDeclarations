import enums from 'dota-data/files/vscripts/enums';
import _ from 'lodash';
import { isGlobalEnumMember, normalizeEnumMemberName, normalizeEnumName } from './normalize';

export const generatedEnumMappings = _.fromPairs(
  enums
    .filter((x): x is enums.Enum => x.kind === 'enum')
    .flatMap(value => {
      const mappings = _.fromPairs(value.members.map(member => [member.name, member.name]));

      const normalizedEnumName = normalizeEnumName(value.name);
      const normalizedMappings = _.fromPairs(
        value.members
          .filter(m => !isGlobalEnumMember(m, value))
          .map(m => [normalizeEnumMemberName(m.name, value), m.name]),
      );

      return value.name === normalizedEnumName
        ? [[value.name, { ...mappings, ...normalizedMappings }]]
        : [
            [value.name, mappings],
            [normalizedEnumName, normalizedMappings],
          ];
    }),
);
