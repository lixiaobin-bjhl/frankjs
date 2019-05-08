/**
 * 对字符串进行 HTML 编码
 *
 * @param {string} source 字符串
 * @return {string}
 */

'use strict'

export default function (source) {
  return String(source)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
};
