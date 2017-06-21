<!--
    @file 语音播放器
    @author XiaoBin Li(lixiaobin@baijiahulian.com)
-->

<template>
	<div class="audio-player" :style="{width: calcWidth() + 'px'}" :class="{playing: status==1}" @click="run">
		<div v-if="!loading">
			<i class="control-btn">
				<span class="icon-status icon-play" v-if="status==0"></span>
				<span class="icon-status icon-pause" v-if="status==1"></span>
			</i>
			<span class="audio-length">
				{{Math.floor(this.timerSeconds / 60) + '\'' + Math.round(this.timerSeconds % 60)}}
			</span>
            <div class="progress">
                <div class="ball" :style="{'left': progressLeft}"></div>
            </div>
		</div>
		<div v-if="loading">
			下载中...
		</div>
	</div>
</template>

<script>
	export default {
		// 音频秒数, 音频url, 音频显示最大宽度、音频显示最小宽度
		props: ['seconds', 'url',  'maxWidth', 'minWidth'],
		data () {
			return {
				audio: null,
				// 音频是否下载完成
				loading: false,
				// 视频加载状态
				isLoaded: false,
				// 1为插放中 0为停止
				status: 0,
				timer: null,
				// prop中的seconds不能修改，这里存一份，用来倒计划，并且不要影响到原始时长
				timerSeconds: this.seconds,
				// 初如进度条的位置
                progressLeft: '0%'
			};
		},
		computed: {
			audios () {
				return this.$store ? this.$store.state.audios : []
			}
		},
		mounted () {
			this.init();
		},
		methods: {
            /**
             * 计算进度条位值 
             */
            calcProgress () {
                var audio = this.audio;
                this.progressLeft = audio.currentTime * 100 / audio.duration + '%';
                this.timerSeconds = audio.duration - audio.currentTime;
            },
			/**
			 * 播放倒计时
			 */
			countDown() {
                if (this.timer) {
                   clearTimeout(this.timer);
                }
				this.timer = setTimeout(() => {
                    this.calcProgress();
					this.countDown();
				}, 1000);
			},
			/**
			 * 计算宽度
			 */
			calcWidth() {
				var minWidth = this.minWidth || 200;
				var maxWidth = this.maxWidth || 450;
				var seconds = this.seconds;

				// 1.5秒1px
				var width = Math.round(seconds / 1.5);
				// 宽度小于最小宽度，就使用最小宽度
				if (width < minWidth) {
					return minWidth
				// 宽度大于最大宽度，就使用最大宽度
				} else if (width > maxWidth) {
					return maxWidth;
				} else {
					return width
				}
			},
			/**
			 * 播放语言
			 */
			play () {
				// 把所有视频都暂停了
				this.audios.forEach((item)=> {
					item.pause();
				});
				this.countDown();
				this.audio.play();
				this.status = 1;
			},
			/**
			 * 暂停语音
			 */
			pause () {
				this.audio.pause();
				clearTimeout(this.timer);
				this.status = 0;
			},
			/**
			 * 暂停/播放录音
			 */
			run (e) {
				if (this.status) {
	                this.pause();
	            } else {
	                if (!this.isLoaded) {
	                	this.loading = true;
	                }
	                this.play();
	            }
	            e.stopPropagation();
			},
			/**
			 * 初始化
			 */
			init () {
				var url = this.url;
				var audio = document.createElement('audio');
				audio.src = url;
				this.audio = audio;

		        audio
		            .addEventListener('ended', ()=>{
		               	this.status = 0;
                        clearTimeout(this.timer);
		            });

		        audio
		        	.addEventListener('loadeddata', ()=> {
			            this.isLoaded = true;
			            this.loading = false;
		        	});

		        // 当前播放音频，会影响到其它音频，比例当前视频播放，其它视频要暂停，这里先用vuex管理
				if (this.$store) {
			        this.$store.dispatch('addAudio', this);
				}
			}
		},
		beforeDestroy() {
			this.audio.pause();
			this.status = 0;
            this.audio = null;
		}
	}
</script>

<style lang="scss">
    $voice-brand-color: #36C797;
    $size: 30px;
	.audio-player {
		cursor: pointer;
		text-align: left;
	    border: 1px solid $voice-brand-color;
	    height: $size;
	    line-height: $size;
	    border-radius: $size / 2;
	    box-sizing: border-box;
	   
	    audio {
	        display: none;
	    }
        .control-btn {
            width: $size;
            height: $size;
            border-radius: $size / 2;
            box-sizing: border-box;
            float: left;
            position: relative;
            top: -1px;
            vertical-align: top;
            background: $voice-brand-color;
			text-align: center;
			font-size: 12px;
			.icon-status {
				vertical-align: middle;
			}
        }
        .audio-length {
            width: 45px;
            float: right;
            color: $voice-brand-color;
            font-size: 12px;
        }
        .progress {
            height: 2px;
            margin: 0 55px 0 36px;
            position: relative;
            top: 13px;
            background: #F0F0F0;
            .ball {
                width: 8px;
                height: 8px;
                background: $voice-brand-color;
                border-radius: 50%;
                position: absolute;
                top: -3px;
                left: 0;
            }
        }
	}
</style>
