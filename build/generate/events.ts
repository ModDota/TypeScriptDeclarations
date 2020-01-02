import events from 'dota-data/files/events';
import * as dom from 'dts-dom';
import _ from 'lodash';
import { emit, withDescription, wrapDescription } from './utils';

const eventTypeMap: Record<string, string> = {
  bool: '0 | 1',
  byte: 'number',
  short: 'number',
  int: 'number',
  long: 'number',
  float: 'number',
  uint64: 'number',
  local: 'any',
};

export const getEventType = (type: string) =>
  dom.create.namedTypeReference(eventTypeMap[type] ?? type);

const providedProperties: dom.InterfaceDeclaration = {
  kind: 'interface',
  name: 'GameEventProvidedProperties',
  members: [
    dom.create.property('game_event_listener', dom.create.namedTypeReference('EventListenerID')),
    dom.create.property('game_event_name', dom.type.string),
    dom.create.property('splitscreenplayer', dom.type.number),
  ],
};

const gameEventDeclarations: dom.InterfaceDeclaration = {
  kind: 'interface',
  name: 'GameEventDeclarations',
  members: _.uniqBy(
    Object.values(events).flatMap(group => Object.entries(group)),
    // `player_connect` and `hltv_chat` are duplicated
    ([name]) => name,
  ).map(
    ([eventName, event]): dom.ObjectTypeMember => ({
      kind: 'property',
      name: eventName,
      jsDocComment: event.description && wrapDescription(event.description),
      type:
        event.fields.length === 0
          ? dom.type.object
          : dom.create.namedTypeReference(_.upperFirst(_.camelCase(eventName)) + 'Event'),
    }),
  ),
};

const eventTypes = Object.values(events)
  .flatMap(group => Object.entries(group))
  .flatMap<dom.InterfaceDeclaration>(([eventName, event]) => {
    const interfaceName = _.upperFirst(_.camelCase(eventName)) + 'Event';

    if (event.fields.length === 0) {
      return [];
    }

    return {
      kind: 'interface',
      name: interfaceName,
      jsDocComment: event.description && wrapDescription(event.description),
      members: event.fields.map(field =>
        withDescription(
          dom.create.property(field.name, getEventType(field.type)),
          field.description,
        ),
      ),
    };
  });

export const generatedEvents = emit(
  [providedProperties, gameEventDeclarations, ...eventTypes],
  false,
);
