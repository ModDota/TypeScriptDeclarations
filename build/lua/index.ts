import { generatedEvents } from '../common/events';
import { generatedApi } from './api';
import { generatedEnums, generatedEnumsNormalized } from './enums';

export { generatedEnumMappings as generatedLuaEnumMappings } from './enums';

export const generatedLua = {
  events: generatedEvents,
  api: generatedApi,
  enums: generatedEnums,
  'enums-normalized': generatedEnumsNormalized,
};
