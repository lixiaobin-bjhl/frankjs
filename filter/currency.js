/**
 * @fileOverview 货币格式化
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import Vue from 'vue';

/**
 * 格式化货币形式
 * @param {number} value
 * @param {boolean} hasPlus 正数是否需要加号
 */
Vue.filter('currency', function (value, hasPlus = false) {
    // 正负数
    var negative = value < 0 ? '-' : (hasPlus ? '+' : '');
    // 整数部分
    var integer = parseInt(value = Math.abs(+value || 0).toFixed(2), 10) 
        + '';
    var part = (part = integer.length) > 3 ? part % 3 : 0;

    return '￥' + negative + (part ? integer.substr(0, part) + ',' : '') 
        + integer.substr(part).replace(/(\d{3})(?=\d)/g, '$1' + ',') 
        + ('.' + Math.abs(value - integer).toFixed(2).slice(2));
});