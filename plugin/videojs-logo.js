/**
 * @file 设置视频logo
 */

define(function (require, exports) {

    'use strict';

    /**
     * 设置视频logo
     * 
     * @param {string} options.url logo url
     */
    videojs.registerPlugin('setLogo', function (options) {
        var el = this.el();
        var url = options.url;
        var homeUrl = options.homeUrl;
        var videoPanelMenu = $('.vjs-fullscreen-control', el);
        
        var tpl =  homeUrl 
            ? '<a target="_blank" href="' + homeUrl + '" style="background:url(' + url + '); ' 
            : '<a style="background:url(' + url + '); ';

        tpl += 'background-size: contain;' 
            + 'background-repeat: no-repeat;'
            + 'background-position: center center; width:50px; margin: 0 5px;">&nbsp;</a>';
        videoPanelMenu.after(tpl);
    });
});