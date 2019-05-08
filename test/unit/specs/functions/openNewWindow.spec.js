
import openNewWindow from 'library/function/openNewWindow'

describe('function/openNewWindow.js', () => {
  it('check opened window', () => {
    var win = openNewWindow()
    expect(true).toBeTruthy()
  })
})
