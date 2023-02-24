<template>
	<a-layout-sider class="todos">
		<h2 class="todoTitle">Todos</h2>

		<div v-for="item in todoList" :key="item.id" style="margin: 10px">
			<a-col :span="24">
				<a-checkbox
					v-if="item.isdone"
					v-model:checked="item.isdone"
					:value="item.id"
					disabled
					><a-typography-text delete>{{
						item.title
					}}</a-typography-text></a-checkbox
				>
				<a-checkbox
					v-else
					v-model:checked="item.isdone"
					:value="item.id"
					disabled
					>{{ item.title }}</a-checkbox
				>
			</a-col>
		</div>
	</a-layout-sider>
</template>

<script>
import { computed } from 'vue'
// import service from '@/service'
import { useStore } from 'vuex'
export default {
	name: 'TodoName',
	setup() {
		const store = useStore()
		const todoList = computed(() => store.state.info.todolist)
		return {
			todoList
		}
	}
}
</script>

<style scoped>
/* .container {
  background-color: azure;
} */
.todos {
	background-color: white;
	margin: 10px;
	border-radius: 20px;
	text-align: center;
	width: 100%;
}
.todoTitle {
	margin: 10px 0;
}
</style>
