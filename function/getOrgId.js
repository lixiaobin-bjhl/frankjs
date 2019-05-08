/**
 * @file 获取URL上的机构名函数
 * @author xujin(xujin@baijiahulian.com)
 */

'use strict'

export default function getOrgId () {
  var path = window.location.pathname
  return path.split('/')[1]
}
