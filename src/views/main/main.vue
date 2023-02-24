<template>
	<div>
		<Header @foldChange="handleFoldChange" />
		<a-layout class="container">
			<Sider :width="isCollapse ? 0 : 210" />
			<!-- <Content :type="1" /> -->
			<router-view></router-view>
			<todos :width="isCollapse ? 0 : 200" />
		</a-layout>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
import Todos from '@/components/Todos.vue'
// import Content from '@/components/Content.vue'
const { defineComponent, ref } = require('@vue/runtime-core')

export default defineComponent({
	components: { Header, Sider, Todos },
	name: 'mainName',
	setup() {
		const isCollapse = ref(false)
		const handleFoldChange = (isFold) => {
			isCollapse.value = isFold
		}
		return {
			isCollapse,
			handleFoldChange
		}
	}
})
</script>

<style scoped></style>
