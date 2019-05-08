/**
 * 根据 ua 判断几个重要参数
 * 学生UA：Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B440 GenShuiXue-student-1.2.0
 * 老师UA：Mozilla/5.0 (Linux; Android 5.0.1; Nexus 4 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36-GenShuiXue-teacher-1.4.0
 * 机构UA：Mozilla/5.0 (Linux; Android 5.0.1; Nexus 4 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36-GenShuiXue-institution-1.4.0
 * @file 解析当前的userAgent
 * @author peilonghui lixiaobin
 */

'use strict'

var APP_REGEX = /genshuixue-([^-]+)-(.+)$/i

var ua = {
  app: {},
  isApp: false,
  platform: {}
}

// var userAgent = 'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 4 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36-GenShuiXue-institution-1.4.0';
var userAgent = window.navigator.userAgent.toLowerCase()

var appMatches = userAgent.match(APP_REGEX)

if (appMatches && appMatches.length > 1) {
  ua.isApp = true
  ua['app'][appMatches[1]] = appMatches[2]
}

if (userAgent.indexOf('android') >= 0) {
  ua.platform.android = true
}

if (/ip(hone|od|ad)/img.test(userAgent)) {
  ua.platform.ios = true
}

export default function () {
  return {
    ua: ua
  }
}
