<template>
	<div
		class="list-container"
		v-for="item in list"
		:key="item.id"
		style="width: 340px"
	>
		<router-link
			:to="`/main/articleDetail/${item.id}`"
			style="height: 100%; width: 100%"
		>
			<a-card hoverable class="item-container">
				<!-- <img :src="item.image" style="width: 100%; height: 200px" /> -->
				<template #cover>
					<img
						alt="example"
						:src="item.image"
						style="height: 200px; padding: 20px"
					/>
				</template>
				<div class="tag-container">
					<a-tag color="green">{{ item.time }}</a-tag>
					<a-tag color="green">{{ item.category }}</a-tag>
				</div>
				<!-- <div class="img-container">
						<img style="width: 60%; height: 30%" :src="item.image" alt="" />
					</div> -->

				<!-- <div class="list-title"> -->
				<!-- <a-typography-paragraph
						:ellipsis="ellipsis ? { rows: 2 } : false"
						:content="item.title"
						style="text-align: left; font-size: 20px"
						:alt="item.title"
					/> -->
				<a-tooltip color="#44BBA3" placement="rightBottom">
					<template #title>{{ item.title }}</template>
					<a-card-meta :title="item.title" style="margin-bottom: 10px">
					</a-card-meta>
				</a-tooltip>

				<!-- </div> -->
				<a-typography-paragraph
					:ellipsis="ellipsis ? { rows: 3 } : false"
					:content="item.description"
					style="text-align: left"
					class="article-description"
				/>
			</a-card>
		</router-link>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
	name: 'cardName',
	props: {
		list: {
			type: Object,
			required: true
		}
	},
	setup() {
		const ellipsis = ref(true)
		return {
			ellipsis
		}
	}
}
</script>

<style scoped>
.item-container {
	color: #155853;
	/* background-color: rgba(131, 216, 144, 0.212); */
	border-radius: 20px;
	height: 100%;
	width: 100%;
	align-content: space-around;
}
.list-container {
	display: flex;
	flex-direction: column;
	background-color: beige;
	border-radius: 20px;
	margin-bottom: 20px;
	align-content: stretch;
	flex-wrap: wrap;
}
.list-title {
	font-size: 24px;
	color: rgb(8, 1, 79);
	margin-top: 10px;
}
.img-container {
	padding: 0 10%;
}
.sider-container {
	background-color: white;
	border-radius: 20px;
	margin: 10px;
	width: 25%;
	text-align: left;
}

.tag-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px;
}
.ant-card-body {
	height: 100%;
}
.article-description {
	font-size: 12px;
}
</style>
