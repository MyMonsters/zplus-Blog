<template>
	<a-layout class="detail-container">
		<div class="artical-detail">
			<a-card
				hoverable
				class="item-container"
				v-for="item in recordDetail.list"
				:key="item.id"
			>
				<div class="flexContainer">
					<a-tag color="green">{{ item.category }}</a-tag>
					<a-tag color="green">{{ item.time }}</a-tag>
				</div>

				<h1 class="list-title">
					{{ item.title }}
				</h1>
				<div class="img-container">
					<img style="width: 100%" :src="item.image" />
				</div>
				<!-- <div class="content-container">
        {{item.content}}
      </div> -->
				<div class="description">
					{{ item.description }}
				</div>
				<div class="content-container">
					<preview :value="item.content" />
				</div>
			</a-card>
		</div>
	</a-layout>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import preview from '@/components/Preview.vue'
import service from '@/service'
export default {
	name: 'recordItemName',
	components: {
		preview
	},
	setup() {
		const route = useRoute()
		const id = route.params.id
		const recordDetail = reactive({})
		service.get('/record/getArticleById/' + id).then((response) => {
			recordDetail.list = response.data
		})
		return {
			recordDetail
		}
	}
}
</script>

<style scoped>
.content-container {
	font-size: large;
	text-align: left;
	padding: 50px 0;
}
.item-container {
	border-radius: 20px;
}
.flexContainer {
	margin: 20px;
}
.img-container {
	/* width: 100%; */
	padding: 0 10%;
}
.artical-detail {
	background-color: white;
	margin: 10px;
	border-radius: 20px;
}
</style>
