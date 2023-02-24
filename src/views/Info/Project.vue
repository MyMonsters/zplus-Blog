<template>
	<a-layout class="container">
		<div class="project-container" v-for="item of data.list" :key="item.id">
			<figure class="snip1477 project-item">
				<img :src="item.image" style="border-radius: 20px" class="img-item" />
				<div class="title"></div>
				<figcaption>
					<p>
						{{ item.title }}
					</p>
				</figcaption>
				<a :href="item.link"></a>
			</figure>
			<!-- <figure class="project-item imghvr-zoom-out-flip-horiz">
				<div class="img-container">
					<img :src="item.image" style="height: 100%; width: 100%" />
				</div>
				<figcaption>
					<div class="content-container">
						<h2>
							<a :href="item.link" target="_blank" style="color: dodgerblue">{{
								item.title
							}}</a>
						</h2>
					</div>
				</figcaption>
			</figure> -->
		</div>
	</a-layout>
</template>

<script>
import { reactive } from '@vue/reactivity'
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
	}
}
</script>

<style scoped>
.project-container {
	background-color: white;
	border-radius: 20px;
	margin: 10px;
	height: 100%;
}
.img-item {
	height: 300px;
	overflow: hidden;
}
.project-item {
	/* display: flex;
	justify-content: stretch;
	flex-direction: column; */
	/* background-color: rgba(217, 223, 165, 0.221); */
	/* padding: 20px; */
	border-radius: 20px;
	width: 45%;
	height: 250px;
	width: 60%;

	/* box-shadow: 5px 5px 10px rgba(133, 138, 118, 0.594);
	margin: 10px;*/

	/* height: 300px; */
}
.project-item:hover {
	cursor: pointer;
}
.img-container {
	width: 100%;
}
.content-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

figure.snip1477 {
	font-family: 'Raleway', Arial, sans-serif;
	position: relative;
	overflow: hidden;
	margin: auto;
	/* min-width: 230px;
	max-width: 315px; */
	width: 60%;
	color: #000000;
	text-align: center;
	font-size: 20px;
	background-color: #ffffff;
}
figure.snip1477 *,
figure.snip1477 *:before,
figure.snip1477 *:after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.55s ease;
	transition: all 0.55s ease;
}
figure.snip1477 img {
	max-width: 100%;
	backface-visibility: hidden;
	vertical-align: top;
	opacity: 0.9;
}
figure.snip1477 .title {
	position: absolute;
	top: 58%;
	left: 25px;
	padding: 5px 10px 10px;
}
figure.snip1477 .title:before,
figure.snip1477 .title:after {
	height: 2px;
	width: 400px;
	position: absolute;
	content: '';
	background-color: #ffffff;
}
figure.snip1477 .title:before {
	top: 0;
	left: 10px;
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
}
figure.snip1477 .title:after {
	bottom: 0;
	right: 10px;
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
}
figure.snip1477 .title div:before,
figure.snip1477 .title div:after {
	width: 2px;
	height: 300px;
	position: absolute;
	content: '';
	background-color: #ffffff;
}
figure.snip1477 .title div:before {
	top: 10px;
	right: 0;
	-webkit-transform: translateY(100%);
	transform: translateY(100%);
}
figure.snip1477 .title div:after {
	bottom: 10px;
	left: 0;
	-webkit-transform: translateY(-100%);
	transform: translateY(-100%);
}
figure.snip1477 h2,
figure.snip1477 h4 {
	margin: 0;
	text-transform: uppercase;
}
figure.snip1477 h2 {
	font-weight: 400;
}
figure.snip1477 h4 {
	display: block;
	font-weight: 700;
	background-color: #ffffff;
	padding: 5px 10px;
	color: #000000;
}
figure.snip1477 figcaption {
	position: absolute;
	bottom: 42%;
	left: 25px;
	text-align: left;
	opacity: 0;
	padding: 5px 60px 5px 10px;
	font-size: 0.8em;
	font-weight: 500;
	letter-spacing: 1.5px;
}
figure.snip1477 figcaption p {
	margin: 0;
}
figure.snip1477 a {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
figure.snip1477:hover img,
figure.snip1477.hover img {
	zoom: 1;
	filter: alpha(opacity=35);
	-webkit-opacity: 0.35;
	opacity: 0.35;
}
figure.snip1477:hover .title:before,
figure.snip1477.hover .title:before,
figure.snip1477:hover .title:after,
figure.snip1477.hover .title:after,
figure.snip1477:hover .title div:before,
figure.snip1477.hover .title div:before,
figure.snip1477:hover .title div:after,
figure.snip1477.hover .title div:after {
	-webkit-transform: translate(0, 0);
	transform: translate(0, 0);
}
figure.snip1477:hover .title:before,
figure.snip1477.hover .title:before,
figure.snip1477:hover .title:after,
figure.snip1477.hover .title:after {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
}
figure.snip1477:hover figcaption,
figure.snip1477.hover figcaption {
	opacity: 1;
	-webkit-transition-delay: 0.2s;
	transition-delay: 0.2s;
}
</style>
