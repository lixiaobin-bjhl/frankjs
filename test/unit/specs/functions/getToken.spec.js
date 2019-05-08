
import getToken from 'library/function/getToken'

describe('function/getToken.js', () => {
  it('check auth_token is correct', () => {
    Object.defineProperty(location, 'href', {
      writable: true,
      value: 'http://www.baidu.com?auth_token=xiaobin'
    })
    expect(getToken().value).toEqual('xiaobin')
  })

  it('check sms_token is correct', () => {
    Object.defineProperty(location, 'href', {
      writable: true,
      value: 'http://www.baidu.com?sms_token=xiaobin'
    })
    expect(getToken().value).toEqual('xiaobin')
  })

  it('check token is empty', () => {
    Object.defineProperty(location, 'href', {
      writable: true,
      value: 'http://www.baidu.com?token=xiaobin'
    })
    expect(getToken().value).toEqual('')
  })
})
