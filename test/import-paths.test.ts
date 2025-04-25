import { jest } from '@jest/globals';
import * as fs from 'fs';
import * as path from 'path';

describe('Import Paths', () => {
  test('Compiled JS files have correct import paths with .js extensions', async () => {
    // Check main index.js file
    const indexPath = path.resolve(process.cwd(), 'lib/index.js');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Verify imports have .js extensions
    expect(indexContent).toMatch(/from ['"]\.\/classes\/markdown\.js['"]/);
    expect(indexContent).toMatch(/from ['"]\.\/constants\.js['"]/);
    
    // Check markdown.js file
    const markdownPath = path.resolve(process.cwd(), 'lib/classes/markdown.js');
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    
    // Verify imports have .js extensions
    expect(markdownContent).toMatch(/from ['"]\.\.\/lib\/utils\.js['"]/);
    expect(markdownContent).toMatch(/from ['"]\.\.\/lib\/file\.js['"]/);
    expect(markdownContent).toMatch(/from ['"]\.\.\/lib\/tags\.js['"]/);
    expect(markdownContent).toMatch(/from ['"]\.\.\/constants\.js['"]/);
    
    // There should be no incorrect import paths like lib/lib/utils
    expect(markdownContent).not.toMatch(/['"]\.\.\/(lib\/lib|\.\.\/lib)\/utils['"]/);
  });
  
  test('No duplicate or conflicting exports in markdown.js', async () => {
    const markdownPath = path.resolve(process.cwd(), 'lib/classes/markdown.js');
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    
    // There should be only one export for MarkdownParser
    const markdownParserExports = markdownContent.match(/export class MarkdownParser/g) || [];
    expect(markdownParserExports.length).toBe(1);
    
    // There should be no default export that would conflict
    expect(markdownContent).not.toMatch(/export \{ MarkdownParser as default \}/);
  });
}); 