#!/usr/bin/env node

import { program } from 'commander';
import project from '../package.json' assert { type: "json" };
import MarkdownIndexGenerator from '../lib/index.js';

program
  .version(project.version)
  .arguments('<file>', 'The file to parse')
  .option('-o', '--output <outputFile>', 'Output will be saved in the defined file')
  .option('-d', '--depth <depth>', 'Depth of the headings to parse, 4 means \'till h4\'', 4)
  .option('-t', '--title <title>', 'Title to add on top of the index, by default is \'## Index\'')
  .option('-r', '--replace', 'Add the index to the source file', false)
  .action(MarkdownIndexGenerator);

program.parse();