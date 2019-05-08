/**
 * @fileOverview 网校左导配置
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

const PREFIX_LINKS = {}
const LINK_TARGETS = {}

import env from '../plugin/env'

export default function (type = 'wangxiao') {
  for (var key in env) {
    if (key == 'wangxiao') {
      PREFIX_LINKS[key] = env[key] + '#'
    } else {
	        PREFIX_LINKS[key] = env[key] + '#!'
    }
    LINK_TARGETS[key] = 'remote'
  }

  PREFIX_LINKS[type] = ''
  LINK_TARGETS[type] = 'local'

  return [
    {
      'text': '首页',
      'alias': 'index',
      name: 'index',
      auth: '184',
      'url': `${PREFIX_LINKS.wangxiao}/index`,
      'from': LINK_TARGETS.wangxiao
    },
    {
      'text': '学员列表',
      'from': LINK_TARGETS.wangxiao,
      'name': 'student',
      'url': `${PREFIX_LINKS.wangxiao}/erp/studentList`,
      'alias': 'studentList'
    },
    {
      'text': '课程列表',
      'from': LINK_TARGETS.wangxiao,
      'name': 'wxcourse',
      'url': `${PREFIX_LINKS.wangxiao}/erp/courseList`,
      'alias': 'courseList'
    },
    {
      'text': '排课课表',
      'from': LINK_TARGETS.erp,
      auth: '175',
      name: 'timetable',
      'url': `${PREFIX_LINKS.erp}/timetable`,
      'alias': 'timetable'
    },
    {
      'text': '老师列表',
      'from': LINK_TARGETS.wangxiao,
      auth: '176',
      name: 'wxteacher',
      'url': `${PREFIX_LINKS.wangxiao}/erp/teacherList`,
      'alias': 'teacherList'
    },
    {
      'text': '报名收款',
      'from': LINK_TARGETS.caiwu,
      auth: '122',
      name: 'signup',
      'url': `${PREFIX_LINKS.caiwu}/signup/index`,
      'alias': 'teacherList'
    },
    {
      'text': '资金管理',
      'from': LINK_TARGETS.caiwu,
      auth: '102',
      name: 'finance',
      'url': `${PREFIX_LINKS.caiwu}/finance/`,
      'alias': 'teacherList'
    },
    {
      'text': '直播教室',
      'from': LINK_TARGETS.wangxiao,
      auth: '177',
      name: 'broadcast',
      'url': `${PREFIX_LINKS.wangxiao}/netschool/broadcast`,
      'alias': 'broadcast'

    },
    {
      'text': '网校装修',
      'from': LINK_TARGETS.wangxiao,
      auth: '178',
      name: 'decorate',
      'url': `${PREFIX_LINKS.wangxiao}/netschool/decorate`,
      'alias': 'decorate'
    },
    {
      'text': '开通服务',
      'from': LINK_TARGETS.wangxiao,
      auth: '179',
      name: 'service',
      'url': `${PREFIX_LINKS.wangxiao}/netschool/service`,
      'alias': 'service'
    },
    {
      'text': '视频库',
      'from': LINK_TARGETS.wangxiao,
      name: 'video',
      auth: '180',
      'url': `${PREFIX_LINKS.wangxiao}/resource/video`,
      'alias': 'video'
    },
    {
      'text': '直播回放',
      auth: '181',
      'from': LINK_TARGETS.wangxiao,
      'name': 'playback',
      'url': `${PREFIX_LINKS.wangxiao}/resource/playback`,
      'alias': 'playback'
    },
    {
      'text': '新闻管理',
      'from': LINK_TARGETS.wangxiao,
      'name': 'wxnews',
      auth: '182',
      'url': `${PREFIX_LINKS.wangxiao}/resource/news`,
      'alias': 'wxnews'
    }
    // {
    // 	"text": "设置",
    // 	"alias": "setting",
    // 	"from": LINK_TARGETS.wangxiao,
    // 	"url": `${PREFIX_LINKS.wangxiao}/setting`,
    // 	"children": [
    // 		{
    // 			"text": '课程设置',
    // 			"from": LINK_TARGETS.wangxiao,
    // 			"url": `${PREFIX_LINKS.wangxiao}/setting/course`,
    // 			"alias": "course"
    // 		}
    // 	]
    // }
  ]
};
