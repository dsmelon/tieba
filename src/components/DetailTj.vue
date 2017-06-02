<template>
	<div>
		<div class="tit">
			<router-link to="/index/tj"><Icon type="ios-arrow-left" color="#666" size="30"></Icon></router-link>
			&nbsp;|&nbsp;&nbsp;{{ bar }}
			<span v-on:click="menu"><Icon type="android-more-vertical" color="#666" size="26"></Icon></span>
			<em v-on:click="master" v-bind:style="{color:onlymast?'white':'#666',border:onlymast?'none':'1px solid #666',backgroundColor:onlymast?'blue':'white'}">楼主</em>
		</div>
		<p class="theme">{{ theme }}</p>
		<div class="essay">
			<span><img :src="headp"></span>
			{{ name }}{{ $route.query.id }}
			<i v-bind:style="{backgroundColor:level<4?'green':(level<10?'skyblue':'orange')}">lv.{{ level<10?"0"+level:level }}</i>
			<em>＋关注</em>
			<div class="content">{{ content }}</div>
		</div>
		<div v-for="img in imgList" style="padding-bottom: 2px;"><img :src="img"></div>
		<p class="time">楼主&nbsp;&nbsp;{{ time }}</p>
		<ul class="reply">
			<li v-for="rep in replyList">
				<span><img :src="rep.headp"></span>
				<span v-bind:style="{width:wid+'px'}">
					<p style="color: #f45;font-size: 12px;margin-top: 12px;">{{ rep.name }}
						<i v-bind:style="{backgroundColor:rep.level<4?'green':(rep.level<10?'skyblue':'orange')}">lv.{{ rep.level<10?"0"+rep.level:rep.level }}</i>
					</p>
					<p style="color: #333;font-size: 14px;">{{ rep.content }}</p>
					<p style="color: #666;font-size: 12px;">第{{ rep.count }}楼&nbsp;&nbsp;{{ rep.time }}</p>
					<div class="reps">
						<p v-for="reps in rep.replys" style="color: #45f;font-size: 10px;">{{ reps.name }}：<em style="color: #333">{{ reps.content }}</em></p>
						<p style="text-align:center;color: #666;font-size: 10px;">更多{{ rep.rest }}条回复</p>
						<strong></strong>
					</div>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				wid: window.innerWidth-52,
				onlymast: false,
				// menuShow: false,
				bar: "miss吧",
				theme: "我该怎么办 在吃麻辣烫",
				level: 10,
				name: "刀妹",
				headp: "https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
				content: "拉电风扇吧绳子拉下来了",
				imgList: [
					"https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
					"https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
					"https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
				], 
				time: "2017-05-20",
				replyList: [{
					headp: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					name: "坏脾气",
					content: "哇",
					count: 2,
					level: 7,
					time: "2017-05-22",
					rest: 12,
					replys: [{
						name: "一叶知秋",
						content: "干的不错aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
					},{
						name: "苏沐橙",
						content: "你悠着点儿啊",
					}]
				},{
					headp: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					name: "坏脾气",
					content: "哇",
					count: 2,
					level: 7,
					time: "2017-05-22",
					rest: 12,
					replys: [{
						name: "一叶知秋",
						content: "干的不错aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
					},{
						name: "苏沐橙",
						content: "你悠着点儿啊",
					}]
				},{
					headp: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					name: "坏脾气",
					content: "哇",
					count: 2,
					level: 7,
					time: "2017-05-22",
					rest: 12,
					replys: [{
						name: "一叶知秋",
						content: "干的不错aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
					},{
						name: "苏沐橙",
						content: "你悠着点儿啊",
					}]
				}]
			}
		},
		methods: {
			master(){
				this.onlymast=!this.onlymast;
			},
			menu(){
				// this.menuShow=!this.menuShow;
			}
		},
		mounted(){
			console.log(this.$route.query.id)
		}
	}
</script>

<style scoped>
	.tit {
		font-size: 16px;
		color: #333;
		padding: 10px 10px 4px;	
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		background-color: white;
		border-bottom: 1px solid #ccc;
	}
	.tit i,.tit em {
		vertical-align: middle;
	}
	.tit em {
		float: right;
		font-size: 10px;
		padding: 0 4px;
		margin-right: 30px;
		margin-top: 2px;
	}
	.tit span {
		float: right;
	}
	.theme {
		margin-top: 45px;
		padding: 15px;
		font-size: 16px;
		color: #333;
	}
	.essay {
		color: #f45;
		font-size: 12px;
		padding: 0 12px;
	}
	.essay span {
		height: 36px;
		width: 36px;
		display: inline-block;
		overflow: hidden;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 8px;
	}
	.essay i {
		font-size: 12px;
		color: white;
		font-weight: bolder;
		padding: 0 2px;
		border-radius: 2px;
		margin-left: 4px;
	}
	.essay em {
		float: right;
		color: #45f;
		font-size: 12px;
		vertical-align: middle;
		margin-top: 7px;
	}
	.content {
		color: #333;
		font-size: 14px;
		margin-top: 14px;
		margin-bottom: 14px;
	}
	.time {
		padding: 10px 12px;
		border-bottom: 6px solid #e8e8e8;
	}
	.reply li {
		border-bottom: 1px solid #e8e8e8;
		padding-bottom: 12px;
	}
	.reply span {
		display: inline-block;
		overflow: hidden;
		vertical-align: top;
	}
	.reply li span:first-child {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		margin: 12px 8px 0 12px;
	}
	.reply li p i {
		font-size: 10px;
		color: white;
		font-weight: bolder;
		padding: 0 2px;
		border-radius: 2px;
		margin-left: 10px;
	}
	.reps {
		background-color: #f3f3f3;
		padding: 6px 10px;
		margin-right: 6px;
		margin-top: 10px;
		position: relative;
	}
	.reps p {
		line-height: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.reps strong {
		display: inline-block;
		border: 10px solid;
		border-color: transparent transparent #f3f3f3 transparent;
		position: absolute;
		left: 5px;
		top: -20px;
		transform: scale(0.7,1);
	}
</style>