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
})
