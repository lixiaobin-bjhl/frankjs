/*
 * 获取当月的开始日期 & 结束日期
 * @author SanBaofeng <sanbaofeng@baijiahulian.com>
 */

'use strict'

import getMonthDays from './getMonthDays'

export default function getMonthRegion (now) {
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  const nowDay = now.getDate()

  return {
   		startDate: new Date(nowYear, nowMonth, 1),
   		endDate: new Date(nowYear, nowMonth, getMonthDays(now))
  }
}
