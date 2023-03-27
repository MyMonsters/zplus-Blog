<template>
	<a-layout-content class="contentContainer">
		<card :list="articleList.list" />
	</a-layout-content>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import card from '@/base-ui/card'
import service from '@/service'
export default {
	components: { card },
	name: 'articleName',
	setup() {
		let articleList = reactive([])

		service.get('/record/getArticles/' + 1).then(function (response) {
			articleList.list = response.data.reverse()
		})

		return {
			articleList
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
