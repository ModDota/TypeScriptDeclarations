import enums from 'dota-data/files/panorama/enums';
import { emit, withDescription } from './utils';

export const generatedEnums = emit(
    enums
        .map(({ name: enumName, members }) => {
            const memberTypes = members
                .map(({ name, description, value }) => withDescription(`${name} = ${value}`, description))
                .join(',\n');

            return `declare enum ${enumName} {${memberTypes}}`;
        })
        .join('\n\n'),
);
