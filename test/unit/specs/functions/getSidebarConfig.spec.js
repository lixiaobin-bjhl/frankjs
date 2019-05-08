
import getSidebarConfig from 'library/function/getSidebarConfig'

describe('function/getSidebarConfig.js', () => {
  it('check result type', () => {
    var result = getSidebarConfig()
    expect(typeof result).toEqual('object')
  })
})
