/**
 * @fileOverview 获取周的大写
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

import getWeekNum from './getWeekNum';

/*
 * 获取指定天当前周的所有天
 * @param {Number} timestamp 时间戳
 */
export default function getWeekDaysByDay(timestamp) {
    var result = [];
    var currentDate = new Date(timestamp);
    var date = currentDate.getDate();
    var day = currentDate.getDay();
    // 周天 day为0 修正一下
    day = day ? day : 7;

    for (var i = 1; i < day; i ++) {
        var preDate = new Date(new Date(timestamp).setDate(date - (day - i)));
        result.push({
            timestamp: +preDate,
            day: '周' + getWeekNum(preDate.getDay()),
            date: Vue.filter('date')(preDate, 'MM-dd')
        });
    }

    for (var i = day; i <= 7; i ++) {
        var nextDate = new Date(new Date(timestamp).setDate(date + i - day));
        result.push({
            timestamp: +nextDate,
            day: '周' + getWeekNum(nextDate.getDay()),
            date: Vue.filter('date')(nextDate, 'MM-dd')
        });
    }
    return result;
}