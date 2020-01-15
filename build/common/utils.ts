import path from 'path';
import prettier from 'prettier';
import wordwrap from 'wordwrap';

export const wrapDescription = (description: string, start = 0) =>
  wordwrap({ stop: 80, start })(description.replace(/\n/g, '\n\n'));

const formatJSDoc = (description: string) =>
  `/**\n${wrapDescription(description).replace(/^/gm, ' * ')}\n*/\n`;

const optionalDescription = (description?: string) =>
  description != null ? formatJSDoc(description) : '';

export const withDescription = (declaration: string, description?: string) =>
  optionalDescription(description) + declaration;

const prettierConfig: prettier.Options = {
  parser: 'typescript',
  ...prettier.resolveConfig.sync(
    path.resolve(__dirname, '../../packages/panorama-types/types/_.generated.d.ts'),
    { editorconfig: true },
  ),
};

interface EmitOptions {
  availability?: 'client' | 'server' | 'both';
}

export const emit = (content: string, { availability = 'both' }: EmitOptions = {}) => {
  content =
    (availability === 'both' ? '' : `// @validateApiUsageDefault ${availability}\n\n`) + content;

  // There is some instability in comment formatting
  content = prettier.format(prettier.format(content, prettierConfig), prettierConfig);

  return content;
};
