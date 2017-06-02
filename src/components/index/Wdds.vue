<template>
	<div>
		<swiper :options="swiperOption" class="gun" v-bind:style="{height:swid+'px'}">
			<swiper-slide v-for="slide in swiperSlides"><img :src="slide"></swiper-slide>
			<!-- <div class="swiper-pagination"  slot="pagination"></div> -->
		</swiper>
		<div class="dir">
			<router-link to='/'>
				<Icon type="ionic" size="20" color="orange"></Icon>&nbsp;&nbsp;&nbsp;	大神排行榜
			</router-link>
			<router-link to='/'>
				<Icon type="flag" size="20" color="#45f"></Icon>&nbsp;&nbsp;&nbsp;大神请选
			</router-link>
		</div>
		<ul id="tips">
			<li v-for="tip,index in msg">
				<div>{{ tip.inf }}</div>
				<span class="headp"><img v-bind:src="tip.headp"></span>
				<span class="content" v-bind:style="{width:wid+'px'}">
					<div class="tit">
						<em>{{ tip.nname }}</em>
						<p style="color: #999">粉丝:&nbsp;{{ tip.like>10000?parseInt(tip.like/10000)+'w':tip.like }}</p>
						<i v-on:click="addlove(index)" v-bind:style="{color: tip.likecol}">{{ tip.addlike }}</i>
					</div>
					<p class="theme">{{ tip.theme }}</p>
					<p class="des">{{ tip.description }}</p>
					<div class="imgList">
						<span v-for="img in tip.imgList" v-bind:style="{height:wid/tip.imgList.length*0.618+'px'}"><img v-bind:src="img"></span>
					</div>
					<p class="inf"><em>{{ tip.bar }}&nbsp;{{ tip.itime }}</em>&nbsp;&nbsp;回复&nbsp;{{ tip.reply }}&nbsp;&nbsp;</p>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
