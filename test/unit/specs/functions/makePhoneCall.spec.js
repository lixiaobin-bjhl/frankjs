
import makePhoneCall from 'library/function/makePhoneCall'

describe('function/makePhoneCall.js', () => {
  it('check location href', () => {
    makePhoneCall(18610720740)
    expect(location.href).toEqual('about:blank')
  })
})
