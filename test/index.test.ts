import MarkdownIndexGenerator from '../src/index';

describe('MarkdownIndexGenerator', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show the generated menu', async () => {
    await MarkdownIndexGenerator('./test/__mocks__/test.md');
    expect(console.log).toHaveBeenCalledWith('--- Begin MarkDown ---');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Index'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[Heading 2](#heading-2)'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('- [Sub sub heading 4](#sub-sub-heading-4)'));
    expect(console.log).toHaveBeenCalledWith('--- End Markdown ---');
  });

  it('should show the generated menu, but only at depth 2', async () => {
    await MarkdownIndexGenerator('./test/__mocks__/test.md', { depth: 2, replace: false});
    expect(console.log).toHaveBeenCalledWith('--- Begin MarkDown ---');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[Heading 2](#heading-2)'));
    expect(console.log).toHaveBeenCalledWith(expect.not.stringContaining('- [Sub sub heading 4](#sub-sub-heading-4)'));
    expect(console.log).toHaveBeenCalledWith('--- End Markdown ---');
  });

  it('should show the generated menu, and contain a custom title', async () => {
    await MarkdownIndexGenerator('./test/__mocks__/test.md', { title: 'test', depth: 2, replace: false });
    expect(console.log).toHaveBeenCalledWith('--- Begin MarkDown ---');
    expect(console.log).toHaveBeenCalledWith(expect.not.stringContaining('Index'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('[Heading 2](#heading-2)'));
    expect(console.log).toHaveBeenCalledWith(expect.not.stringContaining('- [Sub sub heading 4](#sub-sub-heading-4)'));
    expect(console.log).toHaveBeenCalledWith('--- End Markdown ---');
  });
});