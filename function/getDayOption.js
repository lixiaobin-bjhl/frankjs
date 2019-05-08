/**
 * @file 日期选择
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

export default function getDayOption () {
  var length = 32
  var result = []
  while (length--) {
    if (length) {
      result.unshift(length)
    }
  }
  return result
}
