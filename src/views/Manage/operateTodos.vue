<template>
	<div class="operateTodos">
		<a-row justify="start">
			<div class="sendRecord-btn">
				<a-button type="primary" @click="iscreate = true"
					>新建待办事项</a-button
				>
			</div>
		</a-row>
		<div class="createNewTodo" v-if="iscreate">
			<a-input
				v-model:value="todoValue"
				style="width: 70%"
				placeholder="请输入待办事项"
			/>
			<div class="btn-container">
				<a-button type="primary" @click="addNew">添加</a-button>
				<a-button type="primary" @click="iscreate = false">取消</a-button>
			</div>
		</div>
		<div v-for="item in todoList" :key="item.id">
			<a-col :span="24">
				<a-checkbox
					v-if="item.isdone"
					v-model:checked="item.isdone"
					:value="item.id"
					style="margin: 4px 0"
					disabled
					><a-typography-text delete>{{
						item.title
					}}</a-typography-text></a-checkbox
				>
				<a-checkbox
					v-else
					style="margin: 4px 0"
					v-model:checked="item.isdone"
					:value="item.id"
					@change="doneTodo(item.id)"
					>{{ item.title }}</a-checkbox
				>
				<a-button type="link" @click="removeTodo(item.id)">删除</a-button>
			</a-col>
		</div>
	</div>
</template>

<script>
import qs from 'qs'
import localCache from '@/utils/cache'
import { computed, defineComponent, ref } from 'vue'

import service from '@/service'
import { useStore } from 'vuex'
export default defineComponent({
	setup() {
		// proxy.axios.get('/record/getTodolist').then((response) => {
		// 	console.log(response)
		// })
		const store = useStore()
		const token = localCache.getCache('token')
		const todoList = computed(() => store.state.info.todolist)
		const doneTodo = (id) => {
			service
				.post('/auth/doneTodo', qs.stringify({ id: id }), {
					headers: { Authorization: ` ${token}` }
				})
				.then((res) => {
					console.log(res)
					if (res.data.status === 0) {
						const todo = todoList.value.filter((item) => {
							id === item.id
						})
						console.log('todo', todo)
						todo.isdone = 1
					}
				})
				.catch((err) => {
					console.error(err)
				})
		}
		const addNew = () => {
			iscreate.value = false
			store.dispatch('info/addTodolistAction', { title: todoValue.value })
		}
		const removeTodo = (id) => {
			store.dispatch('info/removeTodolistAction', { id })
		}
		const todoValue = ref(null)
		const iscreate = ref(false)

		return {
			todoList,
			doneTodo,
			addNew,
			iscreate,
			todoValue,
			removeTodo
		}
	}
})
</script>

<style scoped>
.operateTodos {
	background-color: white;
	min-height: 500px;
	border-radius: 20px;
	width: 100%;
}
.sendRecord-btn {
	margin: 20px;
}
.btn-container {
	display: flex;
	justify-content: space-around;
	padding: 20px 0;
}
</style>
