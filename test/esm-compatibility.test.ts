import { jest } from '@jest/globals';
import { MarkdownIndexGenerator, MarkdownParser } from '../src/index.js';
import { stringToPermalink } from '../src/lib/utils.js';
import { isFileValid } from '../src/lib/file.js';
import { replaceTag } from '../src/lib/tags.js';

describe('ESM Compatibility', () => {
  test('All exported modules can be imported correctly', () => {
    // Simply verifying that the imports above don't throw errors
    expect(typeof MarkdownIndexGenerator).toBe('function');
    expect(typeof MarkdownParser).toBe('function');
    expect(typeof stringToPermalink).toBe('function');
    expect(typeof isFileValid).toBe('function');
    expect(typeof replaceTag).toBe('function');
  });

  test('MarkdownParser can be instantiated', () => {
    // This will throw if the imports/exports are incorrect
    const mockFile = './test/__mocks__/test.md';
    const parser = new MarkdownParser(mockFile);
    expect(parser).toBeInstanceOf(MarkdownParser);
    expect(parser.depth).toBe(4); // Default depth is 4
  });
  
  test('Relative imports with .js extensions work correctly', async () => {
    // Test that tags.js can import constants.js correctly
    const result = replaceTag('<!-- test-start -->Content<!-- test-end -->', 'test', 'New Content');
    expect(result).toContain('New Content');
    
    // Test that utils functions work correctly
    const permalinkResult = stringToPermalink('Test String with Spaces!');
    expect(permalinkResult).toBe('test-string-with-spaces');
  });
}); 