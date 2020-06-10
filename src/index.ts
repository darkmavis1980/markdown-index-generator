import {Command, flags} from '@oclif/command'
import MarkDownParser from './classes/markdown'

class MarkdownIndexGenerator extends Command {
  static description = 'Reads a MarkDown file and generate an index using the headings'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-o, --output=VALUE)
    output: flags.string({char: 'o', description: 'Output will be saved in the defined file'}),
    // flag with a value (-d, --depth=VALUE)
    depth: flags.integer({char: 'd', description: 'Depth of the headings to parse, 4 means \'till h4\'', default: 4}),
    // flag with a value (-t, --title=VALUE)
    title: flags.string({char: 't', description: 'Title to add on top of the index, by default is \'## Index\''}),
  }

  static args = [{name: 'file', description: 'The input file to parse'}]

  async run() {
    const {args, flags} = this.parse(MarkdownIndexGenerator)
    try {
      if (!args.file) {
        return this.error('Missing file to parse')
      }

      const parser = new MarkDownParser(args.file)
      if (flags.depth) {
        parser.setDepth(flags.depth)
      }
      if (flags.title) {
        parser.setTitle(flags.title)
      }
      await parser.parse()
      if (flags.output) {
        parser.toFile(flags.output)
        this.log(`File ${flags.output} saved!`)
      } else {
        this.log('--- Begin MarkDown ---')
        this.log(parser.toView())
        this.log('--- End Markdown ---')
      }
    } catch (error) {
      this.error(error.message)
    }
  }
}

export = MarkdownIndexGenerator
