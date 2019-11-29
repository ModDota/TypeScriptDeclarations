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
  getFunction(
    (p, r) => dom.create.function('ListenToGameEvent', p, r),
    'ListenToGameEvent',
    {
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
    },
    'both',
  );

const commonGameEventProperties: dom.InterfaceDeclaration = {
  kind: 'interface',
  name: 'CommonGameEventProperties',
  members: [
    dom.create.property('game_event_listener', dom.create.namedTypeReference('EventListenerID')),
    dom.create.property('game_event_name', dom.type.string),
    dom.create.property('splitscreenplayer', dom.type.number),
  ],
};

export const generatedEvents = emit(
  [
    commonGameEventProperties,
    ...Object.values(events)
      .flatMap(group => Object.entries(group))
      .map(([eventName, event]) => {
        const interfaceName = _.upperFirst(_.camelCase(eventName)) + 'Event';
        const description = event.description;

        if (event.fields.length === 0) {
          return ltgeFunction(eventName, commonGameEventProperties.name, description);
        }

        const type = withDescription(dom.create.interface(interfaceName), description);
        type.baseTypes = [commonGameEventProperties];
        type.members = event.fields.map(field =>
          withDescription(
            dom.create.property(field.name, getEventType(field.type)),
            field.description,
          ),
        );

        return [...ltgeFunction(eventName, interfaceName, description), type];
      }),
  ],
  false,
);
