<template>
	<div id="wraper">
		<div id="wrap" v-bind:style="{width:wid+'px'}">
			<div id="inner">
				<router-link v-for="(item,index) in ititle" :to="item.path" v-on:click.native="turn(index)" v-bind:style="{color:$route.path===item.path?'#39f':'#999'}">{{ item.text }}</router-link>
			</div>
			<div id="range"><Slider v-model="value" range></Slider></div>
		</div>
		<div v-on:click="tab"><Icon size="20" :type=tabList[count] color="#ccc"></Icon></div>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				ititle: [{
					text: '推荐',
					path: '/index/tj'
				},{
					text: '直播',
					path: '/index/zb'
				},{
					text: '我的大神',
					path: '/index/wdds'
				},{
					text: '访谈',
					path: '/index/ft'
				},{
					text: '吐槽日报',
					path: '/index/tcrb'
				},{
					text: '栏目精选',
					path: '/index/lmjx'
				},{
					text: '每日精选',
					path: '/index/mrjx'
				}],
				wid: window.innerWidth,
				count: 0,
				tabList: ['ios-arrow-down','ios-arrow-up'],
				value: [1,10],
				values: [1,10,12,19,22,34,37,45,48,60,64,75,79,91],
			}
		},
		methods: {
			tab(){
				this.count=++this.count%2;
			},
			turn(index){
				this.value=[];
				this.value.push(this.values[index*2],this.values[index*2+1]);
			}
		},
	}
</script>

<style scoped>
	#wraper {
		height: 67px;
		overflow: hidden;
		position: fixed;
		margin-top: 60px;
		padding-top: 28px;
		width: 100%;
		left: 0;
		top: 0;
		background-color: white;
		z-index: 10;
	}
	#wrap {
		overflow-x: auto;
	}
	#wraper i {
		position: absolute;
		right: 0;
		top: 28px;
		color: #ccc;
		background-color: white;
		padding: 0 15px;
	}
	#wrap div {
		font-size: 14px;
		width: 560px;
	}
	#inner a {
		margin: 0 15px;
	}
	#range {
		overflow: hidden;
	}
	#range .ivu-slider {
		line-height: 2;
	}
</style>