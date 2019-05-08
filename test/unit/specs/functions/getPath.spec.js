
import getPath from 'library/function/getPath'

describe('function/getPath.js', () => {
  it('input exist path', () => {
    var obj = {
      person: {
        name: 'xiaobin'
      }
    }
    expect(getPath(obj, 'person.name')).toEqual('xiaobin')
  })

  it('the not found path', () => {
    var obj = {
      person: {
        name: 'xiaobin'
      }
    }
    expect(getPath(obj, 'person.name1')).toBe(undefined)
  })

  it('the path and obj is empty', () => {
    expect(getPath('', '')).toBe(null)
  })
})
