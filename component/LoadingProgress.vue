<style lang="scss">
    @import '../../../../app/public/css/common/color';
    $bar-colors: ($brand-error, $brand-warning, $brand-primary, $brand-success);
    .vc-loading-bar {
        height: 3px;
        background: $brand-warning;
        background: linear-gradient(left, $bar-colors);
        box-shadow: 0 0 20px 0 #fff;
        transition: all .5s ease-in-out;
    }
    .vc-loading {
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 1002;
        &:first-child {
            top: 0;
        }
        &:last-child {
            bottom: 0;
        }
    }
</style>

<template>
    <div class="vc-loading">
        <div class="vc-loading-bar" :style="styleObj"></div>
    </div>
</template>

<script>
    export default {
        props: ['shown'],
        data () {
            return {
                intval: 0,
                count: 0,
                animation: 0,
                opacity: 0
            };
        },
        computed: {
            styleObj () {
                const self = this;
                return {
                    width: self.count + '%',
                    opacity: self.opacity
                };
            }
        },
        watch: {
            shown (newValue) {
                if (newValue) {
                    this.start();
                } else {
                    this.complete();
                }
            }
        },
        methods: {
            start () {
                const self = this;
                self.show();
                clearInterval(self.intval);
                self.intval = setInterval(
                    () => {
                        if (isNaN(self.count)) {
                            clearInterval(self.intval);
                            self.count = 0;
                            self.hide();
                        } else {
                            self.remaining = 100 - self.count;
                            self.count += 0.15 * Math.pow(1 - Math.sqrt(self.remaining), 2);
                        }
                    },
                    200
                );
            },
            show () {
                const self = this;
                self.animate(() => {
                    self.opacity = 1;
                }, 100);
            },
            complete () {
                const self = this;
                self.count = 100;
                clearInterval(self.intval);
                setTimeout(() => {
                    self.hide();
                    setTimeout(() => {
                        self.count = 0;
                    }, 500);
                }, 1000);
            },
            hide () {
                const self = this;
                self.opacity = 0;

                self.animate(() => {
                    self.count = 0;
                    self.animate(() => {
                        self.show();
                    }, 500);
                }, 500);
            },
            animate (fn, time) {
                if (this.animation !== undefined) { clearTimeout(this.animation); }
                this.animation = setTimeout(fn, time);
            }
        }
    };
</script>
