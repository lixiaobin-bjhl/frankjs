
'use strict'

/**
 * 判断时间是否为今天
 * @param {Date|number} date 时间
 */
export default function isToday (date) {
  let time = date
  if (date instanceof Date) {
    time = date.getTime()
  }
  time = new Date(time)
  let today = new Date()

  return time.getFullYear() == today.getFullYear() &&
            time.getMonth() == today.getMonth() &&
            time.getDate() == today.getDate()
}
