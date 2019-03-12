import enums from 'dota-data/files/vscripts/enums';
import _ from 'lodash';

export const generatedEnumMappings = _.fromPairs(
  enums
    .filter((x): x is enums.Enum => x.kind === 'enum')
    .map(
      (value): [string, Record<string, string>] => [
        value.name,
        _.fromPairs(
          value.members.map((member): [string, string] => [member.name, member.originalName]),
        ),
      ],
    ),
);
