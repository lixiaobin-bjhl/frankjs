/**
 * 设置视频logo
 */

define(function (require, exports) {

    /**
     * 设置视频logo
     * 
     * @param {string} options.url logo url
     */
    videojs.registerPlugin('setLogo', function (options) {
        var el = this.el();
        var url = options.url;
        var videoPanelMenu = $('.vjs-fullscreen-control', el);
        videoPanelMenu.after(
            '<div style="background:url(' + url + '); ' 
                + 'background-size: contain;' 
                + 'background-repeat: no-repeat;'
                + 'background-position: center center; width:50px; margin: 0 5px;">&nbsp;</div>'
        );
    });
});