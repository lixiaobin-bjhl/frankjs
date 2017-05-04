/**
 * @file 七牛云裁剪压缩
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

/**
 * 压缩图片
 *
 * @property {string} storageId 七牛云存储key
 * @property {number} options.width 显示宽度
 * @property {number} options.height 显示高度
 * @return {string} 压缩后的图片地址
 */
var compressImage = function (storageId, options) {

    var width = options.width || 0;
    var height = options.height || 0;

    // 没有storeageId，使用默认图片
    if (!storageId) {
        storageId = 'Fjooknn4dd3ugqfDam4reuD3JSQt';
    }

    width = Math.floor(width);
    height = Math.floor(height);
    
    var devicePixelRatio = window.devicePixelRatio;
    // retina屏
    if (devicePixelRatio && devicePixelRatio > 1) {
        width = Math.floor(width * devicePixelRatio);
        height = Math.floor(height * devicePixelRatio);
    }

    return  'http://opdjozubd.bkt.clouddn.com/'
        + storageId 
        + '?imageMogr2/crop/' 
        + (width || '') 
        + 'x' 
        + (height || '');
};

module.exports = compressImage;
