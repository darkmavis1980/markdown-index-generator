import { replaceTag, replaceBlock, findFirstParagraph } from '../../src/lib/tags';

describe('tags.ts', () => {
  describe('findFirstParagraph (Function)', () => {
    it('should add the index tag', () => {
      const mockContent = `# Some title\n
A paragraph\n
## Subtitle\n
Some text\n`;

      const result = findFirstParagraph(mockContent);
      expect(result).toContain('<!-- index-start -->');
      expect(result).toContain('<!-- index-end -->');
    });

    it('should not pull content from below H2 headings', () => {
      const mockContent = `# Test

## A

Some H2 text that should not be pulled to heading

### B - not pulled

Some H3 text not pulled to heading

## C

### D - H3 should not be pulled because parent H2 has no text`;

      const result = findFirstParagraph(mockContent);
      expect(result).toContain('## A\n\nSome H2 text that should not be pulled to heading');
      expect(result).toContain('## C\n\n### D - H3 should not be pulled because parent H2 has no text');
      expect(result).not.toContain('## ASome H2 text');
      expect(result).not.toContain('## C### D');
    });
  });

  describe('replacetag (Function)', () => {
    it('should replace the content', () => {
      const mockContent = `# Some Title
      <!-- test-start -->
      <!-- test-end -->
      Some test`;
      const result = replaceTag(mockContent, 'test', 'hello');
      expect(result).toContain('hello');
    });

    it('should throw an error if a tag is missing', () => {
      const mockContent = `# Some Title
      <!-- test-start -->
      Some test`;

      expect(() => replaceTag(mockContent, 'test', 'hello')).toThrow();

      const mockContent2 = `# Some Title
      Some test`;

      expect(() => replaceTag(mockContent2, 'test', 'hello')).toThrow();
    });
  });

  describe('replaceBlock (Function)', () => {
    it('should remove the block from the content', () => {
      const mockContent = `# Some Title
      \`\`\`
      Find Me
      \`\`\`
      Some test`;
      const result = replaceBlock(mockContent, '```');
      expect(result).not.toContain('Find Me');
    });

    it('should not remove everything else', () => {
      const mockContent = `# Some Title
      \`\`\`
      Find Me
      \`\`\`
      Some test`;
      const result = replaceBlock(mockContent, '```');
      expect(result).toContain('Some test');
    });

    it('should remove every instance of the block from the content', () => {
      const mockContent = `# Some Title
      \`\`\`
      Find Me
      \`\`\`
      ---
      \`\`\`
      Find Me
      \`\`\`
      Some test`;
      const result = replaceBlock(mockContent, '```');
      expect(result).not.toContain('Find Me');
    });
  });
});
