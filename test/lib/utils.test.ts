import {expect} from '@oclif/test'
import {stringToPermalink} from '../../src/lib/utils'

describe('Utils', () => {
  describe('stringToPermalink', () => {
    it('should return the url formatted string', () => {
      expect(stringToPermalink('Hello world')).to.equal('hello-world')
    })

    it('should escape punctuation characters', () => {
      expect(stringToPermalink('Hello, world')).to.equal('hello-world')
      expect(stringToPermalink('Hello. World!')).to.equal('hello-world')
    })

    it('should escape special characters', () => {
      expect(stringToPermalink('Hello, @@--`world')).to.equal('hello-world')
      expect(stringToPermalink('Hello /world!****')).to.equal('hello-world')
      expect(stringToPermalink('---Hello---world---')).to.equal('helloworld')
    })
  })
})

