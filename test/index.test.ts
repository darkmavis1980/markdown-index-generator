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

  // test
  // .stdout()
  // .do(() => cmd.run(['./test/']))
  // .it('should throw an error if the file extension is not valid', ctx => {
  //   console.log('error', ctx.error)
  //   expect(ctx.error).to.contain('Error')
  // })

  // test
  // .stdout()
  // .do(() => cmd.run(['']))
  // .it('should throw an error if no file is defined', ctx => {
  //   expect(ctx.error).to.contain('Error')
  // })
})
