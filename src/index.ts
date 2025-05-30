import { MarkdownParser } from './classes/markdown.js';
import { Flags } from './interfaces/types.js';
import { DEFAULT_VALUES } from './constants.js';

export { MarkdownParser } from './classes/markdown.js';

export const MarkdownIndexGenerator = async(file: string, flags?: Flags) => {
  if (!flags) {
    flags = {...DEFAULT_VALUES};
  }

  if (!file) {
    throw 'Missing file to parse';
  }

  const parser = new MarkdownParser(file);

  if (flags?.depth) {
    parser.setDepth(flags.depth);
  }

  if (flags?.title) {
    parser.setTitle(flags.title);
  }

  await parser.parse();

  if (flags?.output) {
    await parser.toFile(flags.output);
    console.log(`File ${flags.output} saved!`);
    return process.exit(0);
  }

  if (!flags?.dryRun) {
    await parser.replaceOriginal();
    console.log(`File ${file} updated!`);
    return process.exit(0);
  }

  if (flags?.dryRun) {
    console.log('--- Begin MarkDown ---');
    console.log(parser.toView());
    console.log('--- End Markdown ---');
  }
}

export default MarkdownIndexGenerator;