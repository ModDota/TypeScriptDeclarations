import enums from 'dota-data/files/panorama/enums';
import {
  generateEnumDeclarations,
  isGlobalEnumMember,
  normalizeEnumMemberName,
  normalizeEnumName,
} from '../common/enums';

export const generatedEnums = generateEnumDeclarations(enums, false, false);
export const generatedEnumsNormalized = generateEnumDeclarations(enums, false, true);
export const generatedEnumMappings = Object.fromEntries([
  ...enums.flatMap(declaration =>
    declaration.members
      .filter(m => isGlobalEnumMember(m, declaration))
      .map(m => [m.name, `${declaration.name}.${m.name}`]),
  ),
  ...enums.map(declaration => [
    normalizeEnumName(declaration.name),
    Object.fromEntries(
      declaration.members
        .filter(m => !isGlobalEnumMember(m, declaration))
        .map(m => [normalizeEnumMemberName(m.name, declaration), `${declaration.name}.${m.name}`]),
    ),
  ]),
]);
