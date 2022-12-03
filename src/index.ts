import MarkDownParser from './classes/markdown';
import { Flags } from './interfaces/types';
import { DEFAULT_VALUES } from './constants';

const MarkdownIndexGenerator = async(file: string, flags?: Flags) => {
  if (!flags) {
    flags = {...DEFAULT_VALUES};
  }

  if (!file) {
    throw 'Missing file to parse';
  }

  const parser = new MarkDownParser(file);

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
  } else if (flags?.replace) {
    await parser.replaceOriginal();
    console.log(`File ${file} updated!`);
  } else {
    console.log('--- Begin MarkDown ---');
    console.log(parser.toView());
    console.log('--- End Markdown ---');
  }
}

export = MarkdownIndexGenerator;
