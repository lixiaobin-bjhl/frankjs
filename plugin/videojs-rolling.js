/**
 * @file 片头片尾视频 
 */

define(function (require, exports) {

    'use strict';

    /**
     * 设置片头/片尾视频
     * 
     * @param {string} options.url 片头/片尾视频源地址
     * @param {string} options.type 片头/片尾视频源类型
     * @param {Function} options.callback 播放完回调函数 
     */
    videojs.registerPlugin('rolling', function (options) {

        var source = options.source;

        var player = this;

        player.src({
            type: options.type,
            src: options.url
        });
        player.controlBar.hide();
        player.one('ended', function () {
            player.controlBar.show();
            options.callback && options.callback();
        });
        player.play();
    });

});