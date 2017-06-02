<template>
	<div>
		<div class="title">进吧
			<router-link to="/sign">
				<div><Icon size="22" type="log-in" color="#666"></Icon></div>
			</router-link>
			<router-link to="/game">
				<div><Badge dot><Icon size="32" type="ios-game-controller-b-outline" color="#666"></Icon></Badge></div>
			</router-link>
		</div>
		<div class="inp">
			<router-link to="/search"><p>{{ hot }}</p></router-link>
			<Icon type="ios-search" size="20" color="#aaa"></Icon>
		</div>
		<div class="mybar">关注的吧</div>
		<ul class="barList">
			<li v-for="bar in barList">
				<router-link to="/">
					<span><img v-bind:src="bar.barp"></span>
					<em>{{ bar.barname }}</em>
					<i v-bind:style="{backgroundColor:bar.level<4?'green':(bar.level<10?'skyblue':'orange')}">lv.{{ bar.level<10?"0"+bar.level:bar.level }}</i>
				</router-link>
			</li>
		</ul>
		<div class="add"><router-link to="/"><Icon type="ios-plus-empty" size="32" color="#999"></Icon>探索更多感兴趣的吧</router-link></div>
		<div style="height: 16px;background-color: #dadada"></div>
		<div class="recommend">吧推荐<Icon type="ios-eye-outline" size="24" color="#ccc"></Icon><span v-on:click="become">换一换</span></div>
		<ul class="rbar">
			<li v-for="rbar in rbarList">
				<router-link to="/">
					<span class="rbarp"><img v-bind:src="rbar.rbarp"></span>
					<span v-bind:style="{width:wid+'px'}">
						<p style="font-size: 14px;color: #333;">{{ rbar.rbarname }}</p>
						<p style="font-size: 13px;color: #666;">关注{{ rbar.like>10000?parseInt(rbar.like/10000)+'w':rbar.like }}&nbsp;&nbsp;帖子{{ rbar.essay>10000?parseInt(rbar.essay/10000)+'w':rbar.essay }}</p>
						<p class="inf">{{ rbar.inf }}</p>
					</span>
					<span class="star">关注</span>
				</router-link>
			</li>
		</ul>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				hot: "大家都在搜：不陪打麻将就跳楼",
				wid: window.innerWidth-192,
				barList: [{
					barp: "https://img.alicdn.com/imgextra/i4/471594703/TB2UP3asxxmpuFjSZFNXXXrRXXa_!!471594703.jpg",
					barname: "惠州学院",
					level: 10,
				},{
					barp: "https://img.alicdn.com/imgextra/i2/471594703/TB22bcesrlmpuFjSZFlXXbdQXXa_!!471594703.jpg",
					barname: "近视眼",
					level: 8,
				},{
					barp: "https://img.alicdn.com/imgextra/i4/471594703/TB2RJz.st0opuFjSZFxXXaDNVXa_!!471594703.jpg",
					barname: "300英雄",
					level: 6,
				},{
					barp: "https://img.alicdn.com/imgextra/i1/471594703/TB2Fh8fqNxmpuFjSZFNXXXrRXXa_!!471594703.jpg",
					barname: "王者荣耀",
					level: 3,
				},{
					barp: "https://img.alicdn.com/imgextra/i2/471594703/TB2VwbGr5RnpuFjSZFCXXX2DXXa_!!471594703.jpg",
					barname: "龙珠超",
					level: 15,
				},{
					barp: "https://img.alicdn.com/imgextra/i2/471594703/TB22wcZoYXlpuFjy1zbXXb_qpXa_!!471594703.jpg",
					barname: "葫芦娃",
					level: 1,
				}],
				rbarList: [{
					rbarp: "https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
					rbarname: "地下城与勇士",
					like: 858,
					essay: 377480,
					inf: "阿拉德闲聊茶馆，休闲侃侃，一切尽在掌握中",
				},{
					rbarp: "https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					rbarname: "青蛇精",
					like: 85800,
					essay: 80,
					inf: "阿拉德闲聊茶馆，休闲侃侃，一切尽在掌握中",
				},{
					rbarp: "https://img.alicdn.com/imgextra/i1/471594703/TB2GYQVll0lpuFjSszdXXcdxFXa_!!471594703.jpg",
					rbarname: "皇家马德里",
					like: 88,
					essay: 77480,
					inf: "阿拉德闲聊茶馆，休闲侃侃，一切尽在掌握中",
				}]
			}
		},
		methods: {
			become(){
				this.rbarList.sort(function(){return Math.random()-0.5;});	
			},
		},
	}
</script>

<style scoped>
	.title {
		background-color: white;
		font-size: 16px;
		color: #333;
		padding: 16px 8px;
		font-family: "Microsoft Yahei";
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.title a:first-child div{
		position: absolute;
		right: 16px;
		bottom: 13px;
	}
	.title a:last-child div{
		position: absolute;
		right: 62px;
		bottom: 11px;
	}
	.inp {
		padding: 61px 8px 8px;
		position: relative;
	}
	.inp p {
		width: 100%;
		height: 30px;
		background-color: #eee;
		border-radius: 4px;
		padding: 6px 8px 10px 28px;
		color: #aaa;
	}
	.inp i {
		position: absolute;
		left: 15px;
		top: 67px;
	}
	.mybar {
		padding: 8px 10px;
		border-top: 1px solid #ddd;
		color: #777;
	}
	.barList {
		border-top: 1px solid #eee;
	}
	.barList li {
		padding: 10px;
		font-size: 16px;
		overflow: hidden;
		border-bottom: 1px solid #eee;
	}
	.barList li i {
		font-size: 12px;
		color: white;
		font-weight: bolder;
		vertical-align: middle;
		float: right;
		margin: 11px 4px;
		padding: 0 2px;
		border-radius: 2px;
	}
	.barList li span {
		display: inline-block;
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 8px;
	}
	.barList li a {
		display: block;
		color: #333;
	}
	.add {
		font-size: 16px;
		text-align: center;
		position: relative;
		padding: 16px 0;
	}
	.add a {
		color: #999;
	}
	.add i {
		position: absolute;
		left: calc(50% - 96px);
		top: 11px;
	}
	.recommend {
		position: relative;
		padding: 10px;
	}
	.recommend i {
		position: absolute;
		left: 50px;
		top: 8px;
	}
	.recommend span {
		float: right;
		padding-right: 5px;
		color: #15f;
	}
	.rbar {
		border-top: 1px solid #eee;
		margin-bottom: 70px;
	}
	.rbar li {
		padding: 10px 15px;
		border-bottom: 1px solid #eee;
	}
	.rbar a,.rbar span {
		display: inline-block;
		overflow: hidden;
		vertical-align: middle;
	}
	.rbar a {
		width: 100%;
	}
	.rbar .rbarp {
		width: 60px;
		height: 60px;
		margin-right: 8px;
	}
	.rbar .inf {
		color: #999;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.rbar .star {
		background-color: #33f;
		color: white;
		font-size: 13px;
		float: right;
		padding: 6px 20px;
		margin: 8px 0;
		border-radius: 4px;
	}
</style>