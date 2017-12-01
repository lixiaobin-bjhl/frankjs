/**
 * @fileOverview 跳转链接
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

import redirect from './redirect';

/**
 * 跳转到签到列表
 * @param {number} lessonId 课节id 
 * @param {string=}from 
 */
export default function (lessonId, from) {

	var params = {
		lessonId: lessonId
	};
	
	if (from) {
		$.extend(params, {
			from: from
		});
	}

	redirect('/lesson/students.do', params);
}