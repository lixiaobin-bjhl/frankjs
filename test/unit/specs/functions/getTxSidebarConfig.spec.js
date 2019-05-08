
import getTxSidebarConfig from 'library/function/getTxSidebarConfig'

describe('function/getTxSidebarConfig.js', () => {
  it('check result type', () => {
    var result = getTxSidebarConfig()
    expect(typeof result).toEqual('object')
  })
})
