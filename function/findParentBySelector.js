/**
 * @file 查找指定元素
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

function collectionHas (a, b) {
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] == b) return true
  }
  return false
}

export default function (elm, selector) {
  var all = document.querySelectorAll(selector)
  var cur = elm.parentNode

  while (cur && !collectionHas(all, cur)) {
    cur = cur.parentNode
  }
  return cur
}
