/**
 * @file 改变时间
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

/**
 * 修改时间
 * @param {Date} 需要修改的时间
 * @param {Number} changeDayCount 需要改成的天数
 * @return {Date}
 */
export default function changeTime(time, changeDayCount) {
	var now = new Date();
	let diffTime = changeDayCount * 24 * 60 * 60 * 1000;
	now.setTime(time.getTime() + diffTime);
	return now;
}