import {swiper,swiperSlide,swiperPlugins} from 'vue-awesome-swiper';
export default {
	components: {swiper,swiperSlide},
	data(){
		return {
			swiperOption: {
				autoplay: 3000,
				mousewheelControl: true,
				loop: true,
				autoplayDisableOnInteraction: false,
				// paginationClickable: true,
				// pagination: '.swiper-pagination',
			},
			swiperSlides: [
				"https://img.alicdn.com/imgextra/i2/1753132733/TB2khgrttFopuFjSZFHXXbSlXXa_!!1753132733.jpg",
				"https://img.alicdn.com/imgextra/i3/2950216676/TB29U4gnbJkpuFjy1zcXXa5FFXa_!!2950216676.jpg",
				"https://img.alicdn.com/imgextra/i4/1753132733/TB2N90xqQqvpuFjSZFhXXaOgXXa_!!1753132733.jpg",
			],
			msg:[{
				inf: "ps如风，伴随吾身",
				headp: "https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
				nname: "鱼鱼很酷",
				itime: "03-26",
				theme: "哈哈哈笑死了",
				description: "刚刚下课拍的 图一图二我们班男生睡觉的姿势，图三图四我们班女生睡觉的姿势，哈哈哈。",
				imgList: ["https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg","https://img.alicdn.com/imgextra/i4/607263649/TB2XhFcnB8kpuFjSspeXXc7IpXa_!!607263649.jpg","https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg","https://img.alicdn.com/imgextra/i4/607263649/TB2XhFcnB8kpuFjSspeXXc7IpXa_!!607263649.jpg"],
				bar: "miss吧",
				reply: 855,
				like: 87654,
				addlike: "＋关注",
				likecol: "#45f",
			},{
				inf: "病娇吧原创写手",
				headp: "https://img.alicdn.com/imgextra/i4/607263649/TB2XhFcnB8kpuFjSspeXXc7IpXa_!!607263649.jpg",
				nname: "鱼鱼很酷",
				itime: "18分钟前",
				theme: "哈哈哈笑死了",
				description: "刚刚下课拍的 图一图二我们班男生睡觉的姿势，图三图四我们班女生睡觉的姿势，哈哈哈。",
				imgList: ["https://img.alicdn.com/imgextra/i4/607263649/TB2XhFcnB8kpuFjSspeXXc7IpXa_!!607263649.jpg","https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg","https://img.alicdn.com/imgextra/i3/471594703/TB23us3lgxlpuFjSszgXXcJdpXa_!!471594703.jpg"],
				bar: "miss吧",
				reply: 855,
				like: 8765,
				addlike: "＋关注",
				likecol: "#45f",
			},{
				inf: "娱乐圈盘点大神",
				headp: "https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
				nname: "鱼鱼很酷",
				itime: "04-16",
				theme: "哈哈哈笑死了",
				description: "刚刚下课拍的 图一图二我们班男生睡觉的姿势，图三图四我们班女生睡觉的姿势，哈哈哈。",
				imgList: ["https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg","https://img.alicdn.com/imgextra/i4/607263649/TB2XhFcnB8kpuFjSspeXXc7IpXa_!!607263649.jpg"],
				bar: "miss吧",
				reply: 855,
				like: 876,
				addlike: "＋关注",
				likecol: "#45f",
			},{
				inf: "孤独钓者",
				headp: "https://gd2.alicdn.com/imgextra/i4/607263649/TB2_xOKpYBmpuFjSZFuXXaG_XXa_!!607263649.jpg",
				nname: "鱼鱼很酷",
				itime: "18分钟前",
				theme: "哈哈哈笑死了",
				description: "刚刚下课拍的 图一图二我们班男生睡觉的姿势，图三图四我们班女生睡觉的姿势，哈哈哈。",
				imgList: ["https://img.alicdn.com/imgextra/i2/2255010609/TB22WwpqXXXXXcTXXXXXXXXXXXX_!!2255010609.jpg"],
				bar: "miss吧",
				reply: 855,
				like: 87,
				addlike: "＋关注",
				likecol: "#45f",
			},{
				inf: "我要把好吃的都给你",
				headp: "https://img.alicdn.com/imgextra/i2/2255010609/TB22WwpqXXXXXcTXXXXXXXXXXXX_!!2255010609.jpg",
				nname: "鱼鱼很酷",
				itime: "18分钟前",
				theme: "哈哈哈笑死了",
				description: "刚刚下课拍的 图一图二我们班男生睡觉的姿势，图三图四我们班女生睡觉的姿势，哈哈哈。",
				imgList: [],
				bar: "miss吧",
				reply: 855,
				like: 8,
				addlike: "＋关注",
				likecol: "#45f",
			}],
			wid: window.innerWidth-74,
			swid: window.innerWidth/2.5,
		}
	},
	methods: {
		addlove(index){
			this.msg[index].addlike="已关注";
			this.msg[index].likecol="#999";
		}
	},	
}
</script>

<style scoped>
	.gun {
		margin-top: 127px;
	}
	.dir a {
		display: inline-block;
		color: #333;
		font-size: 14px;
		width: 49.5%;
		text-align: center;
		margin: 8px 0;
		vertical-align: middle;
	}
	.dir a:first-child {
		border-right: 1px solid #ddd;
	}
	#tips {
		margin-bottom: 57px;
	}
	#tips li {
		padding: 12px;
		border-top: 10px solid #eee;
	}
	#tips li>div {
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;
		color: #666;
		font-size: 12px;
		margin-bottom: 12px;
	}
	#tips span {
		display: inline-block;
		vertical-align: top;
	}
	#tips .headp {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		overflow: hidden;
		margin-right: 6px;
	}
	#tips .content .tit em {
		color: #333;
		font-size: 13px;
	}
	#tips .tit {
		position: relative;
	}
	#tips .tit i {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 13px;
		padding-top: 6px;
	}
	.theme {
		color: #222;
		font-size: 16px;
		padding: 8px 0;
	}
	.des {
		color: #666;
		font-size: 14px;
		padding-bottom: 6px;
	}
	.inf {
		color: #666;
		font-size: 12px;
		text-align: right;
		overflow: hidden;
		padding-top: 8px;
	}
	.inf em {
		float: left;
	}
	.imgList {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
	}
	.imgList span {
		flex: 1;
		padding: 1px;
		overflow: hidden;
	}
</style>