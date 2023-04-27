<template>
	<div class="login-panel">
		<h1 style="text-align: center">后台管理系统</h1>
		<a-tabs
			type="border-card"
			v-model:activeKey="activeName"
			class="demo-tabs"
			stretch
		>
			<a-tab-pane key="account">
				<template #tab>
					<span class="custom-tabs-label">
						<a-icon
							><User style="width: 1em; height: 1em; margin-right: 8px"
						/></a-icon>
						<span>账户登录</span>
					</span>
				</template>
				<login-account ref="accountRef" />
			</a-tab-pane>
			<a-tab-pane key="phone">
				<template #tab>
					<span class="custom-tabs-label">
						<a-icon><Iphone style="width: 1em; height: 1em" /></a-icon>
						<span>手机登录</span>
					</span>
				</template>
				<login-phone ref="phoneRef" />
			</a-tab-pane>
		</a-tabs>
		<div class="account-control">
			<a-checkbox v-model="isKeepPassword">记住密码</a-checkbox>
			<a>忘记密码</a>
		</div>
		<a-button type="primary" class="login-btn" @click="handleClick"
			>立即登录</a-button
		>
	</div>
</template>

<script>
import loginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { ref } from 'vue'
export default {
	components: { loginAccount, LoginPhone },
	name: 'panelName',
	setup() {
		const isKeepPassword = ref(true)
		const activeName = ref('account')
		const accountRef = ref()
		const phoneRef = ref()
		function handleClick() {
			console.log('立即登录')
			console.log(accountRef)
			if (activeName.value === 'account') {
				accountRef.value.loginAction(isKeepPassword.value)
			} else {
				phoneRef.value.loginAction(isKeepPassword.value)
			}
		}
		return {
			isKeepPassword,
			activeName,
			handleClick,
			phoneRef,
			accountRef
		}
	}
}
</script>

<style scoped>
/* .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
} */
/*.demo-tabs > .el-tabs__content {*/
.login-panel {
	width: 320px;
	margin-bottom: 180px;
}

.demo-tabs .el-tabs__content {
	padding: 32px;
	color: #6b778c;
	font-size: 32px;
	font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
	vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
	vertical-align: middle;
	margin-left: 4px;
}
.account-control {
	display: flex;
	justify-content: space-around;
}
.login-btn {
	margin-top: 20px;
	width: 100%;
}
</style>
