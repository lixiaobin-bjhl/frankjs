/**
 * @file 获取年份选择
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function getYearOption (has0) {
    var year = new Date().getFullYear();
    var result = [];
    if (has0) {
         result.push(
            {
                text: '年份不限',
                value: 0
            }
        );
    }

    for (var i = year - 5; i <= year + 5; i++) {
        result.push({
            text: i + '年',
            value: i
        });
    }

    return result;
}
