# Project: Markdown Index Generator

## Project Overview

This project is a Node.js command-line tool written in TypeScript that generates an index for a Markdown file based on its headings. It can be used as a global command-line tool. The tool can replace the index in the source file, output to a different file, or print to the console. The core logic is encapsulated in the `MarkdownParser` class, which handles file reading, heading extraction, and index generation.

## Building and Running

### Installation

```bash
npm install -g md-index-generator
```

### Building the project

```bash
npm run build
```

### Running the tool

```bash
# Replace the passed markdown file
md-index-generator <MarkDown.md>

# Display the output on the shell
md-index-generator <MarkDown.md> --dry-run

# Store the output in a file
md-index-generator <MARKDOWNFILE.md> --output <Index.md>

# Generate the index using only h2 and h3 headings
md-index-generator <MarkDown.md> --depth 3

# Set the title of the index, output will start with "## Docs index"
md-index-generator <MarkDown.md> --title "Docs index"
```

### Running tests

```bash
npm test
```

### Linting

```bash
npm run eslint
```

### Prettier Check

```bash
npm run prettier:check
```

## Development Conventions

- The project uses TypeScript for static typing.
- Code is formatted with Prettier and linted with ESLint.
- Tests are written with Jest.
- The project follows the standard Node.js project structure with `src` for source code and `test` for tests.
- The `main` entry point is `lib/index.js`, which is the compiled version of `src/index.ts`.
- The executable is located in the `bin` directory.
- The project uses `npm` for package management.
