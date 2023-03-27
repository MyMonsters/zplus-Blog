<template>
	<div class="timeline-wrapper">
		<a-timeline mode="alternate" pending="正在coding的路上">
			<a-timeline-item
				v-for="item of timeline.reverse()"
				:key="item.id"
				:label="item.time"
				:color="item.color"
				>{{ item.title }}</a-timeline-item
			>
		</a-timeline>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
	name: 'TimelineName',
	setup() {
		const store = useStore()
		const timeline = computed(() => store.state.info.timeline)

		return {
			timeline
		}
	},
	components: {}
}
</script>

<style>
.timeline-wrapper {
	background-color: white;
	padding-top: 20px;
	margin-top: 10px;
	width: 100%;
	border-radius: 20px;
}

.ant-timeline-item-tail {
	display: block;
	border-left: 2px dashed rgb(157, 157, 161);
	height: calc(100%-1px);
}
.ant-timeline-item-label {
	font-size: 20px;
	font-weight: bold;
}
.ant-timeline-item {
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
		'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	padding-bottom: 40px;
}
</style>
