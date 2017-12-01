/**
 * @fileOverview  获取sideBar的配置
 * @author chenwen(chenwen@baijiahulian.com)
 */

'use strict';

import env from '../plugin/env';


const PREFIX_LINKS = {};
const LINK_TARGETS = {};

export default function (type = 'setup') {
    for (let key in env) {
        if (key === 'setup') {
            PREFIX_LINKS['setup'] = env['crm'] + 'setup.do#';
        }
        else {
            PREFIX_LINKS[key] = env[key] + '#';
        }
        LINK_TARGETS[key] = 'remote';
    }

    PREFIX_LINKS[type] = '';
    LINK_TARGETS[type] = 'local';

    const result = [
        {
            text: '校区概况',
            url: `${PREFIX_LINKS.tx}/overview`,
            from: LINK_TARGETS.tx,
            name: 'overview',
            auth: 'superUser',
            active: false
        },
        {
            text: '招生线索',
            url: `${PREFIX_LINKS.tx}/consult`,
            from: LINK_TARGETS.tx,
            name: 'consult',
            auth: '4',
            active: false
        },
        {
            text: '学员档案',
            url: `${PREFIX_LINKS.tx}/student`,
            from: LINK_TARGETS.tx,
            name: 'student',
            auth: '5',
            active: false
        },
        {
            text: '班级管理',
            url: `${PREFIX_LINKS.erp}/course`,
            from:  LINK_TARGETS.erp,
            name: 'course',
            auth: '195',
            active: false
        },
        {
            text: '排课课表',
            url: `${PREFIX_LINKS.erp}/timetable`,
            from: LINK_TARGETS.erp,
            name: 'timetable',
            auth: '120',
            active: false

        },
        {
            text: '签到列表',
            url: `${PREFIX_LINKS.tx}/signReport`,
            from: LINK_TARGETS.tx,
            name: 'sign',
            auth: '200',
            active: false
        },
        {
            text: '报名收款',
            url: `${PREFIX_LINKS.caiwu}/signup/index`,
            from: LINK_TARGETS.caiwu,
            name: 'signup',
            auth: '122',
            active: false
        },
        {
            text: '资金管理',
            url: `${PREFIX_LINKS.caiwu}/finance/`,
            from: LINK_TARGETS.caiwu,
            name: 'finance',
            auth: '102',
            active: false
        },
        {
            text: '课消统计',
            url: `${PREFIX_LINKS.tx}/statistics`,
            from: LINK_TARGETS.tx,
            name: 'statistics',
            auth: '163',
            active: false
        },
        {
            text: '课消补充',
            url: `${PREFIX_LINKS.caiwu}/kexiao/`,
            from: LINK_TARGETS.caiwu,
            name: 'kexiao',
            auth: '162',
            active: false
        },
        {
            text: '规则设置',
            alias: 'set_rule',
            url: `${PREFIX_LINKS.crm}/set_rule`,
            from: LINK_TARGETS.crm,
            name: 'set-rule',
            auth: '103',
            active: false
        },
        {
            text: '校区设置',
            url: `${PREFIX_LINKS.tx}/campus`,
            from: LINK_TARGETS.tx,
            name: 'set-campus',
            auth: '100',
            active: false
        },
        {
            text: '账号设置',
            url: `${PREFIX_LINKS.tx}/account`,
            from: LINK_TARGETS.tx,
            name: 'set-account',
            auth: '101',
            active: false
        }
    ];

    return result;
};