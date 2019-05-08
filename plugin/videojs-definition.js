/**
 * @file 设置视频清晰度
 */

define(function (require, exports) {
  'use strict'

  /**
     * 注册清晰度插件
     *
     * @param {string} options.defaultDefinition 默认清晰度
     * @param {Array} options.definitionData 清晰度列表
     */
  videojs.registerPlugin('definition', function (options) {
    var el = this.el()
    var me = this
    var defaultDefinition = options.defaultDefinition || 'low'
    var definitionData = options.definitionData || []
    var defaultDefinitionObj = {}
    var menuHtml = '<ul class="vjs-menu-content" role="menu">'

    definitionData.forEach(function (item) {
      var isCurrent = item.type == defaultDefinition
      if (isCurrent) {
        defaultDefinitionObj = item
      }
      menuHtml += '<li class="vjs-menu-item  vjs-hd-menu-item ' +
                (isCurrent ? 'vjs-selected' : '') + '" type="' +
                item.type + '" role="menuitemcheckbox">' +
                item.name + '</li>'
    })
    menuHtml += '</ul>'
    var videoPanelMenu = $('.vjs-fullscreen-control', el)
    videoPanelMenu.after('' +
            '<div class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button"  aria-live="polite" aria-expanded="false" aria-haspopup="true">' +
            '     <div class="vjs-menu" role="presentation">' +
            (definitionData.length > 1 ? menuHtml : '') +
            '     </div>' +
            '     <button class="vjs-subs-caps-button vjs-control vjs-button btn-switch-definition" type="button" title="清晰度切换">' +
            '         <span>' + defaultDefinitionObj.name + '</span>' +
            '     </button>' +
            '</div>'
    )

    // 切换视频清晰度
    $(el).on('click', '.vjs-hd-menu-item', function () {
      $('.vjs-menu-item', el).removeClass('vjs-selected')
      $(this).addClass('vjs-selected')
      var type = $(this).attr('type')
      var text = $(this).text()
      me.trigger('switchdefinition', type)
      $('.btn-switch-definition span', el).text(text)
    })
    return me
  })
})
