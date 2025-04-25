import { stringToPermalink } from '../../src/lib/utils';

describe('Utils', () => {
  describe('stringToPermalink', () => {
    it('should return the url formatted string', () => {
      expect(stringToPermalink('Hello world')).toEqual('hello-world');
    });

    it('should escape punctuation characters', () => {
      expect(stringToPermalink('Hello, world')).toEqual('hello-world');
      expect(stringToPermalink('Hello. World!')).toEqual('hello-world');
    });

    it('should escape special characters', () => {
      expect(stringToPermalink('Hello, @@--`world')).toEqual('hello-world');
      expect(stringToPermalink('Hello /world!****')).toEqual('hello-world');
      expect(stringToPermalink('---Hello---world---')).toEqual('helloworld');
    });

    it('should properly trim and handle multiple whitespaces', () => {
      expect(stringToPermalink('   Heading   with    multiple    spaces   ')).toBe('heading-with-multiple-spaces');
      expect(stringToPermalink('Heading\t\twith\ttabs')).toBe('heading-with-tabs');
      expect(stringToPermalink('\n  Heading \n with \n newlines  \n')).toBe('heading-with-newlines');
    });
  });
});
