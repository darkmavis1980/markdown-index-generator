# md-index-generator
========================

Parses a markdown document and creates an index based on headings.

> The h1 heading will be ignored as it should be used only for the main title of the document

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/md-index-generator.svg)](https://npmjs.org/package/md-index-generator)
[![Downloads/week](https://img.shields.io/npm/dw/md-index-generator.svg)](https://npmjs.org/package/md-index-generator)
[![License](https://img.shields.io/npm/l/md-index-generator.svg)](https://github.com/experimental/markdown-index-generator/blob/master/package.json)
![Build Status](https://github.com/darkmavis1980/markdown-index-generator/workflows/CI/badge.svg)

## Usage
```sh-session
$ npm install -g md-index-generator
$ md-index-generator COMMAND
running command...
$ md-index-generator (-v|--version|version)
md-index-generator/0.9.3 darwin-x64 node-v14.5.0

// Display the output on the shell
$ md-index-generator <MarkDown.md>

// Store the output in a file
$ md-index-generator <MARKDOWNFILE.md> --output <Index.md>

// Generate the index using only h2 and h3 headings
$ md-index-generator <MarkDown.md> --depth 3

// Set the title of the index, output will start with "## Docs index"
$ md-index-generator <MarkDown.md> --title "Docs index"

// Replace the passed markdown file
$ md-index-generator <MarkDown.md> --replace
```

### Optional flags

`-o, --output <VALUE>` This takes an output file, where the parsed index will be stored instead of being shown in the shell

`-d, --depth <VALUE>` This sets the depth, with a range between 2 and 5, so if sets to 3, it will parse the headings until H3, default value is 4

`-t, --title <VALUE>` This set the title for the index list, by default is set to `Index`

`-r, --replace` This flag will set to add the index in the source file

#### Add the index in the source file

If you wish to modify the file you are passing as a source, you must add the tags `<!-- index-start -->` and `<!-- index-end -->` in the markdown document.
Here a sample:

```
# Your Fancy document

<!-- index-start -->
The index will go here!
<!-- index-end -->

## Some more stuff

Hello
```
