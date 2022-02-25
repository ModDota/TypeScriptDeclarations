import events from '@moddota/dota-data/files/events';
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
  ehandle: 'EntityIndex', //  ???
  player_controller: 'EntityIndex', // entindex of player owner
  player_controller_and_pawn: 'EntityIndex', // entindex of player owner
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export const getEventType = (type: string) => eventTypeMap[type] ?? type;

const gameEventDeclarations = (() => {
  const members = events
    .map((event) => {
      const eventType =
        event.fields.length === 0 ? 'object' : `${_.upperFirst(_.camelCase(event.name))}Event`;
      return withDescription(`${event.name}: ${eventType};`, event.description);
    })
    .join('\n');

  return `interface GameEventDeclarations {${members}}`;
})();

const eventTypes = events
  .map((event) => {
    if (event.fields.length === 0) {
      return '';
    }

    const members = event.fields
      .map((f) => withDescription(`${f.name}: ${getEventType(f.type)}`, f.description))
      .join('\n');

    const interfaceName = `${_.upperFirst(_.camelCase(event.name))}Event`;
    return withDescription(`interface ${interfaceName} {${members}}`, event.description);
  })
  .join('\n\n');

export const generatedEvents = emit(gameEventDeclarations + eventTypes);
