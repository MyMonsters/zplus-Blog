<template>
	<div>
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	components: { Header },
	name: 'AuthName',
	setup() {
		// store.dispatch('getArticleList')
		return {}
	}
})
</script>

<style scoped></style>
