<template>
	<div class="operateContent">
		<a-layout>
			<a-layout-sider
				:width="200"
				breakpoint="lg"
				style="background-color: #f0f2f5"
				v-model:collapsed="collapsed"
				collapsible
				theme="light"
			>
				<!-- <operate-todos /> -->
				<Menu />
			</a-layout-sider>
			<a-layout-content style="margin-left: 30px">
				<!-- <operate-article /> -->
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Menu from './Menu.vue'
// import OperateArticle from './operateArticle.vue'
// import operateTodos from './operateTodos.vue'
export default {
	components: { Menu },
	setup() {
		return {
			collapsed: ref(false)
		}
	}
}
</script>

<style scoped>
.operateContent {
	padding: 20px 20px;
	background-color: #f0f2f5;
}
.ant-layout-sider-has-trigger {
	padding-bottom: 0;
}
</style>
