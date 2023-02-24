<template>
	<div class="operate-timeline-wrapper">
		<a-button class="editable-add-btn" style="margin: 8px 0" @click="handleAdd"
			>Add</a-button
		>
		<a-table :columns="columns" :data-source="timeline">
			<template #headerCell="{ column }">
				<template v-if="column.key === 'title'">
					<span>
						<smile-outlined />
						Title
					</span>
				</template>
			</template>

			<template #bodyCell="{ column, text, record }">
				<template v-if="column.key === 'action'">
					<span v-if="editableData[record.id]">
						<a-typography-link @click="save(record.id)">保存</a-typography-link>

						<a @click="cancel(record.id)">取消</a>
					</span>
					<span v-else>
						<a @click="(e) => edit(record.id)">编辑</a>
						<a-divider type="vertical" />
						<a @click="(e) => removeTimeline(record.id)">删除</a>
					</span>
				</template>
				<template v-else>
					<a-input
						v-if="editableData[record.id]"
						v-model:value="editableData[record.id][column.dataIndex]"
					/>
					<span v-else>
						{{ text }}
					</span>
				</template>
			</template>
		</a-table>
	</div>
</template>

<script>
import { computed, defineComponent, reactive } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { cloneDeep } from 'lodash-es'
const columns = [
	{ name: 'Title', dataIndex: 'title', key: 'title' },
	{ title: 'Time', dataIndex: 'time', key: 'time' },
	{ title: 'Color', dataIndex: 'color', key: 'color' },
	{ title: 'Action', key: 'action' }
]

export default defineComponent({
	name: 'operateTimelineName',
	components: {
		SmileOutlined
	},
	setup() {
		const store = useStore()
		const timeline = computed(() => store.state.info.timeline)
		const editableData = reactive({})
		const edit = (id) => {
			editableData[id] = cloneDeep(
				timeline.value.filter((item) => id === item.id)[0]
			)
		}
		const handleAdd = () => {
			const info = {
				title: 'title',
				color: 'color',
				time: 'time'
			}
			store.dispatch('info/addTimelineAction', { info })
		}
		const save = (id) => {
			const info = editableData[id]
			store.dispatch('info/updateTimelineAction', { info })
			delete editableData[id]
		}
		const cancel = (key) => {
			delete editableData[key]
		}
		const removeTimeline = (id) => {
			store.dispatch('info/removeTimelineAction', { id })
		}
		return {
			timeline,
			columns,
			edit,
			save,
			cancel,
			removeTimeline,
			editableData,
			handleAdd
		}
	}
})
</script>

<style scoped>
.operate-timeline-wrapper {
	height: 100%;
	background-color: white;
	border-radius: 20px;
}
.ant-typography {
	margin: 0 3px;
}
</style>
