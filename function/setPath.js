/**
 * @file 根据路径字符串设置对象值
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function setPath(object, prop, value) {
    if (prop === undefined || prop === null) return;

    if (typeof prop === 'object') {
        var target = prop;
        for (prop in target) {
            if (target.hasOwnProperty(prop)) {
                setPath(object, prop, target[prop]);
            }
        }
    } else {
        prop = prop || '';
        var paths = prop.split('.');
        var current = object;
        for (var i = 0, j = paths.length; i < j; i++) {
            var path = paths[i];
            if (!current) break;
            if (i === j - 1) {
                current[path] = value;
                break;
            }
            current = current[path];
        }
    }
}