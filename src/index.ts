import {Command, flags} from '@oclif/command'
import MarkDownParser from './classes/markdown'

class MarkdownIndexGenerator extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    output: flags.string({char: 'o', description: 'File to parse'}),
  }

  static args = [{name: 'file'}, {name: 'output'}]

  async run() {
    const {args, flags} = this.parse(MarkdownIndexGenerator)

    const parser = new MarkDownParser(args.file)
    this.log('Parsing file')
    await parser.parse()
    if (flags.output) {
      parser.toFile(flags.output)
    }

    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from ./src/index.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}

export = MarkdownIndexGenerator
