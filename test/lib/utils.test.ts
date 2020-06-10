import {expect} from '@oclif/test'
import {stringToPermalink} from '../../lib/lib/utils'

describe('Utils', () => {
  describe('Utils', () => {
    describe('stringToPermalink', () => {
      it('should return the url formatted string', () => {
        expect(stringToPermalink('Hello world')).to.equal('hello-world')
      })
    })
  })
})
