import { generatedEvents } from '../common/events';
import { generatedApi } from './api';
import { generatedEnums, generatedEnumsNormalized } from './enums';
import { generatedModifierProperties } from './modifier-properties';

export const generatedLua = {
  events: generatedEvents,
  api: generatedApi,
  enums: generatedEnums,
  'enums-normalized': generatedEnumsNormalized,
  'modifier-properties': generatedModifierProperties,
};
