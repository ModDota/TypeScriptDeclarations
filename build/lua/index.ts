import { generatedEvents } from '../common/events';
import { generatedApi } from './api';
import { generatedApiTypes } from './api-types';
import { generatedEnums, generatedEnumsNormalized } from './enums';

export { generatedEnumMappings as generatedLuaEnumMappings } from './enums';

export const generatedLua = {
  events: generatedEvents,
  api: generatedApi,
  'api-types': generatedApiTypes,
  enums: generatedEnums,
  'enums-normalized': generatedEnumsNormalized,
};
