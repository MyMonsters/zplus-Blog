<template>
	<a-layout class="container">
		<!-- <Sider :width="collapse ? '0px' : '210px'" />
			<Content :type="1" />
			<todos :width="collapse ? '0px' : '210px'" /> -->
		<img src="@/assets/img/svg.svg" />
	</a-layout>
</template>

<script>
// import Content from '@/components/Content.vue'
import Sider from '@/components/Sider.vue'
import { ref } from '@vue/reactivity'
import Todos from '@/components/Todos.vue'
export default {
	name: 'HomeName',
	components: { Sider, Todos },
	setup() {
		const broken = ref(false)
		return {
			broken
		}
	}
}
</script>

<style scoped>
.container {
	/* background-color: #f0f2f5; */
	width: 100%;
	min-height: 700px;
	height: 100%;
}

.profile {
	height: 128px;
	width: 128px;
	border-radius: 40px;
	margin-top: 20px;
}

/* .siderContainer {
    height: 1000px;
    background-color: beige;
    margin: 10px;
    border-radius: 20px;
  } */
.introContainer {
	margin: 20px;
}

.contentContainer {
	margin: 10px;
	height: 1000px;
}
</style>
