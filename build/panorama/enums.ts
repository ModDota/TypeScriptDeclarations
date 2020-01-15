import enums from 'dota-data/files/panorama/enums';
import { emit, withDescription } from '../common/utils';

export const generatedEnums = emit(
  enums
    .map(({ name: enumName, members }) => {
      const memberTypes = members
        .map(m => withDescription(`${m.name} = ${m.value}`, m.description))
        .join(',\n');

      return `declare enum ${enumName} {${memberTypes}}`;
    })
    .join('\n\n'),
);
