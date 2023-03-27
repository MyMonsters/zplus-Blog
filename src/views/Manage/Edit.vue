<template>
	<div>
		<div style="flex: 1">
			<Editor />
		</div>
		<div style="margin-top: 20px; flex-shrink: 0">
			<a-button type="primary">提交</a-button>
		</div>
	</div>
</template>

<script setup>
import Editor from '@/components/Editor.vue'
</script>

<style lang="scss" scoped></style>
