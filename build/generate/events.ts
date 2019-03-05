import events from 'dota-data/files/events';
import api from 'dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import _ from 'lodash';
import { emit, getFunction, withDescription } from './utils';

const eventTypeMap: Record<string, string> = {
  bool: 'boolean',
  byte: 'number',
  short: 'number',
  int: 'number',
  long: 'number',
  float: 'number',
  uint64: 'number',
  local: 'any',
};

export const getEventType = (type: string) =>
  dom.create.namedTypeReference(eventTypeMap[type] || type);

const ltgeMethod = api.find(
  (x): x is api.FunctionDeclaration => x.kind === 'function' && x.name === 'ListenToGameEvent',
)!;

const ltgeFunction = (eventName: string, interfaceName: string, eventDescription?: string) =>
  getFunction((p, r) => dom.create.function('ListenToGameEvent', p, r), 'ListenToGameEvent', {
    ...ltgeMethod,
    description: eventDescription,
    args: [
      { ...ltgeMethod.args[0], types: [JSON.stringify(eventName)] },
      {
        ...ltgeMethod.args[1],
        types: [{ returns: ['void'], args: [{ name: 'event', types: [interfaceName] }] }],
      },
      ltgeMethod.args[2],
    ],
  });

export const generatedEvents = emit(
  _.flatMap(Object.entries(events), ([groupName, group]) =>
    Object.entries(group).map(([eventName, event]) => {
      const interfaceName = _.upperFirst(_.camelCase(eventName)) + 'Event';
      let description = event.description || '';
      if (description !== '') description += '\n';
      description += `@namespace ${groupName}`;

      if (event.fields.length === 0) {
        return ltgeFunction(eventName, '{}', description);
      }

      const type = withDescription(dom.create.interface(interfaceName), description);
      type.members = event.fields.map(field =>
        withDescription(
          dom.create.property(field.name, getEventType(field.type)),
          field.description,
        ),
      );

      return [...ltgeFunction(eventName, interfaceName, description), type];
    }),
  ),
);
