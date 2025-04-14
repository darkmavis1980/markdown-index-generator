import { promises as fs } from 'fs';
import { stringToPermalink } from '../lib/utils';
import { isFileValid } from '../lib/file';
import { replaceTag, replaceBlock } from '../lib/tags';
import { INDEX_TAG } from '../constants';

export class MarkdownParser {
  /**
   * The MarkDown filename
   */
  private file: string;

  private fileCache: string;

  /**
   * Container for the list of links
   */
  private links: string[];

  /**
   * Depth of how many headings should be parsed, where 4 means h4, and maximum should be 5
   */
  public depth = 4;

  /**
   * Default title of the index
   */
  private title = '## Index\n\n';

  constructor(file: string) {
    if (!isFileValid(file)) {
      throw new Error('File is not valid');
    }

    this.file = file;
    this.fileCache = '';
    this.links = [];
  }

  /**
   * Set the index title
   * @param title Text for the title
   */
  setTitle(title: string): void {
    this.title = `## ${title}\n\n`;
  }

  /**
   * Set the depth for the generator
   * @param depth The depth value, a number between 2 and 5
   */
  setDepth(depth: number): void {
    if (depth < 2 || depth > 5) {
      throw new Error('Depth value not valid');
    }

    this.depth = depth;
  }

  /**
   * Goes through each line passed, and filters out everything that is not an
   * heading within the defined range
   * @param lines The array of lines found in the document
   * @returns The filtered out array
   */
  getHeadings(lines: string[]): string[] {
    const regex = new RegExp(`(^#{2,${this.depth}}\\s[\\w\\s]+)`, 'gm');
    return lines.filter(line => line.match(regex));
  }

  /**
   * Parse a text and try to find if it's a numbered list item or not
   * @param text The heading to parse
   * @returns The style according to the type
   */
  getListStyle(text: string): string {
    const regex = /^(\d.\s)/;
    const match = text.match(regex);
    if (match) {
      return match[1];
    }

    return '- ';
  }

  /**
   * Will parse the headings and return the links format with indentation in base of the heading
   * @param links The list of headings to parse
   * @returns The list of links
   */
  parseHeadings(links: string[]): string[] {
    const currentTitle = this.title.replace(/##\s/gim, '').toLocaleLowerCase().trim();
    return links
      .map(heading => {
        const textHeading: string = heading.replace(/#{2,5}\s/, '');
        if (textHeading.toLocaleLowerCase() === 'index' || textHeading.toLocaleLowerCase() === currentTitle) {
          return '';
        }

        const hashes = (heading.match(/#/g) || []).length;
        const indents = hashes <= 2 ? 0 : hashes - 2;
        const listStyle = this.getListStyle(textHeading);
        const link = `${'  '.repeat(indents)}${listStyle}[${textHeading.replace(listStyle, '')}](#${stringToPermalink(textHeading)})`;
        return link;
      })
      .filter(heading => heading !== '');
  }

  /**
   * Main function parser that reads the file and returns list of links
   * @returns The list of links
   * @throws An Error exception
   */
  async parse(): Promise<string[]> {
    try {
      const data = await fs.readFile(this.file);
      const decoded = data.toString('utf8');
      this.fileCache = decoded;
      const markdown: string[] = [...replaceBlock(decoded, '```').split('\n')];
      const links = this.getHeadings(markdown);
      this.links = this.parseHeadings(links);
      return this.links;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      return [];
    }
  }

  /**
   * Save the ouput of the links in a file
   * @param outputFile The filename where to store the output
   * @throws An Error exception
   * @returns The resolved await fs function
   */
  async toFile(outputFile: string): Promise<void> {
    this.fileCache = '';
    const data = `${this.title}${this.links.join('\n')}`;
    try {
      await fs.writeFile(outputFile, data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  /**
   * Replace the original source file by adding the index between the custom tags
   * @returns void
   * @throws An Error exception
   */
  async replaceOriginal(): Promise<void> {
    try {
      const data = `${this.title}${this.links.join('\n')}`;
      const fileData = replaceTag(this.fileCache, INDEX_TAG, data);
      await fs.writeFile(this.file, fileData);
      this.fileCache = '';
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  /**
   * Get the output of the parse and it returns it as a string
   * @returns The full output data
   */
  toView(): string {
    this.fileCache = '';
    return `${this.title}${this.links.join('\n')}`;
  }
}

export {
  MarkdownParser as default
};
