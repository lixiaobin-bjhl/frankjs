/**
 * @fileOverview charity-middleware-isAmdin
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

// 不需要后端登录就能访问的admin API
var optionalSessionAdminUrl = [
    '/admin/login'
];

module.exports = (options, app) => {
   return function* (next) { 
        var requestUrl = this.request.url;
        if (requestUrl.indexOf('admin') > -1 
            && optionalSessionAdminUrl.indexOf(requestUrl) === -1) {
                var user = this.session.user;
                // 没有登录，就跳到登录页
                if (!user) {
                    this.redirect('/admin/login');
                    return;
                }
        }
        yield next;
   };
};
