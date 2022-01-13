<template>
	<div>
        <div class="base-date-picker">
			<mark
				style="
					position: fixed;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background: rgba(0, 0, 0, 0);
					z-index: 999;
				"
				v-show="showSeason"
				@click.stop="showSeason = false"
			></mark>
			<el-input
				placeholder="请选择季度"
				v-model="showValue"
				style="width: 138px"
				@focus="showSeason = true"
				suffix-icon="icon-ms-date"
			>
			</el-input>
			<el-card
				class="box-card"
				style="
					width: 322px;
					padding: 0 3px 20px;
					margin-top: 10px;
					position: fixed;
					z-index: 9999;
				"
				v-show="showSeason"
			>
				<div
					slot="header"
					class="clearfix"
					style="text-align: center; padding: 0"
				>
					<button
						type="button"
						class="ms-picker-panel__icon-btn ms-date-picker__prev-btn vmd-icon icon-ms-double-left"
						@click="prev"
					></button>
					<span role="button" class="el-date-picker__header-label"
						>{{ year }}年</span
					>
					<button
						type="button"
						@click="next"
						class="ms-picker-panel__icon-btn ms-date-picker__next-btn vmd-icon icon-ms-double-right"
					></button>
				</div>
				<div class="text item" style="text-align: center">
					<el-button
						type="text"
						size="medium"
						style="width: 40%; color: #606266; float: left"
						@click="selectSeason(0)"
						>第一季度</el-button
					>
					<el-button
						type="text"
						size="medium"
						style="float: right; width: 40%; color: #606266"
						@click="selectSeason(1)"
						>第二季度</el-button
					>
				</div>
				<div class="text item" style="text-align: center">
					<el-button
						type="text"
						size="medium"
						style="width: 40%; color: #606266; float: left"
						@click="selectSeason(2)"
						>第三季度</el-button
					>
					<el-button
						type="text"
						size="medium"
						style="float: right; width: 40%; color: #606266"
						@click="selectSeason(3)"
						>第四季度</el-button
					>
				</div>
			</el-card>
		</div>
    </div>
</template>
<script>
/**
 * @description: UI组件  可选择季节
 * @api: valueArr : 季度value defalut['01-03', '04-06', '07-09', '10-12'] 默认值待设置
 */
export default {
	props: {
		valueArr: {
			default: () => {
				return ['01-03', '04-06', '07-09', '10-12']
			},
			type: Array
		},
		getValue: {
			default: () => {},
			type: Function
		},
        // "202101-03"
		defaultValue: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			showSeason: false,
			season: '',
			year: new Date().getFullYear(),
			showValue: ''
		}
	},
	created() {
		if (this.defaultValue) {
			const value = this.defaultValue
			const arr = value.split('-')
			this.year = arr[0].slice(0, 4)
			const str = arr[0].slice(4, 6) + '-' + arr[1].slice(4, 6)
			const arrAll = this.valueArr
			this.showValue = `${this.year}年${arrAll.indexOf(str) + 1}季度`
		}
	},
	watch: {
		defaultValue: function(value, oldValue) {
			const arr = value.split('-')
			this.year = arr[0].slice(0, 4)
			const str = arr[0].slice(4, 6) + '-' + arr[1].slice(4, 6)
			const arrAll = this.valueArr
			this.showValue = `${this.year}年${arrAll.indexOf(str) + 1}季度`
		}
	},
	methods: {
		one() {
			this.showSeason = false
		},
		prev() {
			this.year = this.year * 1 - 1
		},
		next() {
			this.year = this.year * 1 + 1
		},
		selectSeason(i) {
			const that = this
			that.season = i + 1
			const arr = that.valueArr[i].split('-')
			that.getValue(that.year + arr[0] + '-' + that.year + arr[1])
			that.showSeason = false
			this.showValue = `${this.year}年${this.season}季度`
		}
	}
}
</script>
<style lang="scss" scoped>
    .base-date-picker{
        /deep/.ms-input--suffix {
            .icon-ms-date{
                font-size: 12px;
                margin-top: 1px;
            }
        }
    }
</style>
