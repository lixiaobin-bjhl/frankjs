
import getWxSidebarConfig from 'library/function/getWxSidebarConfig'

describe('function/getWxSidebarConfig.js', () => {
  it('check the option', () => {
    var result = getWxSidebarConfig()

    expect(result[0].name).toEqual('index')
  })
})
