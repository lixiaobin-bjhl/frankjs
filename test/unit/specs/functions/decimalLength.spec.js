
import decimalLength from 'library/function/decimalLength'

describe('function/decimalLength.js', () => {
  it('input 2', () => {
    expect(decimalLength(2)).toBe(0)
  })
  it('input 2.00', () => {
    expect(decimalLength('2.00')).toBe(2)
  })
})
