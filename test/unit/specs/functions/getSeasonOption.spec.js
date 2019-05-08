
import getSeasonOption from 'library/function/getSeasonOption'

describe('function/getSeasonOption.js', () => {
  it('check first and last', () => {
    var result = getSeasonOption()

    expect(result[0].value).toBe(1)
    expect(result[result.length - 1].value).toBe(4)
  })

  it('check has all', () => {
    var result = getSeasonOption(true)
    expect(result[0].value).toBe(0)
    expect(result[result.length - 1].value).toBe(4)
  })
})
