import { isFileValid } from '../../src/lib/file';

describe('Utils', () => {
  describe('isFileValid', () => {
    it('should return false if the file is incorrect', () => {
      expect(isFileValid('test')).toBeFalsy();
      expect(isFileValid('/test/')).toBeFalsy();
      expect(isFileValid('/test.js')).toBeFalsy();
    });

    it('should return true if the file is correct', () => {
      expect(isFileValid('test.md')).toBeTruthy();
      expect(isFileValid('./test.md')).toBeTruthy();
      expect(isFileValid('./somepath/test.md')).toBeTruthy();
      expect(isFileValid('./somepath/test.mdx')).toBeTruthy();
    });
  });
});
