/**
 * @file 空量转换
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

export default function bytesToSize (bytes) {
  if (!bytes) {
    return '0 B'
  }

  // bytes为负值
  var val = bytes < 0 ? -bytes : bytes
  var k = 1024
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  var i = Math.floor(Math.log(val) / Math.log(k))
  return (bytes < 0 ? '-' : '') + (val / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
}
