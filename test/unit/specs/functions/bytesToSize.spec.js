
import bytesToSize from 'library/function/bytesToSize'

describe('function/bytesToSize.js', () => {
  it('input empty param', () => {
    expect(bytesToSize()).toEqual('0 B')
  })

  it('input 1024', () => {
    expect(bytesToSize(1024)).toEqual('1.00 KB')
  })

  it('input 2000', () => {
    expect(bytesToSize(2000)).toEqual('1.95 KB')
  })

  it('input 1048576', () => {
    expect(bytesToSize(1048576)).toEqual('1.00 MB')
  })

  it('input 1073741824', () => {
    expect(bytesToSize(1073741824)).toEqual('1.00 GB')
  })

  it('input 111', () => {
    expect(bytesToSize(111)).toEqual('111.00 B')
  })

  it('input -111', () => {
    expect(bytesToSize(-111)).toEqual('-111.00 B')
  })
})
