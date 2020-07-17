import {expect} from '@oclif/test'
import MarkdownParser from '../../src/classes/markdown'

const mockFile = './test/__mocks__/test.md'
const mockNumberedFile = './test/__mocks__/numbered.md'

describe('MarkdownParser (Class)', () => {
  describe('setTitle', () => {
    it('should set the title', async () => {
      const parser = new MarkdownParser(mockFile)
      parser.setTitle('Test')
      await parser.parse()
      const view = parser.toView().split('\n')[0]
      expect(view).to.contain('## Test')
    })
  })

  describe('setDepth', () => {
    it('should set the depth', async () => {
      const parser = new MarkdownParser(mockFile)
      parser.setDepth(3)
      expect(parser.depth).to.equal(3)
    })

    it('should throw an error if the depth is invalid', () => {
      const parser = new MarkdownParser(mockFile)
      expect(() => {
        parser.setDepth(1)
      }).to.throw()

      expect(() => {
        parser.setDepth(6)
      }).to.throw()
    })
  })

  describe('getHeadings', () => {
    it('should filter out the non-headings lines', () => {
      const parser = new MarkdownParser(mockFile)
      const mockHeadings = ['## Heading 1', 'Some text']
      expect(parser.getHeadings(mockHeadings).length).to.equal(1)
    })
  })

  describe('parseHeadings', () => {
    it('should return the markdown links from a list of headings', () => {
      const parser = new MarkdownParser(mockFile)
      const mockHeadings = ['## Heading 1', '### Heading 2']
      const result = parser.parseHeadings(mockHeadings)
      expect(result.length).to.equal(2)
      expect(result[0]).to.equal('- [Heading 1](#heading-1)')
      expect(result[1]).to.equal('  - [Heading 2](#heading-2)')
    })

    it('should filter out the index heading if existing', () => {
      const parser = new MarkdownParser(mockFile)
      const mockHeadings = ['## Index', '## Heading 1', '### Heading 2']
      const result = parser.parseHeadings(mockHeadings)
      expect(result.length).to.equal(2)
      expect(result[0]).to.equal('- [Heading 1](#heading-1)')
      expect(result[1]).to.equal('  - [Heading 2](#heading-2)')
    })

    it('should parse numbered heaedings', () => {
      const parser = new MarkdownParser(mockNumberedFile)
      const mockHeadings = ['## Index', '## 1. Heading 1', '## 2. Heading 2']
      const result = parser.parseHeadings(mockHeadings)
      expect(result.length).to.equal(2)
      expect(result[0]).to.equal('1. [Heading 1](#1-heading-1)')
      expect(result[1]).to.equal('2. [Heading 2](#2-heading-2)')
    })
  })

  describe('parse', () => {
    it('should return a list of links', async () => {
      const parser = new MarkdownParser(mockFile)
      const result = await parser.parse()
      expect(result.length).to.equal(5)
      expect(result[0]).to.equal('- [Heading 2](#heading-2)')
    })

    xit('should fail if the file is not found', async () => {
      const parser = new MarkdownParser('sometest.md')
      expect(await parser.parse().catch).to.not.be.undefined
    })
  })
})
