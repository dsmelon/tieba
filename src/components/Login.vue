<template>
	<div :style="{backgroundColor:'#eee',height:wid+'px',overflow:'hidden'}" v-on:click="hid">
		<div class="log">
			<router-link to="/index/tj"><Icon type="ios-arrow-left" color="#666" size="36"></Icon></router-link>
			&nbsp;&nbsp;登录
			<router-link to="/reg">注册</router-link>
		</div>
		<div class="logo"></div>
		<div class="inp">
			<span v-on:click.stop="his"><Icon :type="udFlag?'ios-arrow-up':'ios-arrow-down'" color="#999" size="24"></Icon></span>
			<span v-on:click="pwd"><Icon type="ios-eye-outline" :color="eyeFlag?'#34f':'#999'" size="24"></Icon></span>
			<input type="text" placeholder="手机号/用户名/邮箱" v-model="name">
			<input :type="eyeFlag?'text':'password'" placeholder="密码" v-bind:value="text" ref="pwd">
			<ul class="his" v-show="udFlag" v-on:click.stop="write">
				<li v-for="tip,index in history">{{ tip }}
					<span v-on:click.stop="remove(index)"><Icon type="ios-close-empty" color="#999" size="30"></Icon></span>
				</li>
			</ul>
			<router-link to="/index/tj" class="loginBtn" v-on:click.native="add">登录</router-link>
			<div class="problem">
				<router-link to="/">短信验证码登录</router-link>
				<router-link to="/" style="float: right;">登录遇到问题</router-link>
			</div>
		</div>
		<div class="three">
			<router-link to="/">快速注册</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
			<router-link to="/">第三方登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				wid: window.innerHeight,
				text: "",
				name: "",
				eyeFlag: false,
				udFlag: false,
				history: ["大帅瓜","哈哈哈","千纸鹤","独孤求败","木头人"],
			}
		},
		methods: {
			pwd(){
				this.eyeFlag=!this.eyeFlag;
				this.text=this.$refs.pwd.value;
			},
			his(){
				this.udFlag=!this.udFlag;
			},
			write(e){
				this.udFlag=!this.udFlag;
				this.name=e.target.innerText;
			},
			add(){
				if(this.history.indexOf(this.name)==-1 && this.name.trim()) this.history.unshift(this.name);
				if(this.history.length>5) this.history.length=5;
				this.$store.commit("login",this.udFlag);//mutations
				// this.$store.dispatch("login",this.udFlag);actions
			},
			remove(index){
				this.history.splice(index,1);
			},
			hid(){
				this.udFlag=false;
			}
		},
		mounted(){
			if(this.history.length>5) this.history.length=5;//只记录历史登录五条数据
		}
	}
</script>

<style scoped>
	.log {
		font-size: 16px;
		color: #333;
		padding: 10px 10px 4px;	
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		line-height: 0;
		background-color: #fcfcfc;
	}
	.log i,.log a {
		vertical-align: middle;
	}
	.log a:last-child {
		float: right;
		color: #666;
		font-size: 14px;
		padding-top: 16px;
	}
	.logo {
		background: url(../assets/logo.png) no-repeat;
		overflow: hidden;
		height: 90px;
		background-size: contain;
		margin: 80px 30% 0;
		background-position: center;
	}
	.inp {
		margin: 0 10px;
		position: relative;
	}
	.inp input {
		box-sizing: border-box;
		width: 100%;
		padding: 12px;
		font-size: 14px;
		color: #000;
		border: 1px solid #ccc;
		margin-top: -1px;
		background-color: #fcfcfc;
	}
	.inp>span {
		display: inline-block;
		position: absolute;
	}
	.inp>span:first-child {
		right: 12px;
		top: 10px;
	}
	.inp>span:nth-child(2) {
		right: 12px;
		top: 56px;
	}
	.his {
		position: absolute;
		left: 0;
		top: 46px;
		width: 100%;
	}
	.his li {
		box-sizing: border-box;
		padding: 8px 16px;
		font-size: 14px;
		color: #999;
		border: 1px solid #ccc;
		margin-top: -1px;
		background-color: #fcfcfc;
	}
	.his li i {
		float: right;
		margin-top: -5px;
	}
	.loginBtn {
		display: block;
		background-color: #45f;
		height: 45px;
		text-align: center;
		color: white;
		font-size: 15px;
		line-height: 45px;
		border-radius: 4px;
		margin-top: 24px;
		margin-bottom: 16px;
	}
	.loginBtn:active {
		background-color: #56f;
	}
	.problem a {
		font-size: 12px;
		color: #666;
	}
	.three {
		position: absolute;
		bottom: 30px;
		text-align: center;
		width: 100%;
	}
	.three a {
		color: #666;
		font-size: 10px;
	}
</style>