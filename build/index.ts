import fs from 'fs';
import path from 'path';

interface EnumDeclaration {
    name: string;
    members: EnumMember[];
}

interface EnumMember {
    name: string;
    value: number;
}

// TODO: Move to DotaTracking
function parseDump() {
    // Output of `cl_panorama_script_help *` command
    const dump = fs.readFileSync(path.join(__dirname, 'cl_panorama_script_help'), 'utf8');
    return dump.split('\n\n').map(
        (group): EnumDeclaration => {
            const enumName = group.match(/Enumeration '(.+?)'/)![1];
            const members = [...group.matchAll(/^\t.+\.(.+?) = (\d+)/gm)].map(
                ([, name, value]): EnumMember => ({ name, value: Number(value) }),
            );

            return { name: enumName, members };
        },
    );
}

let enumTypes = parseDump()
    .map(({ name: enumName, members }) => {
        const memberTypes = members.map(({ name, value }) => `    ${name} = ${value},`).join('\n');
        return `declare enum ${enumName} {\n${memberTypes}\n}`;
    })
    .join('\n\n');

enumTypes += '\n';

fs.writeFileSync(path.resolve(__dirname, '../types/enums.generated.d.ts'), enumTypes);
