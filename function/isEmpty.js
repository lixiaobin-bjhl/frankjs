/**
 * @fileOverview chairty-function-isEmpty
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

/**
 * 判断一个对象是否为空对象
 * @param {Object} obj 要判断的对象
 */
export default function isEmpty (obj = {}) {
  var result = true
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result = false
      break
    }
  }
  return result
}
