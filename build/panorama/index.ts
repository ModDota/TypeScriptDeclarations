import { generatedEvents } from '../common/events';
import { generatedEnums, generatedEnumsNormalized } from './enums';

export { generatedEnumMappings as generatedPanoramaEnumMappings } from './enums';

export const generatedPanorama = {
  events: generatedEvents,
  enums: generatedEnums,
  'enums-normalized': generatedEnumsNormalized,
};
