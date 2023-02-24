<template>
	<div class="operateArtical">
		<a-row justify="start">
			<div class="sendRecord-btn">
				<a-button type="primary" @click="sendNew">发新文章</a-button>
			</div>
		</a-row>

		<a-list
			hoverble
			item-layout="vertical"
			size="large"
			:pagination="pagination"
			:data-source="articles"
			class="item-container"
		>
			<template #renderItem="{ item }">
				<a-list-item key="item.id">
					<template #extra>
						<img width="272" alt="logo" :src="item.image" />
					</template>

					<a-list-item-meta>
						<template #title>
							<router-link :to="`/main/articleDetail/${item.id}`">{{
								item.title
							}}</router-link>
							<!-- <a @click="toRecord"></a> -->
						</template>
					</a-list-item-meta>
					<a-typography-paragraph
						:ellipsis="ellipsis ? { rows: 3 } : false"
						:content="item.description"
						style="text-align: left"
					/>
					<div>
						<a-button type="link" @click="editRecord(item.id)">编辑</a-button>

						<a-popconfirm
							title="确认删除该条记录？"
							ok-text="是"
							cancel-text="否"
							@confirm="removeRecord(item.id)"
						>
							<a-button type="link">删除</a-button>
						</a-popconfirm>
					</div>
					<div class="tag-container">
						<a-tag color="#87d068">{{ item.time }}</a-tag>
						<a-tag color="#87d068">{{ item.category }}</a-tag>
					</div>
				</a-list-item>
			</template>
		</a-list>
	</div>
</template>
<script>
// import qs from 'qs'
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { message } from 'ant-design-vue'
// import service from '@/service'
import { useStore } from 'vuex'

//   const listData = [];

//   for (let i = 0; i < 23; i++) {
//     listData.push({
//       href: 'https://www.antdv.com/',
//       title: `ant design vue part ${i}`,
//       avatar: 'https://joeschmoe.io/api/v1/random',
//       description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//       content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
//   }

export default defineComponent({
	setup() {
		const store = useStore()
		const router = useRouter()

		const articles = computed(() => store.state.login.articles)

		// store.dispatch('getArticleList')
		// console.log(store.state.articles)
		// listData.list = store.state.articles

		const pagination = {
			onChange: (page) => {
				console.log(page)
			},
			pageSize: 6
		}
		const editRecord = (id) => {
			router.push('/authMain/operateContent/editArticle/' + id)
		}

		// const removeRecord = (id) => {
		// 	service
		// 		.post('/auth/removeArticle', qs.stringify({ id: id }), {
		// 			headers: { Authorization: ` ${token}` }
		// 		})
		// 		.then((response) => {
		// 			console.log(response)
		// 			if (response.data.status === 0) {
		// 				message.success('删除成功！')
		// 				listData.list = listData.list.filter((item) => item.id !== id)
		// 			}
		// 		})
		// }
		const sendNew = () => {
			router.push('/authMain/operateContent/editArticle')
		}
		return {
			articles,
			pagination,
			ellipsis: ref(true),
			editRecord,
			// removeRecord,
			sendNew
		}
	}
})
</script>
<style scoped>
.sendRecord-btn {
	margin: 20px;
}

.tag-container {
	/* padding: 0 50px; */
	text-align: left;
}
.operateArtical {
	background-color: white;
	padding: 0px 30px;
	border-radius: 20px;
}
.item-container {
	/* background-color: white; */
	border-radius: 20px;
}
</style>
