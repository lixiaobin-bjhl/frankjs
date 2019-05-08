
import getMonthRegion from 'library/function/getMonthRegion'

describe('function/getMonthRegion.js', () => {
  it('check month region', () => {
    var time = new Date(2017, 10, 11)
    var result = getMonthRegion(time)

    expect(result.startDate.getDate()).toBe(1)
    expect(result.endDate.getDate()).toBe(30)
  })
})
