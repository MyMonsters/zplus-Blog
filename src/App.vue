<template>
	<div id="app">
		<!-- <Header /> -->
		<router-view></router-view>
	</div>
</template>

<script>
// import Header from './components/Header.vue'
export default {
	name: 'AppName'
	// components: { Header }
}
</script>

<style>
#app {
	/* font-family: Avenir, Helvetica, Arial, sans-serif; */
	font-family: Roboto, Noto Serif SC, -apple-system, SF UI Text, Arial,
		PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei,
		sans-serif, Menlo, Monaco, monospace, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #155853;
	white-space: pre-wrap;
}

#app {
	cursor: url('./assets/img/cursor.png'), pointer;
}
</style>
