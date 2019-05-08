/**
 * @file Vue-filter-compressImage 压缩七牛云图片
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

import Vue from 'vue'
import compressImage from '../../../../app/public/scripts/function/compressImage'

Vue.filter('compressImage', function (storageId, width, height) {
  return compressImage(storageId, {
    width: width,
    height: height
  })
})
