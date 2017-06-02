<template>
	<ul class="tips">
		<li style="color: #999;font-size: 12px;padding: 8px 5px;">直播结束</li>
		<li v-for="tip in msg">
			<router-link to='/'>
				<p>{{ tip.content }}</p>
				<p v-bind:style="{height:wid+'px'}"><img :src="tip.img"></p>
				<p><em>{{ tip.bar }}</em><span><Icon type="android-contacts" color="#999" size="15"></Icon>&nbsp;&nbsp;{{ tip.person>10000?parseInt(tip.person/10000)+'w':tip.person }}人参与</span></p>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				msg: [{
					content: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					img: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					bar: "贴吧演播室吧",
					person: 675,
				},{
					content: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					img: "https://img.alicdn.com/imgextra/i4/2202422863/TB29N.JsOpnpuFjSZFIXXXh2VXa_!!2202422863.jpg",
					bar: "全民娱乐吧",
					person: 57500,
				},{
					content: "一起走过520，留下美好瞬间",
					img: "https://img.alicdn.com/imgextra/i1/2976550308/TB2X9zQpY4npuFjSZFmXXXl4FXa_!!2976550308.jpg",
					bar: "贴吧娱乐吧",
					person: 1205,
				},{
					content: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					img: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					bar: "贴吧演播室吧",
					person: 675,
				},{
					content: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					img: "https://img.alicdn.com/imgextra/i4/2202422863/TB29N.JsOpnpuFjSZFIXXXh2VXa_!!2202422863.jpg",
					bar: "全民娱乐吧",
					person: 57500,
				},{
					content: "一起走过520，留下美好瞬间",
					img: "https://img.alicdn.com/imgextra/i1/2976550308/TB2X9zQpY4npuFjSZFmXXXl4FXa_!!2976550308.jpg",
					bar: "贴吧娱乐吧",
					person: 1205,
				}],
				wid: window.innerWidth/2.5,
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
	}
	.tips li a {
		display: block;
	}
	.tips p {
		overflow: hidden;
	}
	.tips li p:first-child {
		color: #333;
		font-size: 14px;
		padding: 8px 5px;
	}
	.tips li p:last-child {
		padding: 8px 10px 10px;
	}
	.tips li p em {
		color: white;
		background-color: #aaa;
		padding: 2px 3px;
	}
	.tips li p span {
		float: right;
		color: #999;
		font-size: 12px;
	}
</style>