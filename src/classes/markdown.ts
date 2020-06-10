import * as fs from 'fs'
import {stringToPermalink} from '../lib/utils'

export default class MarkdownParser {
  /**
   * The MarkDown filename
   */
  private file: string

  private headings: string[]

  constructor(file: string) {
    this.file = file
    this.headings = []
  }

  getHeadings(lines: string[]): string[] {
    const regex = /(^#{2,4}\s[\w\s]+)/gm
    return lines
    .filter(line => line.match(regex))
  }

  parseHeadings(headings: string[]): string[] {
    return headings.map(heading => {
      const textHeading: string = heading.replace(/#{2,4}\s/, '')
      if (textHeading.toLocaleLowerCase() === 'index') {
        return ''
      }
      const hashes = (heading.match(/#/g) || []).length
      const indents = hashes <= 2 ? 0 : hashes - 2
      const link = `${' '.repeat(indents)}- [${textHeading}](#${stringToPermalink(textHeading)})`
      return link
    })
    .filter(heading => heading !== '')
  }

  parse(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      fs
      .createReadStream(this.file)
      .on('data', data => {
        const decoded = data.toString('utf8')
        const markdown: string[] = decoded.split('\n')
        const headings = this.getHeadings(markdown)
        const markup = this.parseHeadings(headings)
        this.headings = markup
      })
      .on('error', error => reject(error))
      .on('end', () => {
        resolve(this.headings)
      })
    })
  }

  async toFile(outputFile: string) {
    const data = `## Index\n${this.headings.join('\n')}`
    await fs.writeFile(outputFile, data, err => {
      if (err) {
        console.log(err)
      }
    })
  }
}
