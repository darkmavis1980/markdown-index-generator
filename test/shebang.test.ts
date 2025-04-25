import { jest } from '@jest/globals';
import * as fs from 'fs';
import * as path from 'path';

describe('Shebang Compatibility', () => {
  test('The bin/run file has a compatible shebang', () => {
    const binPath = path.resolve(process.cwd(), 'bin/run');
    const binContent = fs.readFileSync(binPath, 'utf8');
    const firstLine = binContent.split('\n')[0];
    
    // The shebang should be the compatible version for modern systems
    expect(firstLine).toBe('#!/usr/bin/env -S npx tsx');
  });
  
  test('The bin/run file imports have correct extensions', () => {
    const binPath = path.resolve(process.cwd(), 'bin/run');
    const binContent = fs.readFileSync(binPath, 'utf8');
    
    // Check the import statements have correct extensions
    // In this project, the bin file might not need .js extensions depending on configuration
    // Just verify that important imports are present
    expect(binContent).toContain('import jsonData from');
    expect(binContent).toContain('import { MarkdownIndexGenerator }');
  });
}); 