<template>
	<ul class="tips">
		<li v-for="tip,index in msg" class="vice1" v-bind:style="{order:upset[index]}">
			<router-link to='/'>
				<p>{{ tip.content }}</p>
				<p v-bind:style="{height:wid+'px'}">
					<span v-for="img in msg[index].imgList"><img :src="img"></span>
				</p>
				<p><em>{{ tip.bar }}</em><span><Icon type="chatbox-working" color="#999" size="15"></Icon>&nbsp;&nbsp;{{ tip.person>10000?parseInt(tip.person/10000)+'w':tip.person }}</span></p>
			</router-link>
		</li>
		<li v-for="tig,index in msgv" class="vice2" v-bind:style="{order:upset[index+msg.length]}">
			<router-link to='/'>
				<div class="left">
					<p class="tit">{{ tig.tit.substring(0,30) }}</p>
					<p class="con">{{ tig.content }}</p>
					<p><em>{{ tig.bar }}</em><span><Icon type="chatbox-working" color="#999" size="15"></Icon>&nbsp;&nbsp;{{ tig.person>10000?parseInt(tig.person/10000)+'w':tig.person }}</span></p>
				</div>
				<div class="right" v-bind:style="{height:wid+'px'}"><img :src="tig.img"></div>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				wid: window.innerWidth/4,
				swid: window.innerWidth/2.5,
				msg: [{
					content: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					imgList: [
						"https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					],
					bar: "贴吧演播室吧",
					person: 675,
				},{
					content: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					imgList: [
						"https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					],
					bar: "全民娱乐吧",
					person: 57500,
				},{
					content: "一起走过520，留下美好瞬间",
					imgList: [
						"https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
					],
					bar: "贴吧娱乐吧",
					person: 1205,
				},{
					content: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					imgList: [
						"https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					],
					bar: "贴吧演播室吧",
					person: 675,
				},{
					content: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					imgList: [
						"https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					],
					bar: "全民娱乐吧",
					person: 57500,
				},{
					content: "一起走过520，留下美好瞬间",
					imgList: [
						"https://img.alicdn.com/imgextra/i1/471594703/TB2lORAnC0mpuFjSZPiXXbssVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
						"https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					],
					bar: "贴吧娱乐吧",
					person: 1205,
				}],
				msgv:[{
					tit: "贴吧演播室，GNZ48成员做客贴吧演播室现场直播,贴吧演播室，GNZ48成员做客贴吧演播室现场直播",
					content: "顽童：“麻麻别打了，疼！”",
					img: "https://img.alicdn.com/imgextra/i2/2202422863/TB28lxoqdFopuFjSZFHXXbSlXXa_!!2202422863.jpg",
					bar: "阅经吧",
					person: 675,
				},{
					tit: "鬼马咚咚，一起去探班，520 全民娱记首现古剑奇谭2",
					content: "有没有那么一刻，怀疑自己不是亲生的！",
					img: "https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					bar: "阅经吧",
					person: 57500,
				},{
					tit: "一起走过520，留下美好瞬间,一起走过520",
					content: "这位吧友，你听过的最离谱的事是什么？",
					img: "https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
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
					img: "https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					bar: "全民娱乐吧",
					person: 57500,
				},{
					tit: "一起走过520，留下美好瞬间，一起走过520",
					content: "这位吧友，你听过的最离谱的事是什么？",
					img: "https://img.alicdn.com/imgextra/i1/471594703/TB2XscUlb0kpuFjy0FjXXcBbVXa_!!471594703.jpg",
					bar: "阅经吧",
					person: 1205,
				}],
				upset: [],
			}	
		},
		mounted(){
			var length=this.msg.length+this.msgv.length;
			for(var i=0;i<length;i++) this.upset.push(i);
			this.upset.sort(()=>{Math.random()-0.5});
		}
	}
</script>

<style scoped>
	.tips {
		margin: 127px 0 57px;
		display: flex;
		flex-wrap: wrap;
	}
	.tips li {
		flex-basis: 100%;
	}
	.vice1 {
		border-top: 1px solid #eee;
	}
	.vice1 a,.vice2 a {
		display: block;
	}
	.vice1 p:first-child {
		color: #333;
		font-size: 14px;
		padding: 8px 5px;
	}
	.vice1 p:nth-child(2) {
		overflow: hidden;
		height: 100px;
		display: flex;
	}
	.vice1 p:nth-child(2) span {
		flex: 1;
		overflow: hidden;
	}
	.vice1 p:nth-child(2) span:nth-child(2) {
		padding: 0 4px;
	}
	.vice1 p:last-child {
		padding: 8px 10px 10px;
	}
	.vice1 p em {
		color: white;
		background-color: #aaa;
		padding: 2px 3px;
	}
	.vice1 p span {
		float: right;
		color: #999;
		font-size: 12px;
	}
	.vice2 {
		border-top: 1px solid #eee;
		padding: 8px 0;
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