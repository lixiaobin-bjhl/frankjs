<!--
  @fileOverview 基于wangEditor富文本编辑器
  @author XiaoBin Li(lixiaobin8878@gmail.com) 
-->

<template>
    <div ref="editor" :style="{'height': 500 + 'px'}" v-html="value"></div>
</template>

<script>

import WangEditor from 'wangeditor';

export default {
    props: ['uploadUrl', 'height', 'value'],
    mounted () {
        this.createEditor()
    },
    methods: {
        createEditor() {
            const editor = new WangEditor(this.$refs.editor);
            editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright',
                '|', 'link', 'unlink', 'table', 'img', 'video', 'insertcode', '|', 'undo', 'redo', 'fullscreen'
            ];
            editor.config.uploadImgUrl = this.uploadUrl;
            editor.onchange = ()=> {
                // 不能触发input，否则wangEditor的光标为乱动，使用change事件，业务自已处理value内容
                // this.$emit('input', editor.$txt.html());
                this.$emit('change', editor.$txt.html());
            }
            editor.create();
        }
    }
}
</script>

<style>
    .wangEditor-container{
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #CCC;
    }
</style>