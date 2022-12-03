import MarkdownParser from '../../src/classes/markdown'

const mockFile = './test/__mocks__/test.md'
const mockNumberedFile = './test/__mocks__/numbered.md'

describe('MarkdownParser (Class)', () => {
  describe('setTitle', () => {
    it('should set the title', async () => {
      const parser = new MarkdownParser(mockFile);
      parser.setTitle('Test');
      await parser.parse();
      const view = parser.toView().split('\n')[0];
      expect(view).toContain('## Test');
    })
  })

  describe('setDepth', () => {
    it('should set the depth', async () => {
      const parser = new MarkdownParser(mockFile);
      parser.setDepth(3);
      expect(parser.depth).toEqual(3);
    })

    it('should throw an error if the depth is invalid', () => {
      const parser = new MarkdownParser(mockFile);
      expect(() => {
        parser.setDepth(1);
      }).toThrow();

      expect(() => {
        parser.setDepth(6);
      }).toThrow();
    })
  })

  describe('getHeadings', () => {
    it('should filter out the non-headings lines', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Heading 1', 'Some text'];
      expect(parser.getHeadings(mockHeadings).length).toEqual(1);
    })
  })

  describe('parseHeadings', () => {
    it('should return the markdown links from a list of headings', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Heading 1', '### Heading 2'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('- [Heading 1](#heading-1)');
      expect(result[1]).toEqual('  - [Heading 2](#heading-2)');
    })

    it('should properly sanitize the heading for special characters', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Index', '## Heading 1 `@hello-/(world)!?`', '### Heading 2 `@hello-team/test-docs`', '## How to deploy the `@hello-team/test-docs` package to NPM'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(3);
      expect(result[0]).toEqual('- [Heading 1 `@hello-/(world)!?`](#heading-1-hello-world)');
      expect(result[1]).toEqual('  - [Heading 2 `@hello-team/test-docs`](#heading-2-hello-teamtest-docs)');
      expect(result[2]).toEqual('- [How to deploy the `@hello-team/test-docs` package to NPM](#how-to-deploy-the-hello-teamtest-docs-package-to-npm)');
    })

    it('should filter out the index heading if existing', () => {
      const parser = new MarkdownParser(mockFile);
      const mockHeadings = ['## Index', '## Heading 1', '### Heading 2'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('- [Heading 1](#heading-1)');
      expect(result[1]).toEqual('  - [Heading 2](#heading-2)');
    })

    it('should parse numbered heaedings', () => {
      const parser = new MarkdownParser(mockNumberedFile);
      const mockHeadings = ['## Index', '## 1. Heading 1', '## 2. Heading 2'];
      const result = parser.parseHeadings(mockHeadings);
      expect(result.length).toEqual(2);
      expect(result[0]).toEqual('1. [Heading 1](#1-heading-1)');
      expect(result[1]).toEqual('2. [Heading 2](#2-heading-2)');
    })
  })

  describe('parse', () => {
    it('should return a list of links', async () => {
      const parser = new MarkdownParser(mockFile);
      const result = await parser.parse();
      expect(result.length).toEqual(5);
      expect(result[0]).toEqual('- [Heading 2](#heading-2)');
    })

    it('should fail if the file is not found', async () => {
      const parser = new MarkdownParser('sometest.md');
      expect(
        await parser.parse().catch
      ).toBeDefined();
    })
  })
})
