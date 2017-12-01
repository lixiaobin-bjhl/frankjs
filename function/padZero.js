 /**
 * @file 个位数补0处理
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function padZero(value) {
	return (value < 10 ? '0' : '') + value;
}