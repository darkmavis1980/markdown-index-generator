import {Command, flags} from '@oclif/command'
import MarkDownParser from './classes/markdown'
import cli from 'cli-ux'

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
    replace: flags.boolean({char: 'r', description: 'Add the index to the source file', default: false}),
  }

  static args = [{name: 'file', description: 'The input file to parse'}]

  async run(): Promise<undefined> {
    const {args, flags} = this.parse(MarkdownIndexGenerator)
    cli.action.start('Generating index')
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
        await parser.toFile(flags.output)
        this.log(`File ${flags.output} saved!`)
      } else if (flags.replace) {
        await parser.replaceOriginal()
        this.log(`File ${args.file} updated!`)
      } else {
        this.log('--- Begin MarkDown ---')
        this.log(parser.toView())
        this.log('--- End Markdown ---')
      }
    } catch (error: any) {
      this.error(error.message)
    }

    cli.action.stop()
  }
}

export = MarkdownIndexGenerator
