const map: { [key: string]: string } = {
  nil: 'void',
  '<unknown>': 'any',
  cstring: 'string',

  float: 'number',
  int: 'number',
  uint: 'number',
  uint64: 'number',
  unsigned: 'number',
  byte: 'number',
  short: 'number',
  long: 'number',

  bool: 'boolean',
  handle: 'table',
  qangle: 'QAngle',
  quaternion: 'Quaternion',
  vector: 'Vector',
  CProjectileID: 'ProjectileID',
  local: 'any',
};

export default function getType(type: string): string {
  if (map[type] != null) return map[type];

  const callbackMatch = type.match(/^fun\((.+?)\): (.+)$/);
  const unionMatch = type.includes(' | ');

  if (unionMatch) {
    return type
      .split(/\s?\|\s?/)
      .map(t => getType(t))
      .join(' | ');
  }

  if (callbackMatch != null) {
    const returnValue = getType(callbackMatch[2]);
    const args = callbackMatch[1].split(', ').map(argPair => {
      const [name, type] = argPair.split(/:\s?/);
      return `${name}: ${getType(type)}`;
    });
    return `(${args.join(', ')}) => ${returnValue}`;
  }

  if (type.endsWith('?')) {
    type = `${type.slice(0, -1)} | null | undefined`;
  }

  return type;
}
