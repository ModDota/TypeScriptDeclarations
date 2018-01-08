export { default as getType } from '../getType';

export function makeComment(str: string, indentLength: number) {
  const indent = '  '.repeat(indentLength);
  str = str
    .trim()
    .replace(/\*\//g, '* /')
    .replace(/\n/g, '\n *\n * ');
  return `${indent}/*\n${indent} * ${str}\n${indent} */\n`;
}

export function topLevel(elements: (string | string[])[]) {
  let declaration = '';
  elements.forEach(element => {
    declaration += Array.isArray(element) ? element.join('') : element;
  });
  return declaration;
}
