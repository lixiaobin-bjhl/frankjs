/**
 * @file 获取url search
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

let url = require('../util/url')

let getUrlSearch = function () {
  return url.parseQuery(window.location.href)
}

export default getUrlSearch
