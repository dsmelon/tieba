<template>
	<div>
		<ul class="tips">
			<li v-for="vid in vids">
				<router-link to="/" style="display: block;" class="up">
					<video v-bind:src="vid.origin" v-bind:style="{height:wid+'px',backgroundImage:'url('+vid.theme+')'}" poster="."></video>
					<p><span><Icon type="ios-play" color="#f45" size="12"></Icon>&nbsp;直播中</span>&nbsp;&nbsp;{{ vid.content }}</p>
				</router-link>
				<router-link to="/" style="display: block;" class="down">
					<p><span><img :src="vid.headp"></span>&nbsp;&nbsp;{{ vid.name }}<em>{{ vid.bar }}&nbsp;&nbsp;观众<span>{{ vid.melon }}</span></em></p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				wid: window.innerWidth,
				vids: [{
					content: "WCA热战中：DOTA2职业预赛",
					headp: "https://img.alicdn.com/imgextra/i4/3040333040/TB20BaKqB0kpuFjSsppXXcGTXXa_!!3040333040.jpg",
					name: "竞技游戏吧直播",
					melon: 179,
					theme: "https://img.alicdn.com/imgextra/i4/3040333040/TB20BaKqB0kpuFjSsppXXcGTXXa_!!3040333040.jpg",
					origin: "/",
					bar: "dota2吧",
				},{
					content: "你好 阳光明媚的下午",
					headp: "https://img.alicdn.com/imgextra/i2/337195319/TB2R3k5tipnpuFjSZFIXXXh2VXa_!!337195319.jpg",
					name: "一一很二haha",
					melon: 87,
					theme: "https://img.alicdn.com/imgextra/i2/337195319/TB2R3k5tipnpuFjSZFIXXXh2VXa_!!337195319.jpg",
					origin: "/",
					bar: "贴吧直播吧",
				},{
					content: "明天口语欧多克",
					headp: "https://img.alicdn.com/imgextra/i4/1620092984/TB2wimasOpnpuFjSZFIXXXh2VXa_!!1620092984.jpg",
					name: "蹿赫赫",
					melon: 30,
					theme: "https://img.alicdn.com/imgextra/i4/1620092984/TB2wimasOpnpuFjSZFIXXXh2VXa_!!1620092984.jpg",
					origin: "/",
					bar: "bilibili吧",
				},{
					content: "感谢陪伴",
					headp: "https://img.alicdn.com/imgextra/i2/337195319/TB2EsIXcCB0XKJjSZFsXXaxfpXa_!!337195319.jpg",
					name: "七七",
					melon: 69,
					theme: "https://img.alicdn.com/imgextra/i2/337195319/TB2EsIXcCB0XKJjSZFsXXaxfpXa_!!337195319.jpg",
					origin: "/",
					bar: "青年吧",
				}]
			}
		},
	}
</script>

<style scoped>
	.tips {
		margin: 127px 0 57px;
	}
	.tips li .up {
		position: relative;
	}
	.tips li .up video {
		background-size: cover;
		width: 100%;
		overflow: hidden;
	}
	.tips li .up p {
		position: absolute;
		left: 20px;
		top: 15px;
		color: white;
		font-size: 14px;
	}
	.tips li .up p span {
		overflow: hidden;
		border: 1px solid white;
		border-radius: 10px;
		padding: 1px 5px;
		color: white;
		font-size: 12px;
	}
	.tips li .down p {
		margin-left: 15px;
		color: #333;
		font-size: 12px;
		padding: 6px 0 10px;
	}
	.tips li .down p>span {
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		vertical-align: middle;
		overflow: hidden;
	}
	.tips li .down p em {
		float: right;
		margin-right: 15px;
		margin-top: 5px;
	}
	.tips li .down p em span {
		color: orange;
	}
</style>