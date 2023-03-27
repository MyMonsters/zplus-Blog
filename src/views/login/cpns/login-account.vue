<template>
	<div class="login-account">
		<a-form :rules="rules" :model="account" ref="formRef">
			<a-form-item label="账号：" prop="name">
				<a-input v-model="account.name" />
			</a-form-item>
			<a-form-item label="密码：" prop="password">
				<a-input v-model="account.password" show-password />
			</a-form-item>
		</a-form>
	</div>
</template>

<script>
// import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import localCache from '@/utils/cache'
import { rules } from '../config/account-config'
import { useStore } from 'vuex'
export default defineComponent({
	name: 'accountName',
	setup() {
		const store = useStore()
		const account = reactive({
			name: localCache.getCache('name') ?? '',
			password: localCache.getCache('password' ?? '')
		})
		const loginAction = (isKeepPassword) => {
			console.log('正在进行登录')
			formRef.value?.validate((valid) => {
				console.log(valid)
				if (valid) {
					console.log('登录成功！')
					if (isKeepPassword) {
						localCache.setCache('name', account.name)
						localCache.setCache('password', account.password)
						store.dispatch('login/accountLoginAction', { ...account })
					} else {
						localCache.deleteCache('name')
						localCache.deleteCache('password')
					}
				}
			})
		}
		const formRef = ref()
		return {
			account,
			rules,
			loginAction,
			formRef
		}
	}
})
</script>

<style scoped></style>
