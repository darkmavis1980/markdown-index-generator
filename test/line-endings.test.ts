import { MarkdownParser } from '../src/classes/markdown';
import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Line Endings', () => {
  const mixedLineEndingsContent = '# Test\n\n## Heading 1\r\n### Heading 2\r';
  const expectedLinks = [
    '- [Heading 1](#heading-1)',
    '  - [Heading 2](#heading-2)',
  ];

  it('should handle mixed line endings', async () => {
    const tempDir = await fs.mkdtemp(path.join(__dirname, 'temp-'));
    const tempFile = path.join(tempDir, 'test.md');
    await fs.writeFile(tempFile, mixedLineEndingsContent);
    const parser = new MarkdownParser(tempFile);
    const links = await parser.parse();
    expect(links).toEqual(expectedLinks);
    await fs.rm(tempDir, { recursive: true, force: true });
  });
});
