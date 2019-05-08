/**
 * @file 扩展Element的错误提示message组件(多行内容)
 * @author chenwen(chenwen@baijiahulian.com)
 */

'use strict'

import Vue from 'vue'
import { Message } from 'element-ui'

export default function showMessage (msg, extraMsg, option = {}) {
  let time = 3000
  if (!isNaN(option.duration)) {
    time = option.duration
  }

  let msgObject = Message({
    message: msg || '操作失败！',
    type: option.type || 'error',
    duration: time
  })

  if (extraMsg) {
    let para = document.createElement('span')
    let node = document.createTextNode(extraMsg)
    para.appendChild(node)

    let parent = msgObject.$el.getElementsByTagName('p')[0]
    parent.appendChild(para)
  }
}
