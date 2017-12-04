/**
 * @file 图片广告
 */

define(function (require) {

    'use strict';

    var statisticReport = require('../function/bjcPlayerStatisticReport');
    var REPORT_TYPE_SHOW = 0;
    var REPORT_TYPE_CLICK = 1;

    /**
     * @options {string} container 容器
     * @options {Object} options 初始化参数
     *     {number} options.id 广告id
     *     {string} options.jumpUrl 广告跳转的url
     *     {string} options.imgUrl 广告图片url
     *     {boolean} options.showTimer 是否显示倒计时
     *     {number} options.duration 广告时长
     *     {number} options.width  图片宽度
     *     {number} options.height 图片高度
     *     {boolean} options.canSkip 是否可以跳过广告
     *     {number} options.canSkipSeconds 播放多久可以跳过
     *     {Function} options.onfinish 广告播放完成的回调
     */
    function Advert(container, options) {
        var defaultValue = {
            showTimer: true,
            duration: 10,
            width: 100,
            height: 100,
            canSkip: true,
            canSkipSeconds: 5
        }
        this.container = container;
        this.options = $.extend({}, defaultValue, options);
    }

    Advert.prototype.init = function () {
        var me = this;
        var options = me.options;
        var container = me.container;
        me.content = $(me.getRenderTpl(options));
        me.setSize();
        $(window).resize(function () {
            me.setSize();
        });
        container.append(this.content);
        me.container.addClass('bjc-ad-show')
        if (options.showTimer) {
            container.find('.bjc-timer').removeClass('bjc-hide');
        }
        /*        if (!options.showTimer && !options.canSkip) {
         container.find('.bjc-ad-opt').addClass('bjc-hide');
         }*/
        me.beginTimer();
        container.find('.bjc-ad-more').click(function () {
            me.log(REPORT_TYPE_CLICK);
        })
        me.log(REPORT_TYPE_SHOW);
    }

    Advert.prototype.getRenderTpl = function (options) {
        var tpl =  ''
        + '<div class="bjc-player-ad">'
        + '   <img class="bjc-ad-img" src="' + options.imgUrl + '">'
        + '   <div class="bjc-ad-opt">'
        + '     <span class="bjc-timer bjc-hide">'
        + '       &nbsp;<span class="bjc-timer-count">'
        +        options.duration
        + '        </span> 秒&nbsp'
        + '     </span>'
        + '     <span class="bjc-skip bjc-hide">跳过广告</span>'
        + '   </div>';

        if (options.jumpUrl) {
            tpl += ''
            + '<a class="bjc-ad-more" href="' + options.jumpUrl + '" target="_blank">'
            + ' 了解详情 &gt;'
            + '</a>'
        }
        tpl += '</div>';
        
        return tpl;
    };

    Advert.prototype.setSize = function () {
        var size = this.computeContentSize();
        this.content.find('.bjc-ad-img').css({
            width: size.width,
            height: size.height,
            left: size.left,
            top: size.top
        });
    }

    Advert.prototype.beginTimer = function () {
        var me = this;
        var options = me.options;
        var duration = options.duration
        var ele = me.container.find('.bjc-timer-count')
        var container = me.container;
        me.timer = setInterval(function () {
            duration--;
            var watched = me.options.duration - duration;
            if (options.canSkip && watched == options.canSkipSeconds) {
                var skipEle = container.find('.bjc-skip');
                skipEle.removeClass('bjc-hide');
                skipEle.click(function () {
                    me.finished();
                });
            }
            if (duration == 0) {
                me.finished();
            }
            ele.html(duration);
        }, 1000);
    }

    Advert.prototype.finished = function () {
        var me = this;
        me.content.remove();
        me.container.removeClass('bjc-ad-show');
        clearInterval(me.timer);
        if (me.options.onfinish) {
            me.options.onfinish();
        }
    }

    Advert.prototype.computeContentSize = function () {
        var me = this;
        var container = me.container;
        var options = me.options;
        var containerWidth = container.width();
        // 留10px的margin
        var containerHeight = container.height() - 20;
        var resWidth = containerWidth;
        var resHeight = Math.ceil(containerWidth * options.height / options.width);
        var top = (containerHeight - resHeight) / 2;
        var left = 0;
        // 以高度为准,重新计算宽度
        if (resHeight > containerHeight) {
            resWidth = Math.ceil(containerHeight * options.width / options.height);
            resHeight = containerHeight;
            top = 10;
            left = (containerWidth - resWidth) / 2;
        }
        return {
            width: resWidth,
            height: resHeight,
            left: left + 'px',
            top: top + 'px'
        }
    }

    Advert.prototype.log = function (reportType) {
        var me = this;
        var options = me.options;
        var videoInfo = options.videoInfo;
        var data = {
            type: 'baijiayun_ad',
            guid: videoInfo.guid,
            fid: videoInfo.video_id,
            partner_id: videoInfo.video_info.partner_id,
            ad_id: options.id
        }
        data.report_type = reportType;
        statisticReport(data);
    };
    
    videojs.registerPlugin('ads', function (dom, adValues, callback, videoInfo) {
        var adInstance = new Advert(dom, {
            id: adValues.adId,
            jumpUrl: adValues.clickJumpUrl,
            imgUrl: adValues.imgUrl,
            showTimer: adValues.showTimer,
            duration: adValues.duration,
            width: adValues.width,
            height: adValues.height,
            canSkip: adValues.skipAd,
            canSkipSeconds: adValues.skipAdSeconds,
            onfinish: callback,
            videoInfo: videoInfo
        });
        adInstance.init();
        return adInstance;
    });

});