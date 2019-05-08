
import encodeHTML from 'library/function/encodeHTML'

describe('function/encodeHTML.js', () => {
  it('input 123&<>', () => {
    expect(encodeHTML('123&<>')).toEqual('123&amp;&lt;&gt;')
  })

  it('input 123', () => {
    expect(encodeHTML('123')).toEqual('123')
  })
})
