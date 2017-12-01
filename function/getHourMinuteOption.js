/**
 * @file 获取时/分选择选项
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

import padZero from './padZero';

export default function getHourMinuteOption(startTime, endTime, step) {
    var times = [];
    var date = new Date(2015, 11, 11);

    var time = new Date(date.setHours(startTime));
    var endTime = new Date(date.setHours(endTime));

    while (time <= endTime) {
        times.push(padZero(time.getHours()) + ':' + padZero(time.getMinutes()));
        time = new Date(time.setMinutes(time.getMinutes() + step));
    }
    return times;
}