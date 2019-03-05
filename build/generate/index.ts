import { generatedApi } from './api';
import { generatedEnums } from './enums';
import { generatedEvents } from './events';
import { generatedModifierProperties } from './modifier';

export const generated = {
  enums: generatedEnums,
  events: generatedEvents,
  methods: generatedApi,
  'modifier-properties': generatedModifierProperties,
};
