/**
 * @file 获得小数的位数
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

/**
 * 获得小数的位数
 *
 * @param {string} str
 * @return {number}
 */
export default function (str) {
  var parts = ('' + str).split('.')

  return parts.length === 2 ? parts[1].length : 0
};
