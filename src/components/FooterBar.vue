<template>
	<ul id="footer">
		<li>
			<Badge>
				<router-link to="/index/tj" v-bind:class="{active:/^\/index/.test($route.path)}">
					<Icon size="32" type="home" v-bind:color="/^\/index/.test($route.path)?'#39f':'#aaa'"></Icon>
					<p>{{ footerList[0].text }}</p>
				</router-link>

			</Badge>
		</li>
	    <li>
	    	<Badge>
	    		<router-link to="/jinba" v-bind:class="{active:$route.path===footerList[1].path}">
	    			<Icon size="32" type="log-in" v-bind:color="$route.path===footerList[1].path?'#39f':'#aaa'"></Icon>
	    			<p>{{ footerList[1].text }}</p>
	    		</router-link>
	    	</Badge>
	    </li>
	    <li>
		    <Badge dot>
		    	<router-link to="/shipin" v-bind:class="{active:$route.path===footerList[2].path}">
		    		<Icon size="32" type="videocamera" v-bind:color="$route.path===footerList[2].path?'#39f':'#aaa'"></Icon>
		    		<p>{{ footerList[2].text }}</p>
		    	</router-link>
		    </Badge>
	    </li>
	    <li>
	    	<Badge dot>
	    		<router-link to="/xiaoxi" v-bind:class="{active:$route.path===footerList[3].path}">
	    			<Icon size="32" type="chatbubble-working" v-bind:color="$route.path===footerList[3].path?'#39f':'#aaa'"></Icon>
	    				<p>{{ footerList[3].text }}</p>
	    		</router-link>
	    	</Badge>
	    </li>
	    <li>
	    	<Badge dot>
	    		<router-link to="/wode" v-bind:class="{active:$route.path===footerList[4].path}">
	    			<Icon size="32" type="person" v-bind:color="$route.path===footerList[4].path?'#39f':'#aaa'"></Icon>
	    			<p>{{ footerList[4].text }}</p>
	    		</router-link>
	    	</Badge>
	    </li>
	</ul>
</template>
<script>
    export default {
		data: function(){
			return {
				footerList: [{
					path: '/index',
					text: '首页'
				},{
					path: '/jinba',
					text: '进吧'
				},{
					path: '/shipin',
					text: '视频'
				},{
					path: '/xiaoxi',
					text: '消息'
				},{
					path: '/wode',
					text: '我的'
				}]
			}
		},
	}
</script>
<Icon type="videocamera"></Icon>
<style scoped>
	#footer {
		display: flex;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 8px 0 5px;
		background-color: white;
		border-top: 1px solid #ccc;
	}
	#footer li i {
		text-shadow: #000 1px 1px 1px;
	}
	#footer li {
		flex: 1;
	}
	#footer a {
		color: #aaa;
	}
	#footer .active {
		color: #39f;
	}
</style>