import { generatedApi } from './api';
import { generatedEnums, generatedEnumsNormalized } from './enums';
import { generatedEvents } from './events';
import { generatedModifierProperties } from './modifier-properties';

export const generatedLua = {
  enums: generatedEnums,
  'enums-normalized': generatedEnumsNormalized,
  events: generatedEvents,
  api: generatedApi,
  'modifier-properties': generatedModifierProperties,
};
