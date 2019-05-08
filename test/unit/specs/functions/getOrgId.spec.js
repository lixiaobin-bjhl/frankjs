
import getOrgId from 'library/function/getOrgId'

describe('function/getOrgId.js', () => {
  Object.defineProperty(location, 'pathname', {
    writable: true,
    value: '/123'
  })

  it('check orgId is correct', () => {
    expect(getOrgId()).toEqual('123')
  })
})
