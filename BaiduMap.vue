<!--
    @file 百度地图
    @author XiaoBin Li(lixiaobin@baijiahulian.com)
-->

<template>
	<div :class="[keyId]">
		<div :id="keyId"></div>
		<input type="hidden" name="lng" ng-model="lng" />
		<input type="hidden" name="lat" ng-model="lat" />
		<input type="hidden" name="address" />
	</div>
</template>

<script>
	import * as baiduMap from '../plugin/baidu';
	import $ from 'jquery';

	export default {
		props: {
			area: {
				type: String,
				default: '北京'

			},
			keyId: {
				type: String,
				default: 'big-map'
			},
			lng: {
				type: Number,
				default: null
			},
			lat: {
				type: Number,
				default: null
			}
		},
		mounted() {
			setTimeout(() => {
				this.bindEvent();
			});
		},
		methods: {
			/**
	         * dispose map
	         */
			disposeMap() {
				var existedMap = baiduMap.getExistedMap();
				existedMap[this.keyId] = null;
				$('.' + this.keyId).remove();
			},

            /**
             * 绑定事件
             */
			bindEvent() {
				this.getAreaToMap(this.area, this.lng, this.lat);
			},

            /*
             * 获取当前用户编辑的省市区地址信息，并定位地图
             * 如果有lng,lat 经纬度优先定位
             * @property area 省市区信息
             * @property lng、lat 经纬度信息
             */
			getAreaToMap(area, lng, lat) {
				if (lng && lat) {
					baiduMap.addrReso(this.keyId, area, lng, lat);
				} else {
					baiduMap.addrReso(this.keyId, (area || '北京'));
				}
			}
		},
		beforeDestroy() {
			this.disposeMap();
		}
	}

</script>

<style lang="sass">
	.big-map {
		.map-oper {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 36px;
			text-align: center;
			button {
				position: relative;
				z-index: 2;
				margin-top: 5px;
			}
			.btn-default {
				margin-left: 5px;
			}
			.bg {
				background-color: #000;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
			}
		}
	}
</style>