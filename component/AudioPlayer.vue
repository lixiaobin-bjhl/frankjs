<!--
    @file 语音播放器
    @author XiaoBin Li(lixiaobin@baijiahulian.com)
-->

<template>
	<div class="audio-player" :style="{width: calcWidth() + 'px'}" :class="{playing: status==1}" @click="run">
		<div v-if="!loading">
			<i class="icon-wave-right"></i>
			<span class="audio-length">
				{{Math.floor(this.timerSeconds / 60) + '\'' + this.timerSeconds % 60}}
			</span>
		</div>
		<div v-if="loading">
			下载中...
		</div>
	</div>
</template>

<script>
	export default {
		// 音频秒数, 音频url, 音频显示最大宽度、音频显示最小宽度
		props: ['seconds', 'url', 'maxWidth', 'minWidth'],
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
				timerSeconds: this.seconds
			};
		},
		computed: {
			audios () {
				return this.$store.state.audios || [];
			}
		},
		mounted () {
			this.init();
		},
		methods: {
			/**
			 * 播放倒计时
			 */
			countDown() {
				this.timerSeconds --;
				this.timer = setTimeout(() => {
					this.countDown();
				}, 1000);
			},
			/**
			 * 计算宽度
			 */
			calcWidth() {
				var minWidth = this.minWidth || 85;
				var maxWidth = this.maxWidth || 200;
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
				setTimeout(() => {
					this.countDown();
				}, 1000);
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
				var $audio = $('<audio preload="none" volume="1.0" src="' + url + '"></audio>');
				var audio = this.audio = $audio[0];

		        audio
		            .addEventListener('ended', ()=>{
		               	this.status = 0;
		            });

		        audio
		        	.addEventListener('loadeddata', ()=> {
			            this.isLoaded = true;
			            this.loading = false;
			            this.status = 1;
		        	});

		        // 当前播放音频，会影响到其它音频，比例当前视频播放，其它视频要暂停，这里先用vuex管理
		        this.$store.dispatch('addAudio', this);
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
	@mixin scale($ratio...) {
	  -webkit-transform: scale($ratio);
	      -ms-transform: scale($ratio); // IE9 only
	       -o-transform: scale($ratio);
	          transform: scale($ratio);
	}
	// Animations
	@mixin animation($animation) {
	  -webkit-animation: $animation;
	       -o-animation: $animation;
	          animation: $animation;
	}
	@mixin animation-name($name) {
	  -webkit-animation-name: $name;
	          animation-name: $name;
	}
	@mixin animation-duration($duration) {
	  -webkit-animation-duration: $duration;
	          animation-duration: $duration;
	}
	@mixin animation-timing-function($timing-function) {
	  -webkit-animation-timing-function: $timing-function;
	          animation-timing-function: $timing-function;
	}
	@mixin animation-delay($delay) {
	  -webkit-animation-delay: $delay;
	          animation-delay: $delay;
	}
	@mixin animation-iteration-count($iteration-count) {
	  -webkit-animation-iteration-count: $iteration-count;
	          animation-iteration-count: $iteration-count;
	}
	@mixin animation-direction($direction) {
	  -webkit-animation-direction: $direction;
	          animation-direction: $direction;
	}
	@mixin animation-fill-mode($fill-mode) {
	  -webkit-animation-fill-mode: $fill-mode;
	          animation-fill-mode: $fill-mode;
	}
	@keyframes playing {
	    @each $i in 0 25 50 75 100 {
	        #{$i}% {
	            @if $i%50 == 0 {
	                @include scale(0.5);
	            } @else {
	                @include scale(1);
	            }
	        }
	    }
	}

	@-webkit-keyframes playing {
	    @each $i in 0 25 50 75 100 {
	        #{$i}% {
	            @if $i%50 == 0 {
	                @include scale(0.5);
	            } @else {
	                @include scale(1);
	            }
	        }
	    }
	}

	.audio-player {
		cursor: pointer;
		text-align: left;
	    font-size: 12px;
	    background: #6EB92C;
	    color: #fff;
	    height: 26px;
	    line-height: 26px;
	    border-radius: 23px;
	    padding: 0 15px;
	    box-sizing: border-box;

	    .icon-wave-right {
	        margin-right: 0.7rem;
	        display: inline-block;
	    }

	    audio {
	        display: none;
	    }

	    &.playing {
	        .icon-wave-right {
	            @include animation-name(playing);
	            @include animation-duration(3s);
	            @include animation-iteration-count(infinite);
	        }
	    }
	}
</style>
