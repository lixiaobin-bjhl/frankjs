
import getEnv from 'library/function/getEnv'

describe('function/getEnv.js', () => {
  it('check env content', () => {
    var ua = getEnv()
    expect(ua.isApp).toBeFalsy()
  })
})
