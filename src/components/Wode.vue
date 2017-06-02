<template>
	<div>
		<div class="title">我的
			<router-link to="/sign">
				<div><Icon size="22" color="#666" type="ios-gear-outline"></Icon></Icon></div>
			</router-link>
			<router-link to="/game">
				<div><Badge dot><Icon size="22" type="tshirt-outline" color="#666"></Icon></Badge></div>
			</router-link>
		</div>
		<div class="inf">
			<span><router-link to="/"><img v-bind:src="inf.headp"></router-link></span>
			<p>{{ inf.name }}<em>{{ inf.six }}</em></p>
			<p><i>印</i><i>＋</i></p>
			<p>☆{{ inf.star }}丨获取T豆<strong>今日访客{{ inf.visit }}</strong></p>
		</div>
		<div class="love">
			<router-link to="/" v-for="item,index in love.count">
				<p>{{ item }}</p>
				<p>{{ love.name[index] }}</p>
			</router-link>
		</div>
		<div style="height: 10px;background-color: #eee;"></div>
		<div class="money">
			<router-link to="/">百度钱包&nbsp;&nbsp;
				<Icon type="social-usd-outline" color="red"></Icon>
				<span><Icon type="ios-arrow-right" color="#999"></Icon></span>
			</router-link>
		</div>
		<div class="pack">
			<router-link to="/" v-for="item,index in pack.mark">
				<Icon :type="item" size="20" color="#666"></Icon>
				<p>{{ pack.name[index] }}</p>
			</router-link>
		</div>
		<div style="height: 10px;background-color: #eee;"></div>
		<ul class="tigs">
			<li v-for="n in 5">
				<router-link to="/">
					<span style="width: 18px"><Icon :type="main[n-1].mark" size="20" :color="main[n-1].mclock"></Icon></span>&nbsp;&nbsp;
					{{ main[n-1].content }}
					<span style="float: right;padding-top: 5px;color: #999;font-size: 12px;">{{ main[n-1].prompt }}&nbsp;&nbsp;
						<i v-show="main[n-1].new" style="display: inline-block;width: 6px;height: 6px;border-radius: 50%;background-color: red"></i>&nbsp;&nbsp;
						<Icon type="ios-arrow-right" color="#999"></Icon>
					</span>
				</router-link>
			</li>
			<div style="height: 10px;background-color: #eee;"></div>
			<li v-for="n in 5">
				<router-link to="/">
					<span style="width: 18px"><Icon :type="main[n+4].mark" size="20" :color="main[n+4].mclock"></Icon></span>&nbsp;&nbsp;
					{{ main[n+4].content }}
					<span style="float: right;padding-top: 5px;color: #999;font-size: 12px;">{{ main[n+4].prompt }}&nbsp;&nbsp;
						<i v-show="main[n+4].new" style="display: inline-block;width: 6px;height: 6px;border-radius: 50%;background-color: red"></i>&nbsp;&nbsp;
						<Icon type="ios-arrow-right" color="#999"></Icon>
					</span>
				</router-link>
			</li>
			<div style="height: 10px;background-color: #eee;"></div>
			<li v-for="n in 1">
				<router-link to="/">
					<span style="width: 18px"><Icon :type="main[n+9].mark" size="20" :color="main[n+9].mclock"></Icon></span>&nbsp;&nbsp;
					{{ main[n+9].content }}
					<span style="float: right;padding-top: 5px;color: #999;font-size: 12px;">{{ main[n+9].prompt }}&nbsp;&nbsp;
						<i v-show="main[n+9].new" style="display: inline-block;width: 6px;height: 6px;border-radius: 50%;background-color: red"></i>&nbsp;&nbsp;
						<Icon type="ios-arrow-right" color="#999"></Icon>
					</span>
				</router-link>
			</li>
			<div style="height: 10px;background-color: #eee;"></div>
			<li v-for="n in 2">
				<router-link to="/">
					<span style="width: 18px"><Icon :type="main[n+10].mark" size="20" :color="main[n+10].mclock"></Icon></span>&nbsp;&nbsp;
					{{ main[n+10].content }}
					<span style="float: right;padding-top: 5px;color: #999;font-size: 12px;">{{ main[n+10].prompt }}&nbsp;&nbsp;
						<i v-show="main[n+10].new" style="display: inline-block;width: 6px;height: 6px;border-radius: 50%;background-color: red"></i>&nbsp;&nbsp;
						<Icon type="ios-arrow-right" color="#999"></Icon>
					</span>
				</router-link>
			</li>
			<div style="height: 90px;background-color: #eee;"></div>
		</ul>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
	export default {
		data: function(){
			return {
				inf: {
					headp: "https://img.alicdn.com/imgextra/i2/2224399160/TB2ud8ZXipnpuFjSZFkXXc4ZpXa_!!2224399160.jpg",
					name: "独孤求败",
					six: "♂",
					star: 10,
					visit: 20,
				},
				love: {
					count: [0,113,2623,6],
					name: ["关注","粉丝","帖子","关注的吧"],
				},
				pack: {
					mark: ["social-yen-outline","bag","card","android-star-outline"],
					name: ["钱包余额","卡券包","银行卡","获取T豆"],
				},
				main: [{mclock: "#f45",mark: "paper-airplane",content: "我收到的礼物",prompt: "",new: false,},
					   {mclock: "#f45",mark: "social-youtube",content: "直播",prompt: "",new: false,},
					   {mclock: "#45f",mark: "waterdrop",content: "蓝钻商城",prompt: "我的蓝钻剩余:1",new: false,},
					   {mclock: "#ee8",mark: "social-freebsd-devil",content: "会员中心",prompt: "",new: true,},
					   {mclock: "orange",mark: "ios-browsers",content: "消费记录",prompt: "",new: true,},
					   {mclock: "green",mark: "star",content: "我的收藏",prompt: "",new: true,},
					   {mclock: "#45f",mark: "clock",content: "浏览历史",prompt: "",new: false,},
					   {mclock: "orange",mark: "briefcase",content: "我的卡包",prompt: "",new: false,},
					   {mclock: "#f45",mark: "star",content: "漂流瓶",prompt: "",new: true,},
					   {mclock: "purple",mark: "ios-pulse-strong",content: "主播任务",prompt: "",new: false,},
					   {mclock: "green",mark: "ios-book",content: "我的书架",prompt: "还没有内容，去书城看看",new: false,},
					   {mclock: "orange",mark: "person",content: "我的好友",prompt: "",new: false,},
					   {mclock: "orange",mark: "person-stalker",content: "我的群组",prompt: "",new: false,}]
			}
		}
	}
