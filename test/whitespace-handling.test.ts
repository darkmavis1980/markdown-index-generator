import { jest } from '@jest/globals';
import { MarkdownParser } from '../src/classes/markdown.js';

describe('Whitespace Handling in Headings', () => {
  const mockFile = './test/__mocks__/test.md';
  
  test('Multiple whitespaces in headings are properly trimmed', async () => {
    const parser = new MarkdownParser(mockFile);
    await parser.parse();
    const output = parser.toView();
    
    // The test.md file contains "##             Heading with spaces"
    // Check that this is properly parsed and whitespace is normalized in the URL
    expect(output).toContain('(#heading-with-spaces)');
    
    // Verify that the link is generated with no extra spaces in the URL
    expect(output).not.toContain('heading-with--spaces');
    expect(output).not.toContain('heading--with-spaces');
    expect(output).not.toContain('heading---with-spaces');
  });
  
  test('Parser correctly handles headings with various whitespace patterns', () => {
    const parser = new MarkdownParser(mockFile);
    
    // Test with various whitespace patterns
    const mockHeadings = [
      '##             Multiple spaces',
      '## \t \t Tabs and spaces',
      '##\nNewline\nIn\nHeading',
      '##    Leading    and trailing    spaces    ',
    ];
    
    const result = parser.parseHeadings(mockHeadings);
    
    // Check that the generated permalinks are properly formatted
    // The display text may still have the original spaces
    expect(result[0]).toMatch(/#multiple-spaces/);
    expect(result[1]).toMatch(/#tabs-and-spaces/);
    expect(result[2]).toMatch(/#newline-in-heading/);
    expect(result[3]).toMatch(/#leading-and-trailing-spaces/);
  });
  
  test('MarkdownParser.getHeadings handles headings with excessive whitespace', () => {
    const parser = new MarkdownParser(mockFile);
    
    // Create a set of lines with varied whitespace patterns
    const lines = [
      'Some normal text',
      '##    Heading with spaces',
      '###            Another heading',
      '## \t \t Tabs in heading',
      'More normal text',
    ];
    
    const headings = parser.getHeadings(lines);
    
    // Verify that all headings are found regardless of whitespace
    expect(headings.length).toBe(3);
    expect(headings).toContain('##    Heading with spaces');
    expect(headings).toContain('###            Another heading');
    expect(headings).toContain('## \t \t Tabs in heading');
  });
}); 