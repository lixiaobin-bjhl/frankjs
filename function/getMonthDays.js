/*
 * 获取当前月的天数
 * @author Sanbaofeng <sanbaofeng@baijiahulian.com>
 */

'use strict'

export default function getMonthDays (day) {
  const nowYear = day.getYear()
  const myMonth = day.getMonth()

  var monthStartDate = new Date(nowYear, myMonth, 1) // 当月1号的时间戳
  var monthEndDate = new Date(nowYear, myMonth + 1, 1)// 下月1号的时间戳
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24)// 求差即可取得某月天数
  return days
}
