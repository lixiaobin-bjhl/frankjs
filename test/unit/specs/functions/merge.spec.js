
import merge from 'library/function/merge'

describe('function/merge.js', () => {
  it('check object mxins', () => {
    var a = {
      name: 'xiaobin',
      development: 'tianxiao'
    }

    function B () {
      this.company = 'genshuixue'
      this.name = 'larry'
      this.development = undefined
    }
    B.prototype.position = 'frontend'
    var b = new B()

    expect(merge(a, b).company).toBe('genshuixue')
    expect(merge(a, b).name).toBe('larry')
    expect(merge(a, b).development).toBe('tianxiao')
    expect(merge(a, b).position).toBe(undefined)
    expect(b.position).toBe('frontend')
  })
})
