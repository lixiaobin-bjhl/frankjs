/**
 * @file 浏览图片
 * @author lixiaobin
 */

'use strict';

import ImagePlayer from '../component/ImagePlayer';

export default function (event) {

    var target = $(event.currentTarget);
    var url = target.data('url') || target.data('src');

    event.preventDefault();
    event.stopPropagation();

    var imgs = $('.image');

    var imgArray = [];

    imgs.each(function () {
        imgArray.push(
            this.dataset.url || this.dataset.src
        );
    });

    new ImagePlayer({
        datasource: imgArray,
        current: imgs.index(target)
    });
}

