/**
 * @file 根据路径字符串获取对象值
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function getPath(object, prop) {
    prop = prop || '';
    var paths = prop.split('.');
    var current = object;
    var result = null;
    for (var i = 0, j = paths.length; i < j; i++) {
        var path = paths[i];
        if (!current) break;

        if (i === j - 1) {
            result = current[path];
            break;
        }
        current = current[path];
    }
    return result;
}