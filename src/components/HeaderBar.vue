<template>
	<div id="header">贴
		<router-link to="/search" v-if="$store.state.loginMark">
			<div><Icon size="32" type="ios-search" color="#666"></Icon></div>
		</router-link>
		<router-link to="/game" v-if="$store.state.loginMark">
			<div><Badge dot><Icon size="32" type="ios-game-controller-b-outline" color="#666"></Icon></Badge></div>
		</router-link>
		<router-link to="/login" class="log" v-if="!$store.state.loginMark">
			登录
		</router-link>
		<router-link to="/reg" class="reg" v-if="!$store.state.loginMark">
			注册
		</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		computed: {
			
		},
		watch:{
			
		}
	}
</script>

<style scoped>
	#header {
		font-size: 32px;
		text-align: center;
		font-family: "Microsoft Yahei";
		color: #39f;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: white;
		padding-top: 16px;
		z-index: 10;
	}
	#header a:first-child div{
		position: absolute;
		right: 16px;
		bottom: -3px;
	}
	#header a:last-child div{
		position: absolute;
		right: 68px;
		bottom: 0;
	}
	.log {
		color: #666;
		font-size: 14px;
		position: absolute;
		right: 16px;
		bottom: 4px;
	}
	.reg {
		color: #666;
		font-size: 14px;
		position: absolute;
		left: 16px;
		bottom: 4px;
	}
</style>