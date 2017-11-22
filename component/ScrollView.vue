<template>
    <ul class="scroll-view">
        <li class="turn-btn turn-left" :class="{'disabled': this.index <= 1}" @click="trunPage(false)">左</li>
        <li class="scroll-content" ref="scroll-content">
            <ul>
                <slot>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </slot>
            </ul>
        </li>
        <li class="turn-btn turn-left" :class="{'disabled': this.index >= this.totalPage}" @click="trunPage(true)">右</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                // 初始页数
                index: 1,
                // 滚动元素
                scrollElementInner: null,
                // 容器宽度
                viewWidth: 0,
                // 总页数
                totalPage: 0
            }
        },
        mounted() {
            var scrollContent = this.$refs['scroll-content'];
            this.scrollElementInner = scrollContent.querySelector('ul');
            this.viewWidth = scrollContent.offsetWidth;
            var realWidth = 0;
            this.scrollElementInner.querySelectorAll('*').forEach((item) => {
                realWidth += item.offsetWidth;
            });
            this.totalPage = Math.ceil(realWidth / this.viewWidth);
        },
        methods: {
            /**
             * 翻页
             * 
             * @param {boolean} isTrunNext 是否查看下一页
             */
            trunPage(isTrunNext) {
                if (isTrunNext) {
                    this.index++;
                } else {
                    this.index--;
                }
                // 翻到第一页还负向翻，就滚到最后一页
                if (this.index < 1) {
                    this.index = this.totalPage;
                }
                // 翻到最后一页还负向翻，就滚到第一页
                if (this.index > this.totalPage) {
                    this.index = 1;
                }
                this.scrollElementInner.style.transform = 'translateX(' + - (this.index - 1) * this.viewWidth  + 'px)';
            }
        }
    }
</script>

<style lang="scss">
    .scroll-view {
        display: flex;
        align-items: center;
        .scroll-content {
            ul {
                width: 100000px;
                position: relative;
                transition: transform .5s;
            }
            flex: 1;
            overflow: hidden;
            li {
                float: left;
                width: 100px;
                height: 100px;
            }
        }
        .turn-btn {
            width: 30px;
            text-align: center;
            line-height: 30px;
            height: 30px;
            background: blue;
            color: #fff;
            &.disabled {
                background: #CCC;
                cursor: not-allowed;
            }
        }
    }
</style>