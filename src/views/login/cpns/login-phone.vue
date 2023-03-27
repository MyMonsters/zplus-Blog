<template>
	<div class="login-account">
		<a-form :rules="rules" :model="phone" ref="formRef">
			<a-form-item label="手机号：" prop="number">
				<a-input v-model="phone.number" />
			</a-form-item>
			<a-form-item label="验证码：" prop="verifycode">
				<div class="get-code">
					<a-input v-model="phone.verifycode" show-password />
					<a-button type="primary" class="codebutton">获取验证码</a-button>
				</div>
			</a-form-item>
			<!-- <el-button type="primary">立即登录</el-button> -->
		</a-form>
	</div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
// import { ElForm } from 'element-plus/lib/components'
export default defineComponent({
	name: 'phoneName',
	setup() {
		const phone = reactive({
			number: '',
			verifycode: ''
		})
		const rules = {
			number: [
				{ required: true, message: '手机号是必传内容', trigger: 'blur' },
				{ pattern: /^[a-z0-9]{5,10}$/, message: '用户名必须是5-10个数字' }
			],
			verifycode: [
				{ required: true, message: '验证码是必传内容', trigger: 'blur' },
				{ pattern: /^[a-z0-9]{5,10}$/, message: '密码必须是5-10个数字' }
			]
		}
		const formRef = ref()
		const loginAction = (isKeepPassword) => {
			console.log('正在进行登录')
			formRef.value?.validate((valid) => {
				if (valid) {
					if (isKeepPassword) {
						//缓存
					}
				}
			})
		}
		return {
			phone,
			rules,
			loginAction
		}
	}
})
</script>

<style scoped>
.get-code {
	display: flex;
}
.codebutton {
	margin-left: 10px;
}
</style>
