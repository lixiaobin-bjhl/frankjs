/**
 * @file 获取token
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

'use strict';

let url = require('../url');

let getToken = function () {
		
	let search = url.parseQuery(window.location.href);
	let tokenKey = 'auth_token';

	if (search.sms_token) {
		tokenKey = 'sms_token';
	} 

	return {
		value: search.sms_token || search.auth_token || '',
		key: tokenKey
	};
	
};

export default getToken;

