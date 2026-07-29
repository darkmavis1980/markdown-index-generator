import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { vi } from 'vitest';
import { MarkdownIndexGenerator } from '../src/index.js';

const createTempFile = async (content: string, name = 'temp.md'): Promise<string> => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'md-index-'));
  const file = path.join(dir, name);
  await fs.writeFile(file, content);
  return file;
};

describe('MarkdownIndexGenerator', () => {
  beforeEach(() => {
    console.log = vi.fn();
    // process.exit is stubbed out, otherwise the output/replace flows would kill the test run
    vi.spyOn(process, 'exit').mockImplementation((() => undefined) as never);
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should show the generated menu', async () => {
    await MarkdownIndexGenerator('./test/__mocks__/test.md', { dryRun: true });
    expect(console.log).toHaveBeenCalledWith('--- Begin MarkDown ---');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Index'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[Heading 2](#heading-2)'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('- [Sub sub heading 4](#sub-sub-heading-4)'));
    expect(console.log).toHaveBeenCalledWith('--- End Markdown ---');
  });

  it('should show the generated menu, but only at depth 2', async () => {
    await MarkdownIndexGenerator('./test/__mocks__/test.md', { depth: 2, dryRun: true});
    expect(console.log).toHaveBeenCalledWith('--- Begin MarkDown ---');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[Heading 2](#heading-2)'));
    expect(console.log).toHaveBeenCalledWith(expect.not.stringContaining('- [Sub sub heading 4](#sub-sub-heading-4)'));
    expect(console.log).toHaveBeenCalledWith('--- End Markdown ---');
  });

  it('should show the generated menu, and contain a custom title', async () => {
    await MarkdownIndexGenerator('./test/__mocks__/test.md', { title: 'test', depth: 2, dryRun: true });
    expect(console.log).toHaveBeenCalledWith('--- Begin MarkDown ---');
    expect(console.log).toHaveBeenCalledWith(expect.not.stringContaining('Index'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[Heading 2](#heading-2)'));
    expect(console.log).toHaveBeenCalledWith(expect.not.stringContaining('- [Sub sub heading 4](#sub-sub-heading-4)'));
    expect(console.log).toHaveBeenCalledWith('--- End Markdown ---');
  });

  it('should throw if no file is passed', async () => {
    await expect(MarkdownIndexGenerator('')).rejects.toEqual('Missing file to parse');
  });

  it('should update the source file when no flags are passed', async () => {
    const file = await createTempFile(
      ['# Main Title', '', '<!-- index-start -->', '<!-- index-end -->', '', '## Heading 2', '', 'Some text'].join(
        '\n',
      ),
    );

    await MarkdownIndexGenerator(file);

    const updated = await fs.readFile(file, 'utf8');
    expect(updated).toContain('- [Heading 2](#heading-2)');
    expect(console.log).toHaveBeenCalledWith(`File ${file} updated!`);
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it('should write the index to the output file when the output flag is passed', async () => {
    const output = path.join(await fs.mkdtemp(path.join(os.tmpdir(), 'md-index-')), 'output.md');

    await MarkdownIndexGenerator('./test/__mocks__/test.md', { output });

    const saved = await fs.readFile(output, 'utf8');
    expect(saved).toContain('## Index');
    expect(saved).toContain('- [Heading 2](#heading-2)');
    expect(console.log).toHaveBeenCalledWith(`File ${output} saved!`);
    expect(process.exit).toHaveBeenCalledWith(0);
  });
});