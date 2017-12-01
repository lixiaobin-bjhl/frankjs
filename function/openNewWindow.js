/**
 * @file 新开窗口作为过渡页
 * @author Chenwen(chenwen@baijiahulian.com)
 */

'use strict';

import env from '../plugin/env';

let openNewWindow = function () {
	let regionName = env.school.split('.com/')[0] + '.com';
    let newWindow = window.open(regionName + '/view/loading.html');

    return newWindow;	
};

export default openNewWindow;