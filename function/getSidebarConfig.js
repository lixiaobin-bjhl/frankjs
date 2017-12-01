/**
 * @fileOverview  获取sideBar的配置
 * @author XiaoBin Li
 */

'use strict';

import env from '../plugin/env';

const PREFIX_LINKS = {};
const LINK_TARGETS = {};

export default function (type = 'crm') {

    const result = [];
    
    for (var key in env) {
        PREFIX_LINKS[key] = env[key] + '#!';
        LINK_TARGETS[key] = 'remote';
    }

    PREFIX_LINKS[type] = '';
    LINK_TARGETS[type] = 'local';

    result.push({
        text: 'CRM',
        alias: 'crm',
        active: (type === 'crm'),
        children: [
            {
                text: '招生线索',
                url: `${PREFIX_LINKS.crm}/consult`,
                from: LINK_TARGETS.crm,
                name: 'crm.consult',
                auth:'4',
                active: false
            },
            {
                text: '学员档案',
                url: `${PREFIX_LINKS.crm}/student`,
                from: LINK_TARGETS.crm,
                name: 'crm.student',
                active: false
            }
        ]
    });

    const erpChildren = [
        {
            text: '班级管理',
            url: `${PREFIX_LINKS.erp}/course`,
            from:  LINK_TARGETS.erp,
            name: 'erp.course',
            auth: '195',
            active: false
        },
        {
            text: '排课课表',
            url: `${PREFIX_LINKS.erp}/timetable`,
            from: LINK_TARGETS.erp,
            name: 'erp.timetable',
            auth: '120',
            active: false

        },
        {
            text: '报名收款',
            url: `${PREFIX_LINKS.caiwu}/signup/index`,
            from: LINK_TARGETS.caiwu,
            name: 'erp.signup',
            auth: '122',
            active: false
        },
        {
            text: '资金管理',
            url: `${PREFIX_LINKS.caiwu}/finance/`,
            from: LINK_TARGETS.caiwu,
            name: 'erp.caiwu',
            auth: '102',
            active: false
        },
        {
            text: '课消统计',
            url: `${PREFIX_LINKS.erp}/statistics`,
            from: LINK_TARGETS.erp,
            name: 'erp.statistics',
            auth: '163',
            active: false
        },
        {
            text: '课消补充',
            url: `${PREFIX_LINKS.caiwu}/kexiao/`,
            from: LINK_TARGETS.caiwu,
            name: 'erp.kexiao',
            auth: '162',
            active: false
        }
    ];

    result.push({
        text: 'ERP',
        alias: 'erp',
        active: (type === 'erp' || type === 'caiwu'),
        children: erpChildren
    });


    result.push({
        text: '设置',
        alias: 'settings',
        active: (type === 'settings'),
        auth: '103',
        children: [
            {
                text: '规则设置',
                alias: 'set_rule',
                url: `${PREFIX_LINKS.crm}/set_rule`,
                from: LINK_TARGETS.crm,
                name: 'setting.index',
                active: false
            }
        ]
    });

    return result;
}

