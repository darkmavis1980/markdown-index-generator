import {stringToPermalink} from '../../src/lib/utils'

describe('Utils', () => {
  describe('stringToPermalink', () => {
    it('should return the url formatted string', () => {
      expect(stringToPermalink('Hello world')).toEqual('hello-world');
    })

    it('should escape punctuation characters', () => {
      expect(stringToPermalink('Hello, world')).toEqual('hello-world');
      expect(stringToPermalink('Hello. World!')).toEqual('hello-world');
    })

    it('should escape special characters', () => {
      expect(stringToPermalink('Hello, @@--`world')).toEqual('hello-world');
      expect(stringToPermalink('Hello /world!****')).toEqual('hello-world');
      expect(stringToPermalink('---Hello---world---')).toEqual('helloworld');
    })
  })
})