</script>
<style scoped>
	.tigs li a {
		display: block;
		color: #333;
		font-size: 14px;
	}
	.tigs li {
		padding: 8px 15px;
		border-bottom: 1px solid #eee;
	}
	.tigs li span {
		vertical-align: middle;
		display: inline-block;
	}
	.title {
		font-size: 16px;
		color: #333;
		padding: 16px 8px;
		font-family: "Microsoft Yahei";
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
	}
	.title a:first-child div{
		position: absolute;
		right: 16px;
		bottom: 13px;
	}
	.title a:last-child div{
		position: absolute;
		right: 62px;
		bottom: 15px;
	}
	.inf {
		background: url("http://bpic.ooopic.com/15/84/20/15842021-76ff6cc426f9267a079b07f384ab6915.jpg");
		background-size: cover;
		text-align: center;
		padding: 80px 0 10px;
	}
	.inf span {
		display: inline-block;
		width: 100px;
		height: 100px;
		overflow: hidden;
		border-radius: 50%;
	}
	.inf p:nth-child(2) {
		font-size: 18px;
		color: white;
		font-family: "Microsoft Yahei";
		line-height: 2.5;
	}
	.inf p em {
		background-color: #44f;
		border-radius: 50%;
		overflow: hidden;
		display: inline-block;
		width: 20px;
		height: 20px;
		vertical-align: middle;
		line-height: 1.4;
		font-size: 14px;
		margin-left: 8px;
	}
	.inf p i:first-child {
		background-color: #44f;
		color: white;
		padding: 3px;
		border-radius: 4px;
		display: inline-block;
		width: 18px;
		height: 18px;
		line-height: 1;
		font-size: 12px;
		vertical-align: middle;
	}
	.inf p i:last-child {
		color: #44f;
		padding: 3px 4px 3px 2px;
		border-radius: 4px;
		display: inline-block;
		width: 18px;
		height: 18px;
		line-height: 0.8;
		font-size: 14px;
		border: 1px solid #44f;
		vertical-align: middle;
		margin-left: 5px;
	}
	.inf p:last-child {
		margin-top: 10px;
		position: relative;
		font-size: 12px;
		top: 0;
		left: 0;
	}
	.inf p strong {
		font-weight: normal;
		font-size: 12px;
		position: absolute;
		right: 15px;
		color: #ccc;
	}
	.love {
		display: flex;
		padding: 12px 0;
	}
	.love a {
		flex: 1;
		text-align: center;
	}
	.love a p:first-child {
		color: #333;
		font-size: 18px;
		line-height: 1.6;
	}
	.love a p:last-child {
		color: #666;
		font-size: 12px;
	}
	.money {
		font-size: 14px;
		padding: 5px 10px;
	}
	.money a {
		color: #999;
	}
	.money span {
		float: right;
	}
	.pack {
		display: flex;
	}
	.pack a {
		flex: 1;
		text-align: center;
		border: 1px solid #eee;
		margin-left: -1px;
		padding: 8px 0;
	}
	.pack a p:last-child {
		color: #666;
		font-size: 12px;
	}
</style>