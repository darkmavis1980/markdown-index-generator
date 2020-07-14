import {expect} from '@oclif/test'
import {isFileValid} from '../../src/lib/file'

describe('Utils', () => {
  describe('isFileValid', () => {
    it('should return false if the file is incorrect', () => {
      expect(isFileValid('test')).to.be.false
      expect(isFileValid('/test/')).to.be.false
      expect(isFileValid('/test.js')).to.be.false
    })

    it('should return true if the file is correct', () => {
      expect(isFileValid('test.md')).to.be.true
      expect(isFileValid('./test.md')).to.be.true
      expect(isFileValid('./somepath/test.md')).to.be.true
      expect(isFileValid('./somepath/test.mdx')).to.be.true
    })
  })
})

