/**
 * @file 获取季度
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

/**
 * @param {Date} date 时间
 */
export default function getSeason (date) {
  // 345 1季度
  // 678 2季度
  // 89 10 3季度
  // 12 1 2 4季度
  var month = date ? new Date(date).getMonth() : new Date().getMonth()
  if (month === 0) {
    month = 12
  } else if (month == 1) {
    month = 13
  }
  return Math.floor((month - 2) / 3) + 1
}
