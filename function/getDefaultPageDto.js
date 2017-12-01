/**
 * @file 获取默认的PageDto
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function getDefaultPageDto () {
	return {
		pageNum: 1,
		count: 0,
		pageSize: 10,
		pageSizes: [10, 20, 50, 100]
	};
}
