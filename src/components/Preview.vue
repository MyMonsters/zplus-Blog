<template>
	<div class="preview-container" v-html="markdownString"></div>
</template>

<script>
import { onMounted, watch, ref } from '@vue/runtime-core'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/gradient-dark.css'
export default {
	name: 'PreviewName',
	props: ['value'],
	setup(props) {
		const markdownString = ref('')
		onMounted(() => {
			marked.setOptions({
				renderer: new marked.Renderer(),
				highlight: function (code) {
					// const language = hljs.getLanguage(lang) ? lang : 'plainText'
					// console.log(language)
					// return hljs.highlight(code, { language }).value
					// alert('fdfd')
					return hljs.highlightAuto(code).value
				},
				langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
				pedantic: false,
				gfm: true,
				breaks: false,
				sanitize: false,
				smartypants: false,
				xhtml: false
			})
			// document.getElementsByClassName('preview-container')[0].innerHTML =
			// 	marked.parse(props.value)
			markdownString.value = marked.parse(props.value)
		})
		watch(props, () => {
			document.getElementsByClassName('preview-container')[0].innerHTML =
				markdownString.value = marked.parse(props.value)
		})
		return {
			markdownString
		}
	}
}
</script>

<style scoped>
.preview-container {
	width: 100%;
	text-align: left;
	padding: 0 0;
	/* font-size: 0.7em; */
}
.preview-container blockquote {
	background-color: rgba(141, 157, 152, 0.989);
}
</style>
