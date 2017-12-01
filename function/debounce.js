/**
 * @file 节流函数
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function debounce (fn, delay) {
    var timer;

    return function() {
        var context = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function() {
            fn.apply(context, args);
            timer = null;
        }, delay);
    };
}