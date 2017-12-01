/**
 * @fileOverview 获取周的大写
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

/**
 * 获取周的大写
 * @param  {number} day 0
 * @return {string}
 */
export default function getWeekNum(day) {
    var config = {
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        0: '日'
    };
    return config[day];
}