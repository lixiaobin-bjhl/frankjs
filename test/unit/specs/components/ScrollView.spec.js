import Vue from 'vue'
import ScrollView from 'library/vue/components/ScrollView'

describe('ScrollView.vue', () => {
  var leftBtn = null
  var rightBtn = null
  var vm = null

  beforeEach(() => {
    const Constructor = Vue.extend(ScrollView)
    vm = new Constructor().$mount()
    var el = vm.$el
    vm.totalPage = 2
    leftBtn = el.querySelector('.turn-left')
    rightBtn = el.querySelector('.turn-right')
  })

  it('should render correct contents', () => {
    expect(leftBtn.textContent).toEqual('左')
    expect(rightBtn.textContent).toEqual('右')
  })

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  })

  it('totalPage toBeGreaterThan 1', () => {
    expect(vm.totalPage).toBeGreaterThan(1)
  })

  it('click turn right btn', () => {
    expect(vm.index).toBe(1)
    var totalPage = vm.totalPage
    var index = vm.index
    var nextIndex = totalPage > 1 ? vm.index + 1 : 1

    rightBtn.addEventListener('click', () => {
      expect(vm.index).toBe(nextIndex)
    })
    rightBtn.click()
  })

  it('click turn left btn', () => {
    expect(vm.index).toBe(1)
    leftBtn.addEventListener('click', () => {
      expect(vm.index).toBe(totalPage)
    })
    leftBtn.click()
  })

  afterEach(() => {
    leftBtn = null
    rightBtn = null
    vm = null
  })
})
