/**
 * @file 获取某月的最后一天
 */

'use strict'

/**
 * 获取某月的最后一天
 *
 * @param {Date} date 当前时间
 *
 * @return {Date}
 */
export default function (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw (new Error('Invalid Date'))
  }
  var year = date.getFullYear()
  var month = date.getMonth()
  return new Date(year, month + 1, 0)
}
