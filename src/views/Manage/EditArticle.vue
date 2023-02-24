<template>
	<div class="container">
		<a-page-header
			style="border: 1px solid rgb(235, 237, 240)"
			title="返回"
			@back="backClick"
		>
			<template #extra>
				<a-select
					ref="select"
					v-model:value="record.category"
					style="width: 120px"
				>
					<a-select-option value="生活记录">生活记录</a-select-option>
					<a-select-option value="学习记录">学习记录</a-select-option>
				</a-select>

				<a-upload
					v-model:file-list="fileList"
					list-type="picture"
					class="upload-list-inline"
					:before-upload="beforeUpload"
				>
					<a-button>
						<upload-outlined></upload-outlined>
						Select File
					</a-button>
				</a-upload>
			</template>
		</a-page-header>
		<a-input
			v-model:value="record.title"
			allowClear
			required
			style="margin: 30px 0"
			prefix="标题"
		/>
		<a-input
			v-model:value="record.description"
			allowClear
			required
			style="margin: 30px 0"
			prefix="描述"
		/>
		<div class="img-container" v-if="isEdit">
			<img :src="image" alt="" style="height: 100%" />
		</div>

		<div class="content-container">
			<a-textarea
				v-model:value="record.content"
				placeholder="内容"
				:auto-size="{ minRows: 10, maxRows: 60000 }"
				showCount
				style="width: 47%"
			/>
			<div class="preview">
				<preview :value="record.content" />
			</div>
		</div>

		<div class="btn-container">
			<a-button @click="save">发布</a-button>
		</div>
	</div>
</template>

<script>
import { UploadOutlined } from '@ant-design/icons-vue'
import { computed, getCurrentInstance, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import qs from 'qs'
import { message } from 'ant-design-vue'
import Preview from '@/components/Preview.vue'
import localCache from '@/utils/cache'
import service from '@/service'
import { useStore } from 'vuex'
// import { cloneDeep } from 'lodash-es'
export default {
	name: 'editName',
	components: {
		UploadOutlined,
		Preview
	},
	setup() {
		const store = useStore()
		const token = localCache.getCache('token')
		const currentArticle = computed(() => store.state.info.currentArticle)
		// const editableData = reactive({})
		const route = useRoute()
		const router = useRouter()
		const { proxy } = getCurrentInstance()
		const id = ref(route.params.id)
		const isEdit = id.value ? true : false
		const record = reactive({
			title: '',
			content: '',
			image: '',
			category: '学习记录',
			description: ''
		})
		const fileList = ref([])
		// const htmlValue = marked(codeValue);
		if (isEdit) {
			// store.dispatch('info/getCurrentArticleByIdAction' , { id: id.value })
			// editableData[id] = cloneDeep(currentArticle.value)
			// console.log(editableData)
			service.get('/record/getArticleById/' + id.value).then((response) => {
				console.log(response)
				// record = response.data
				record.title = response.data[0].title
				record.content = response.data[0].content
				record.category = response.data[0].category
				record.image = response.data[0].image
				record.description = response.data[0].description
			})
		}
		const save = () => {
			const type = record.category === '学习记录' ? 1 : 2
			const formData = new FormData()
			if (isEdit) {
				service
					.post(
						'/auth/updateArticle',
						qs.stringify({
							id: id.value,
							content: record.content,
							title: record.title,
							category: record.category,
							type: type,
							description: record.description
						}),
						{ headers: { Authorization: ` ${token}` } }
					)
					.then((response) => {
						console.log(response)
						if (response.status === 0) {
							message.success('保存成功啦！')
						}
					})
				if (fileList.value.length !== 0) {
					console.log(fileList)
					formData.append('pic', fileList.value[0].originFileObj)
					formData.append('id', id.value)
					console.log(formData)
					service
						.post('/uploadImg', formData, {
							headers: { Authorization: ` ${token}` }
						})
						.then((response) => {
							// fileList.value = ""
							console.log(response.data)
							if (response.status === 0) {
								message.success('上传成功')
							} else {
								message.error(response.data.message)
							}
						})
						.catch(() => {
							message.error('上传失败')
						})
				}
			} else {
				if (fileList.value.length !== 0) {
					proxy.axios
						.post(
							'/auth/addArticle',
							qs.stringify({
								content: record.content,
								title: record.title,
								category: record.category,
								type: type,
								description: record.description
							}),
							{ headers: { Authorization: ` ${token}` } }
						)
						.then((response) => {
							// console.log(response)
							// if(response.data.code === 200) visible.value =true
							console.log(response)
							formData.append('pic', fileList.value[0].originFileObj)
							id.value = response.data.id
							formData.set('id', id.value)
							proxy.axios
								.post('/uploadImg', formData, {
									headers: { Authorization: ` ${token}` }
								})
								.then((response) => {
									//  fileList.value = []
									console.log(response)
									if (response.data.status === 0) {
										message.success('上传成功')
									} else {
										message.error(response.data.message)
									}
								})
						})
				} else {
					message.error('请给我一张封面吧T T')
				}
			}
		}

		const backClick = () => {
			router.go(-1)
		}
		const beforeUpload = (file) => {
			fileList.value = [...fileList.value, file]
			console.log(fileList.value)
			return false
		}
		const handleChange = (value) => {
			this.codeValue = value
		}
		return {
			currentArticle,
			save,
			backClick,
			fileList,
			beforeUpload,
			handleChange,
			record
		}
	}
}
</script>

<style scoped>
.container {
	padding: 60px;
}
.btn-container {
	margin-top: 20px;
}
.img-container {
	height: 200px;
}
.content-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.preview {
	width: 50%;
}
</style>
