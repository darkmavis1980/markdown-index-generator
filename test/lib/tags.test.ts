import {expect} from '@oclif/test'
import {replaceTag} from '../../src/lib/tags'

describe('replacetag (Function)', () => {
  it('should replace the content', () => {
    const mockContent = `# Some Title
    <!-- test-start -->
    <!-- test-end -->
    Some test`
    const result = replaceTag(mockContent, 'test', 'hello')
    expect(result).to.contain('hello')
  })

  it('should throw an error if a tag is missing', () => {
    const mockContent = `# Some Title
    <!-- test-start -->
    Some test`

    expect(() => replaceTag(mockContent, 'test', 'hello')).to.throw()

    const mockContent2 = `# Some Title
    Some test`

    expect(() => replaceTag(mockContent2, 'test', 'hello')).to.throw()
  })
})
