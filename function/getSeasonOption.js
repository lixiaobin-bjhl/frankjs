/**
 * @file 获取季度选项
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

export default function getSeasonOption (has0) {
  var result = []

  if (has0) {
    result.push(
      {
        text: '季节不限',
        value: 0
      }
    )
  }

  return result.concat(
    [
      {
        text: '春季',
        value: 1
      },
      {
        text: '暑期',
        value: 2
      },
      {
        text: '秋季',
        value: 3
      },
      {
        text: '寒假',
        value: 4
      }
    ]
  )
}
