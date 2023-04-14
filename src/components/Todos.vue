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
	background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
	margin: 10px;
	border-radius: 20px;
	text-align: left;
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.todoTitle {
	margin: 10px 0;
	text-align: center;
}
</style>
