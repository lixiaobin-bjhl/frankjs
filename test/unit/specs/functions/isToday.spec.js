
import isToday from 'library/function/isToday'

describe('function/isToday.js', () => {
  it('check the system time', () => {
    var date = new Date()
    expect(isToday(date)).toBeTruthy()
    expect(isToday(+date)).toBeTruthy()
  })
})
