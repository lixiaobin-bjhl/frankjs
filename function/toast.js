/**
 * @file 扩展Element的错误提示message组件(多行内容)
 * @author chenwen(chenwen@baijiahulian.com)
 */

'use strict';

import Vue from 'vue';
import { Message } from 'element-ui';

export default function toast (msg, option = {}) {
    let time = 3000;
    if (!isNaN(option.duration)) {
        time = option.duration;
    }

    var type = typeof option === 'string' ? option : (option.type || 'success');

    Message({
        message: msg,
        type: type,
        duration: time
    });
}