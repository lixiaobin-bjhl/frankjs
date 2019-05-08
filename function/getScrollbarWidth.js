/**
 * @file 获取滚动条宽度
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

var scrollbarWidth

export default function getScrollbarWidth () {
  if (scrollbarWidth !== undefined) return scrollbarWidth

  var outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  var widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  var inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  var widthWithScroll = inner.offsetWidth
  outer.parentNode.removeChild(outer)

  return widthNoScroll - widthWithScroll
}
