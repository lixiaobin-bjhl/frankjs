/**
 * @file throttle 节流
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

export default function throttle(fn, delay) {
    var now, lastExec, timer, context, args;

    var execute = function() {
        fn.apply(context, args);
        lastExec = now;
    };

    return function() {
        context = this;
        args = arguments;

        now = Date.now();

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        if (!lastExec) {
            execute();
        } else {
            var diff = delay - (now - lastExec);
            if (diff < 0) {
                execute();
            } else {
                timer = setTimeout(function() {
                    execute();
                }, diff);
            }
        }
    };
}
