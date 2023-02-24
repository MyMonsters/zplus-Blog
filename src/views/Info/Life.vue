<template>
	<a-layout-content class="contentContainer">
		<card :list="articleList.list" />
	</a-layout-content>
</template>

<script>
import { reactive, ref } from '@vue/runtime-core'
import card from '@/base-ui/card'
import service from '@/service'
export default {
	components: { card },
	name: 'lifeName',
	setup() {
		let articleList = reactive([])
		service.get('/record/getArticles/2').then(function (response) {
			console.log(response)
			articleList.list = response.data
		})

		const changeValue = (id, item) => {
			console.log(id, item)
		}
		const checked1 = ref(true)
		return {
			articleList,
			ellipsis: ref(true),
			checked1,
			changeValue
		}
	}
}
</script>

<style scoped>
.contentContainer {
	margin: 10px;
	width: 70%;
	padding: 0 2%;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
}
</style>
