import {promises as fs} from 'fs'
import {stringToPermalink} from '../lib/utils'
import {isFileValid} from '../lib/file'
import {START_INJECT_TAG, END_INJECT_TAG} from '../constants'

export default class MarkdownParser {
  /**
   * The MarkDown filename
   */
  private file: string

  private fileCache: string

  /**
   * Container for the list of links
   */
  private links: string[]

  /**
   * Depth of how many headings should be parsed, where 4 means h4, and maximum should be 5
   */
  public depth = 4

  /**
   * Default title of the index
   */
  private title = '## Index\n\n'

  constructor(file: string) {
    if (!isFileValid(file)) {
      throw new Error('File is not valid')
    }
    this.file = file
    this.fileCache = ''
    this.links = []
  }

  /**
   * Set the index title
   * @param {string} title Text for the title
   * @returns {void}
   */
  setTitle(title: string): void {
    this.title = `## ${title}\n\n`
  }

  /**
   * Set the depth for the generator
   * @param {number} depth The depth value, a number between 2 and 5
   * @returns {void}
   */
  setDepth(depth: number): void {
    if (depth < 2 || depth > 5) {
      throw new Error('Depth value not valid')
    }
    this.depth = depth
  }

  /**
   * Goes through each line passed, and filters out everything that is not an
   * heading within the defined range
   * @param {string[]} lines The array of lines found in the document
   * @returns {string[]} The filtered out array
   */
  getHeadings(lines: string[]): string[] {
    const regex = new RegExp(`(^#{2,${this.depth}}\\s[\\w\\s]+)`, 'gm')
    return lines
    .filter(line => line.match(regex))
  }

  /**
   * Will parse the headings and return the links format with indentation in base of the heading
   * @param {string[]} links The list of headings to parse
   * @returns {string[]} The list of links
   */
  parseHeadings(links: string[]): string[] {
    return links.map(heading => {
      const textHeading: string = heading.replace(/#{2,5}\s/, '')
      if (textHeading.toLocaleLowerCase() === 'index') {
        return ''
      }
      const hashes = (heading.match(/#/g) || []).length
      const indents = hashes <= 2 ? 0 : hashes - 2
      const link = `${'  '.repeat(indents)}- [${textHeading}](#${stringToPermalink(textHeading)})`
      return link
    })
    .filter(heading => heading !== '')
  }

  /**
   * Main function parser that reads the file and returns list of links
   * @returns {string[]} The list of links
   * @throws An Error exception
   */
  async parse() {
    try {
      const data = await fs.readFile(this.file)
      const decoded = data.toString('utf8')
      this.fileCache = decoded
      const markdown: string[] = decoded.split('\n')
      const links = this.getHeadings(markdown)
      this.links = this.parseHeadings(links)
      return this.links
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Save the ouput of the links in a file
   * @param {string} outputFile The filename where to store the output
   * @throws An Error exception
   * @returns {Promise} The resolved await fs function
   */
  async toFile(outputFile: string) {
    this.fileCache = ''
    const data = `${this.title}${this.links.join('\n')}`
    try {
      await fs.writeFile(outputFile, data)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Replace the original source file by adding the index between the custom tags
   * @returns {string} The data written
   * @throws An Error exception
   */
  async replaceOriginal() {
    try {
      const tagStartPosition = this.fileCache.indexOf(START_INJECT_TAG)
      const tagEndPosition = this.fileCache.indexOf(END_INJECT_TAG)
      if (tagStartPosition === -1 || tagEndPosition === -1) {
        throw new Error('You must add the index tags in the document!')
      }
      const preTagContent = this.fileCache.slice(0, tagStartPosition + START_INJECT_TAG.length)
      const postTagContent = this.fileCache.slice(tagEndPosition)
      const data = `${this.title}${this.links.join('\n')}`
      const fileData = `${preTagContent}\n${data}\n${postTagContent}`
      await fs.writeFile(this.file, fileData)
      this.fileCache = ''
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Get the output of the parse and it returns it as a string
   * @returns {string} The full output data
   */
  toView(): string {
    this.fileCache = ''
    return `${this.title}${this.links.join('\n')}`
  }
}
