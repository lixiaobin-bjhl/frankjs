/**
 * 对字符串进行 HTML 编码
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

/** 
 * @param {string} source 字符串
 * @return {string}
 */
export default function(source) {
    return String(source)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};