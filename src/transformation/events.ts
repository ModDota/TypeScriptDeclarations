import { topLevel, getType, makeComment } from './utils';
import { pascalCase } from '../../node_modules/change-case/change-case';

export interface File {
  [name: string]: EventDeclaration;
}

interface EventDeclaration {
  [key: string]: string;
}

function interfaceProperties(args: EventDeclaration) {
  return Object.entries(args)
    .filter(([name]) => !['local', '_description'].includes(name))
    .map(([name, type]) => `${name}: ${getType(type)}`)
    .join('\n');
}

function eventDeclaration(name: string, event: EventDeclaration) {
  let comment = 'Register as a listener for a game event from script.';
  if (event._description != null) comment += '\n' + event._description;

  const interfaceName = pascalCase(name) + 'Event';
  const interfaceProps = interfaceProperties(event);
  const eventType = interfaceProps === '' ? '{}' : interfaceName;

  let declaration = makeComment(comment, 0);
  declaration += `declare function ListenToGameEvent(eventName: "player_say", callback: (event: ${eventType}) => void, context: table): EventListenerID\n`;

  if (eventType !== '{}') {
    if (event._description != null) declaration += makeComment(event._description, 0);
    declaration += `interface ${interfaceName} {\n`;
    declaration += interfaceProps;
    declaration += '\n}';
  }

  return declaration;
}

export default function file(file: File) {
  return topLevel(Object.entries(file).map(([name, event]) => eventDeclaration(name, event)));
}
