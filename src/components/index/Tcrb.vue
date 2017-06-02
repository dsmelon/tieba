<template>
	<ul class="tips">
		<li v-for="tip in msg">
			<router-link to='/'>
				<div class="left">
					<p class="tit">{{ tip.tit.substring(0,30) }}</p>
					<p class="con">{{ tip.content }}</p>
					<p><em>{{ tip.bar }}</em><span><Icon type="chatbox-working" color="#999" size="15"></Icon>&nbsp;&nbsp;{{ tip.person>10000?parseInt(tip.person/10000)+'w':tip.person }}</span></p>
				</div>
				<div class="right" v-bind:style="{height:wid+'px'}"><img :src="tip.img"></div>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				wid: window.innerWidth/4,
				msg:[{
					tit: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					content: "顽童：“麻麻别打了，疼！”",
					img: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					bar: "阅经吧",
					person: 675,
				},{
					tit: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					content: "有没有那么一刻，怀疑自己不是亲生的！",
					img: "https://img.alicdn.com/imgextra/i4/2202422863/TB29N.JsOpnpuFjSZFIXXXh2VXa_!!2202422863.jpg",
					bar: "阅经吧",
					person: 57500,
				},{
					tit: "一起走过520，留下美好瞬间,一起走过520",
					content: "这位吧友，你听过的最离谱的事是什么？",
					img: "https://img.alicdn.com/imgextra/i1/2976550308/TB2X9zQpY4npuFjSZFmXXXl4FXa_!!2976550308.jpg",
					bar: "贴吧娱乐吧",
					person: 1205,
				},{
					tit: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					content: "同学们上学的时候都遇到过的晚自习停电，你干了什么？",
					img: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					bar: "阅经吧",
					person: 675,
				},{
					tit: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					content: "今天我们来说说四川方言的幽默。",
					img: "https://img.alicdn.com/imgextra/i4/2202422863/TB29N.JsOpnpuFjSZFIXXXh2VXa_!!2202422863.jpg",
					bar: "全民娱乐吧",
					person: 57500,
				},{
					tit: "一起走过520，留下美好瞬间，一起走过520",
					content: "这位吧友，你听过的最离谱的事是什么？",
					img: "https://img.alicdn.com/imgextra/i1/2976550308/TB2X9zQpY4npuFjSZFmXXXl4FXa_!!2976550308.jpg",
					bar: "阅经吧",
					person: 1205,
				}],
			}	
		},
	}
</script>

<style scoped>
	.tips {
		margin: 127px 0 57px;
	}
	.tips li {
		border-top: 1px solid #eee;
		padding: 8px 0;
	}
	.tips li a {
		display: block;
	}
	.left,.right {
		display: inline-block;
		vertical-align: middle;
		box-sizing: border-box;
	}
	.left {
		width: 63%;
		padding: 0 12px;
		color: #333;
		font-size: 14px;
	}
	.right {
		width: 36%;
		overflow: hidden;
	}
	.left .con {
		color: #999;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 2;
	}
	.left p em {
		color: white;
		background-color: #aaa;
		padding: 2px 3px;
		font-size: 10px;
	}
	.left p span {
		float: right;
		color: #999;
		font-size: 12px;
	}
</style>