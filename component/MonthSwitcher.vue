<template>
    <ul class="month-switcher">
       <li class="turn-btn" :class="{'can-turn': canTurnLast}" @click="turn($event, 'last')">
           <span class="el-icon-arrow-left" title="上一月"></span>
        </li>
        <li>
            {{ currentDate | date('yyyy') }}年{{ currentDate | date('MM')}}月
        </li>
        <li class="turn-btn" :class="{'can-turn': canTurnNext}" @click="turn($event, 'next')">
            <span class="el-icon-arrow-right" title="下一月"></title></span>
        </li>
    </ul>
</template>

<script>
	export default {
		props: {
			value: {
				default: new Date(),
			},
			// 是否可设置未来时间
			canFutureTime: {
				default: false
			}
		},
		computed: {
			canTurnNext () {
				var date = new Date();
				if (this.canFutureTime) {
					return true;
				}
				return this.currentDate - date.setMonth(date.getMonth() - 1) <= 0;
			}
		},
		data () {
			return {
				currentDate: this.value,
				canTurnLast: true
			}
		},
		methods: {
			turn (event, direction) {
				if (!$(event.currentTarget).hasClass('can-turn')) {
					return;
				}
				var date = new Date(this.currentDate);
				var month = date.getMonth();
				var turnMonth = direction == 'last' ? month - 1 : month + 1;
				this.currentDate = date.setMonth(turnMonth, 1);
				date = new Date(this.currentDate);
				var year = date.getFullYear();
				month = date.getMonth();
				this.$emit('input', +new Date(year, month));
			}
		}
	}
</script>

<style lang="scss">
	.month-switcher {
		li {
			list-style: none;
			display: inline-block;
			&.turn-btn {
				height: 25px;
				user-select: none;
				cursor: not-allowed;
				line-height: 25px;
				width: 25px;
				border-radius: 5px;
				text-align: center;
			}
			&.can-turn {
				cursor: pointer;
				color: #1c9cdd;
			}
		}
	}
</style>