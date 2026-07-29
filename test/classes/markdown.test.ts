import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { vi } from 'vitest';
import { MarkdownParser } from '../../src/classes/markdown.js';

const mockFile = './test/__mocks__/test.md';
const mockNumberedFile = './test/__mocks__/numbered.md';

/**
 * Creates a throwaway markdown file in the OS temp folder, so tests that write
 * to disk never touch the fixtures in __mocks__
 */
const createTempFile = async (content: string, name = 'temp.md'): Promise<string> => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'md-index-'));
  const file = path.join(dir, name);
  await fs.writeFile(file, content);
  return file;
};

describe('MarkdownParser (Class)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should throw an error if the file is not a markdown file', () => {
      expect(() => new MarkdownParser('somefile.txt')).toThrow('File is not valid');
    });

    it('should accept both md and mdx files', () => {
      expect(() => new MarkdownParser('somefile.md')).not.toThrow();
      expect(() => new MarkdownParser('somefile.mdx')).not.toThrow();
    });
  });

  describe('setTitle', () => {
    it('should set the title', async () => {
      const parser = new MarkdownParser(mockFile);
      parser.setTitle('Test');
      await parser.parse();
      const view = parser.toView().split('\n')[0];
      expect(view).toContain('## Test');
    });
  });

  describe('setDepth', () => {
    it('should set the depth', async () => {
      const parser = new MarkdownParser(mockFile);
      parser.setDepth(3);
      expect(parser.depth).toEqual(3);
    });

    it('should throw an error if the depth is invalid', () => {
      const parser = new MarkdownParser(mockFile);
      expect(() => {
        parser.setDepth(1);
      }).toThrow();

      expect(() => {
        parser.setDepth(6);
      }).toThrow();
    });
  });

  describe('getHeadings', () => {
    it('should filter out the non-headings lines', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Heading 1', 'Some text'];
      expect(parser.getHeadings(mockHeadings).length).toEqual(1);
    });

    it('should handle headings with multiple spaces', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['##    Heading With Extra Spaces', '## Normal Heading', 'Some text'];
      const result = parser.getHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result).toContain('##    Heading With Extra Spaces');
    });
  });

  describe('getListStyle', () => {
    it('should detect numbered list items', () => {
      const parser = new MarkdownParser(mockFile);
      expect(parser.getListStyle('1. Item')).toEqual('1. ');
      expect(parser.getListStyle('2. Item')).toEqual('2. ');
      expect(parser.getListStyle('10. Item')).toEqual('10. ');
    });

    it('should return default bullet style for non-numbered items', () => {
      const parser = new MarkdownParser(mockFile);
      expect(parser.getListStyle('Normal Text')).toEqual('- ');
      expect(parser.getListStyle('- Bulleted item')).toEqual('- ');
    });
  });

  describe('parseHeadings', () => {
    it('should return the markdown links from a list of headings', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Heading 1', '### Heading 2', '### Heading-3', '### Heading_4'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(4);
      expect(result[0]).toEqual('- [Heading 1](#heading-1)');
      expect(result[1]).toEqual('  - [Heading 2](#heading-2)');
      expect(result[2]).toEqual('  - [Heading-3](#heading-3)');
      expect(result[3]).toEqual('  - [Heading_4](#heading_4)');
    });

    it('should properly sanitize the heading for special characters', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = [
        '## Index',
        '## Heading_1 `@hello-/(world)!?`',
        '### Heading 2 `@hello-team/test-docs`',
        '## How to deploy the `@hello-team/test-docs` package to NPM',
      ];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(3);
      expect(result[0]).toEqual('- [Heading_1 `@hello-/(world)!?`](#heading_1-hello-world)');
      expect(result[1]).toEqual('  - [Heading 2 `@hello-team/test-docs`](#heading-2-hello-teamtest-docs)');
      expect(result[2]).toEqual(
        '- [How to deploy the `@hello-team/test-docs` package to NPM](#how-to-deploy-the-hello-teamtest-docs-package-to-npm)',
      );
    });

    it('should filter out the index heading if existing', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Index', '## Heading 1', '### Heading 2'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('- [Heading 1](#heading-1)');
      expect(result[1]).toEqual('  - [Heading 2](#heading-2)');
    });

    it('should parse numbered headings', () => {
      const parser = new MarkdownParser(mockNumberedFile);
      const mockHeadings = ['## Index', '## 1. Heading 1', '## 2. Heading 2'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('1. [Heading 1](#1-heading-1)');
      expect(result[1]).toEqual('2. [Heading 2](#2-heading-2)');
    });

    it('should handle headings with multiple spaces', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['##    Heading  With   Extra    Spaces', '## Normal Heading'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('- [Heading With Extra Spaces](#heading-with-extra-spaces)');
    });

    it('should not indent a line without hashes', () => {
      const parser = new MarkdownParser(mockFile);
      const result = parser.parseHeadings(['Just a line']);
      expect(result).toEqual(['- [Just a line](#just-a-line)']);
    });

    it('should filter out headings that match the custom title', () => {
      const parser = new MarkdownParser(mockFile);
      parser.setTitle('Custom Title');
      const mockHeadings = ['## Custom Title', '## Heading 1', '### Heading 2'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('- [Heading 1](#heading-1)');
      expect(result[1]).toEqual('  - [Heading 2](#heading-2)');
    });
  });

  describe('parse', () => {
    it('should return a list of links', async () => {
      const parser = new MarkdownParser(mockFile);
      const result = await parser.parse();
      expect(result.length).toBeGreaterThanOrEqual(5);
      expect(result[0]).toEqual('- [Heading 2](#heading-2)');
    });

    it('should handle headings with excessive whitespace', async () => {
      const parser = new MarkdownParser(mockFile);
      const result = await parser.parse();
      const headingWithSpaces = result.find(link => link.includes('Heading with spaces'));
      expect(headingWithSpaces).toBeDefined();
      expect(headingWithSpaces).toEqual('- [Heading with spaces](#heading-with-spaces)');
    });

    it('should fail if the file is not found', async () => {
      const parser = new MarkdownParser('sometest.md');
      await expect(parser.parse()).rejects.toThrow(/no such file or directory/);
    });

    it('should ignore the headings inside of a code block', async () => {
      const file = await createTempFile(
        ['# Main Title', '', '## Real Heading', '', '```md', '## Fake Heading', '```', '', '## Another Real'].join(
          '\n',
        ),
      );
      const parser = new MarkdownParser(file);
      const result = await parser.parse();
      expect(result).toEqual(['- [Real Heading](#real-heading)', '- [Another Real](#another-real)']);
    });

    it('should return an empty list if the failure is not an Error', async () => {
      vi.spyOn(fs, 'readFile').mockRejectedValue('a plain string rejection');
      const parser = new MarkdownParser(mockFile);
      await expect(parser.parse()).resolves.toEqual([]);
    });
  });

  describe('toView', () => {
    it('should return the title followed by the links', async () => {
      const parser = new MarkdownParser(mockFile);
      const links = await parser.parse();
      expect(parser.toView()).toEqual(`## Index\n\n${links.join('\n')}`);
    });
  });

  describe('toFile', () => {
    it('should save the index to the given file', async () => {
      const output = path.join(await fs.mkdtemp(path.join(os.tmpdir(), 'md-index-')), 'output.md');
      const parser = new MarkdownParser(mockFile);
      await parser.parse();
      await parser.toFile(output);

      const saved = await fs.readFile(output, 'utf8');
      expect(saved).toContain('## Index');
      expect(saved).toContain('- [Heading 2](#heading-2)');
    });

    it('should throw an error if the file cannot be written', async () => {
      const parser = new MarkdownParser(mockFile);
      await parser.parse();
      await expect(parser.toFile('./this/folder/does/not/exist.md')).rejects.toThrow(/no such file or directory/);
    });

    it('should swallow a failure that is not an Error', async () => {
      const parser = new MarkdownParser(mockFile);
      await parser.parse();
      vi.spyOn(fs, 'writeFile').mockRejectedValue('a plain string rejection');
      await expect(parser.toFile('output.md')).resolves.toBeUndefined();
    });
  });

  describe('replaceOriginal', () => {
    it('should write the index between the existing tags', async () => {
      const file = await createTempFile(
        ['# Main Title', '', '<!-- index-start -->', '<!-- index-end -->', '', '## Heading 2', '', 'Some text'].join(
          '\n',
        ),
      );
      const parser = new MarkdownParser(file);
      await parser.parse();
      await parser.replaceOriginal();

      const updated = await fs.readFile(file, 'utf8');
      expect(updated).toContain('<!-- index-start -->\n## Index\n\n- [Heading 2](#heading-2)\n<!-- index-end -->');
      expect(updated).toContain('## Heading 2');
    });

    it('should add the tags before the first H2 if they are missing', async () => {
      const file = await createTempFile(['# Main Title', '', '## Heading 2', '', 'Some text'].join('\n'));
      const parser = new MarkdownParser(file);
      await parser.parse();
      await parser.replaceOriginal();

      const updated = await fs.readFile(file, 'utf8');
      expect(updated).toContain('<!-- index-start -->');
      expect(updated).toContain('- [Heading 2](#heading-2)');
      expect(updated).toContain('<!-- index-end -->');
    });

    it('should throw an error if the file cannot be written', async () => {
      const parser = new MarkdownParser(mockFile);
      await parser.parse();
      vi.spyOn(fs, 'writeFile').mockRejectedValue(new Error('EACCES: permission denied'));
      await expect(parser.replaceOriginal()).rejects.toThrow('EACCES: permission denied');
    });

    it('should swallow a failure that is not an Error', async () => {
      const parser = new MarkdownParser(mockFile);
      await parser.parse();
      vi.spyOn(fs, 'writeFile').mockRejectedValue('a plain string rejection');
      await expect(parser.replaceOriginal()).resolves.toBeUndefined();
    });
  });
});
