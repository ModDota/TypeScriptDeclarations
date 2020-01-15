import events from 'dota-data/files/events';
import _ from 'lodash';
import { emit, withDescription } from './utils';

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

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export const getEventType = (type: string) => eventTypeMap[type] ?? type;

const gameEventDeclarations = (() => {
  const members = _.uniqBy(
    Object.values(events).flatMap(group => Object.entries(group)),
    // `player_connect` and `hltv_chat` are duplicated
    ([name]) => name,
  ).map(([eventName, event]) =>
    withDescription(
      `${eventName}: ${
        event.fields.length === 0 ? 'object' : `${_.upperFirst(_.camelCase(eventName))}Event`
      }`,
      event.description,
    ),
  );
  return `interface GameEventDeclarations {${members}}`;
})();

const eventTypes = Object.values(events)
  .flatMap(group => Object.entries(group))
  .map(([eventName, event]) => {
    const interfaceName = `${_.upperFirst(_.camelCase(eventName))}Event`;

    if (event.fields.length === 0) {
      return '';
    }

    const members = event.fields
      .map(field =>
        withDescription(`${field.name}: ${getEventType(field.type)}`, field.description),
      )
      .join('\n');

    return withDescription(`interface ${interfaceName} {${members}}`, event.description);
  })
  .join('\n\n');

export const generatedEvents = emit(gameEventDeclarations + eventTypes);
