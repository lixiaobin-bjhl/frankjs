/**
 * @fileOverview 跳转链接
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

import getToken from './getToken';
import getEnv from './getEnv';

let token = getToken();
let env = getEnv();
let appUtil = require('../util/app');

/**
 * @param {string} url    要跳转的链接
 * @param {object=} params 跳转链接所带的参数
 * @params {Boolean} forceCloseWindow 返回时，强制关闭窗口
 * @params {Boolean} isOpenWindow 是否新窗口打开
 */
let redirect = (url, params = {}, forceCloseWindow = false, isOpenWindow = false) => {

	var redirectUrl = url;

	if (token.value) {
		params[token.key] = token.value
	}

	// 如果token中带有sms_token, 就是学生中心或者老师中心
	if (token.key == 'sms_token') {
		params['isCenter'] = 1;
	}

	var paramStr = $.param(params);
	if (paramStr) {
		redirectUrl = redirectUrl + '?' + paramStr;
	}
	if (env.ua.isApp) {

		if (!/^http|https/.test(redirectUrl)) {
			redirectUrl = window.location.origin + redirectUrl;
		}
		if (isOpenWindow) {
			appUtil.openWindow(redirectUrl);
		} else {
			appUtil.refresh(redirectUrl);
			if (forceCloseWindow) {
				appUtil.goBack(true);
			}
		}
		return;
	}

	window.location.href = redirectUrl;
};

export default redirect;