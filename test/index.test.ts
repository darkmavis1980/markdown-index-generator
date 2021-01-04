import {expect, test} from '@oclif/test'
import cmd = require('../src')

describe('md-index-generator', () => {
  test
  .stdout()
  .do(() => cmd.run(['./test/__mocks__/test.md']))
  .it('runs md-index-generator and contains the proper links', ctx => {
    expect(ctx.stdout).to.contain('[Heading 2](#heading-2)')
  })

  test
  .stdout()
  .do(() => cmd.run(['./test/__mocks__/test.md']))
  .it('runs md-index-generator and contains an heading', ctx => {
    expect(ctx.stdout).to.contain('## Index')
  })

  test
  .stdout()
  .do(() => cmd.run(['./test/__mocks__/test.md', '--title', 'hello']))
  .it('runs md-index-generator and contains an heading with custom text', ctx => {
    expect(ctx.stdout).to.contain('## hello')
  })

  test
  .stderr()
  .do(() => cmd.run(['']))
  .catch(error => {
    expect(error.message).to.contain('Missing file to parse')
  })
  .it('expect to throw an error if no arguments is passed')
})
