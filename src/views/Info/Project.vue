<template>
	<a-layout class="container">
		<div class="button-57" v-for="item of data.list" :key="item.id">
			<a :href="item.link">
				<img :src="item.image" style="border-radius: 20px" class="img-item" />
			</a>
			<span
				><LinkOutlined />
				<a :href="item.link" style="color: black">{{ item.title }}</a>
			</span>
		</div>
	</a-layout>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { LinkOutlined } from '@ant-design/icons-vue'
export default {
	name: 'ProjectName',
	setup() {
		const data = reactive({})
		data.list = [
			{
				id: 0,
				title: 'Vue2+JS+bootstrap官网展示',
				link: 'https://machao.group',
				image:
					'https://zplus-blog-1305209635.cos.ap-nanjing.myqcloud.com/img/MaLab.png'
			}
		]
		return {
			data
		}
	},
	components: { LinkOutlined }
}
</script>

<style scoped>
.project-container {
	background-color: transparent;
	border-radius: 20px;
	margin: 10px;
	height: 100%;
}
.img-item {
	/* height: 250px; */
	width: 80%;
	overflow: hidden;
}

/* CSS */
.button-57 {
	position: relative;
	overflow: hidden;
	color: #18181a;
	display: inline-block;
	font-size: 15px;
	line-height: 15px;
	padding: 18px 18px 17px;
	text-decoration: none;
	cursor: pointer;
	background: transparent;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.button-57 span:first-child {
	position: relative;
	transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
	z-index: 10;
}

.button-57 span:last-child {
	color: white;
	display: block;
	position: absolute;
	bottom: 0;
	transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
	z-index: 100;
	opacity: 0;
	top: 50%;
	left: 50%;
	transform: translateY(225%) translateX(-50%);
	height: 14px;
	line-height: 13px;
}

.button-57:after {
	content: '';
	position: absolute;
	bottom: -50%;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ffffff5b;
	transform-origin: bottom center;
	transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
	transform: skewY(9.3deg) scaleY(0);
}

.button-57:hover:after {
	transform-origin: bottom center;
	transform: skewY(9.3deg) scaleY(2);
}

.button-57:hover span:last-child {
	transform: translateX(-50%) translateY(-100%);
	opacity: 1;
	transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}
</style>
