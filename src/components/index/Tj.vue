<template>
	<ul id="tips">
		<li v-for="tip,index in msg">
			<router-link to="/"><span class="headp"><img v-bind:src="tip.headp"></span></router-link>
			<span class="content" v-bind:style="{width:wid+'px'}">
				<router-link :to="'/detailtj?id='+index">
					<em>{{ tip.nname }}</em>
					<em>{{ tip.itime }}</em>
					<p class="theme">{{ tip.theme }}</p>
					<p class="des">{{ tip.description }}</p>
				</router-link>
				<div class="imgList">
					<span v-for="img in tip.imgList" v-bind:style="{height:wid/tip.imgList.length*0.618+'px'}"><img v-bind:src="img"></span>
				</div>
				<p class="inf"><em>{{ tip.bar }}</em>阅读&nbsp;{{ tip.read }}&nbsp;&nbsp;回复&nbsp;{{ tip.reply }}&nbsp;&nbsp;<Icon type="ios-close-outline" size="14"></Icon></p>
			</span>
		</li>
	</ul>
</template>
<script>
export default {
	data: function(){
		return {
			msg: [],
			wid: window.innerWidth-74,
		}
	},
	mounted(){
		this.$http.get("./static/tj.json").then((reponse)=>{
			this.msg=reponse.body;
		})
	// 	var Server =mongo.Server;
	// 	var Db=mongo.Db;

	// 	var server=new Server("localhost",27017,{auto_reconnect:true});
	// 	var db=new Db('foo',server);

	// 	db.open((err,db)=>{
	// 		if(!err){
	// 			console.log("我连上了");
	// 		}
	// 	})
	}
}
</script>

<style scoped>
	#tips {
		margin: 127px 0 57px;
	}
	#tips a {
		display: inline-block;
	}
	#tips li {
		padding: 12px;
		border-bottom: 1px solid #eee;
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
	#tips .content>a em {
		color: #333;
		font-size: 13px;
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