<template>
	<div id="app">
		<router-view></router-view>
		<load-mask></load-mask>
	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>
<style>
#app {
	font-family: 'Arial','Microsoft Yahei';
	text-shadow: #ddd 1px 1px 1px;
}
</style>
