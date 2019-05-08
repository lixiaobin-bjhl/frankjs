
import env from '../plugin/env'
const PREFIX_LINKS = {}
const LINK_TARGETS = {}

export default function (hasPermissions, type) {
  for (let key in env) {
    if (key === 'setup') {
      PREFIX_LINKS['setup'] = env['crm'] + 'setup.do#'
    } else {
      PREFIX_LINKS[key] = env[key] + '#'
    }
    LINK_TARGETS[key] = 'remote'
  }

  PREFIX_LINKS[type] = ''
  LINK_TARGETS[type] = 'local'

  const result = []
  const TAG_MAP = {
    186: '作业系统',
    188: '考试系统',
    190: '成绩系统',
    196: '课消统计',
    206: {
      label: '积分系统',
      name: 'points',
      url: `${PREFIX_LINKS.tx}/points`,
      from: LINK_TARGETS.tx,
      active: false
    },

    211: {
      label: '费用管理',
      name: 'fee',
      url: `${PREFIX_LINKS.fee}/fee`,
      from: LINK_TARGETS.tx,
      active: false
    },
    217: {
      label: '专项报表',
      name: 'report',
      url: `${PREFIX_LINKS.fee}/report/fee`,
      from: LINK_TARGETS.tx,
      active: false
    }
  }

  if (hasPermissions && hasPermissions.length) {
    hasPermissions.forEach(
      (item) => {
        var from = 'remote'
        var url = item.url || ''
        var name = 'vip-icon'
        var tab = TAG_MAP[item.tag]
        var label = tab
        // 如果是立加课消统计，做下特殊逻辑处理
        if (item.tag == 196) {
          name = 'vip_kx_stats'
          var host = window.location.href
          // 当前打开的是CRM系统
          if (host.indexOf('crm') > -1 && host.indexOf('setup') != -1) {
            from = 'local'
            url = 'vip_kx_stats'
          } else {
            url = env['crm'] + 'setup.do#!/vip_kx_stats'
          }
        }

        if (typeof tab === 'object') {
          label = tab.label
          name = tab.name
        }

        if (TAG_MAP[item.tag] && +item.type === 0) {
          result.push({
            label: label,
            link: url,
            from: from,
            name: name,
            url: url
          })
        }
      }
    )
  }
  return result

  // for (var key in TAG_MAP) {
  //     var from = 'remote';
  //     var url = '';
  //     var name = 'vip-icon';
  //     var item = TAG_MAP[key];
  //     var label = item;
  //     // 如果是立加课消统计，做下特殊逻辑处理
  //     if (key == 196) {
  //         name = 'vip_kx_stats';
  //         var host = window.location.href;
  //         // 当前打开的是CRM系统
  //         if (host.indexOf('crm') > -1 && host.indexOf('setup') != -1) {
  //             from = 'local';
  //             url = 'vip_kx_stats';
  //         } else {
  //             url = env['crm'] + 'setup.do#!/vip_kx_stats';
  //         }
  //     }
  //     // 积分系统
  //     if (typeof item === 'object') {
  //         from = item.from;
  //         url = item.url;
  //         label = item.label;
  //         name = item.name;
  //     }

  //     result.push({
  //         url,
  //         from,
  //         name,
  //         label
  //     });
  // }
  // return result;
}
