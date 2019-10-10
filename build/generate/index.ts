import { generatedApi } from './api';
import { generatedEnums } from './enums';
import { generatedEvents } from './events';
import { generatedModifierProperties } from './modifier-properties';

export const generated = {
  enums: generatedEnums,
  events: generatedEvents,
  api: generatedApi,
  'modifier-properties': generatedModifierProperties,
};
