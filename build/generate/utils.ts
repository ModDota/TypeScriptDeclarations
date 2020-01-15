import path from 'path';
import prettier from 'prettier';
import wordwrap from 'wordwrap';

export const withDescription = (declaration: string, description = '') => {
  if (!description) return declaration;
  description = wrapDescription(description);
  description = description.replace(/^/gm, ' * ');
  description = `/**\n${description}\n*/\n`;
  return description + declaration;
};

export const wrapDescription = (description: string, start = 0) =>
  wordwrap({ stop: 80, start })(description.replace(/\n/g, '\n\n'));

const prettierConfig: prettier.Options = {
  parser: 'typescript',
  ...prettier.resolveConfig.sync(path.resolve(__dirname, '../../types/_.generated.d.ts'), {
    editorconfig: true,
  }),
};

// There is some instability in comment formatting
export const emit = (content: string) =>
  prettier.format(prettier.format(content, prettierConfig), prettierConfig);
