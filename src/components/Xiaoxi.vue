<template>
	<div>
		<div class="title">消息</div>
		<ul class="tips">
			<li v-for="item in nochat">
				<router-link to="/">
					<div>
						<span v-bind:style="{backgroundColor: item.bgcolor}">
							<Icon :type="item.mark" size="32" color="white"></Icon>
						</span>{{ item.content }}
						<Icon type="ios-arrow-right" size="20" color="#ccc"></Icon>
					</div>
				</router-link>
			</li>
			<li v-for="item in chat">
				<router-link to="/">
					<div>
						<span><img v-bind:src="item.headp"></span>
						<div class="chat" v-bind:style="{width:wid+'px'}">
							<p>{{ item.nname }}<i>{{ item.itime }}</i></p>
							<p>{{ item.content }}</p>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		<footer-bar></footer-bar>
	</div>
</template>
<Icon type="ios-at-outline"></Icon>
<script>
	export default {
		data: function(){
			return {
				nochat: [{
					mark: "ios-chatbubble-outline",
					bgcolor: "#45f",
					content: "回复我的",
				},{
					mark: "ios-at-outline",	
					bgcolor: "#f45",
					content: "@我的",
				}],
				chat: [{
					headp: "https://img.alicdn.com/imgextra/i1/471594703/TB2GYQVll0lpuFjSszdXXcdxFXa_!!471594703.jpg",
					nname: "秋木寂",
					itime: "3天前",
					content: "我们一起玩吧，我们一起玩吧，我们一起玩吧，我们一起玩吧,我们一起玩吧",
				},{
					headp: "https://img.alicdn.com/imgextra/i4/471594703/TB2UP3asxxmpuFjSZFNXXXrRXXa_!!471594703.jpg",
					nname: "落落",
					itime: "01-18",
					content: "我们一起玩吧，我们一起玩吧，我们一起玩吧",
				},{
					headp: "https://img.alicdn.com/imgextra/i1/471594703/TB2GYQVll0lpuFjSszdXXcdxFXa_!!471594703.jpg",
					nname: "嘤嘤嘤",
					itime: "3天前",
					content: "我们一起玩吧，我们一起玩吧",
				},{
					headp: "https://img.alicdn.com/imgextra/i4/471594703/TB2UP3asxxmpuFjSZFNXXXrRXXa_!!471594703.jpg",
					nname: "咕叽豪",
					itime: "2016-12-29",
					content: "我们一起玩吧",
				}],
				wid: window.innerWidth-75,
			}
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
	}
	.tips {
		margin-top: 56px;
		padding: 0 10px;
		margin-bottom: 60px;
	}
	.tips li {
		padding: 8px 0;
		border-bottom: 1px solid #eee;
	}
	.tips li a {
		display: block;
	}
	.tips li span {
		display: inline-block;
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 8px;
		text-align: center;
		line-height: 55px;
	}
	.tips div {
		color: #333;
		font-size: 14px;
		position: relative;
	}
	.tips div>i {
		position: absolute;
		top: 10px;
		right: 0px;
	}
	.tips .chat {
		display: inline-block;
		vertical-align: middle;
	}
	.tips .chat p:first-child {
		font-size: 14px;
		color: #333;
	}
	.tips .chat p i {
		float: right;
		color: #999;
		font-size: 13px;
	}
	.tips .chat p:last-child {
		font-size: 12px;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>