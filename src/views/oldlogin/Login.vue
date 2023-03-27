<template>
	<div class="login">
		<a-page-header
			style="border: 1px solid rgb(235, 237, 240); border-radius: 20px"
			title="返回"
			@back="backClick"
		>
		</a-page-header>
		<h2>登陆</h2>
		<form class="login_form">
			<span>账号：</span>
			<input
				type="text"
				v-model="account.username"
				placeholder="请输入账号"
				autocomplete
			/>
			<br />
			<span>密码：</span>
			<input
				type="password"
				v-model="account.password"
				placeholder="请输入密码"
				autocomplete
			/>
		</form>
		<!-- <a-form-model-item label="账号">
            <a-input v-model="username" placeholder="请输入账号" />
            </a-form-model-item>
            <a-form-model-item label="密码">
            <a-input v-model="password" placeholder="请输入密码" />
        </a-form-model-item> -->
		<div class="btn">
			<button class="login_btn" @click="login">
				登 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
			</button>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/store'
import localCache from '@/utils/cache'
import service from '@/service'
export default {
	name: 'LoginName',
	setup() {
		const account = reactive({
			username: localCache.getCache('name') ?? '',
			password: localCache.getCache('password') ?? ''
		})
		console.log(account)
		// const { proxy } = getCurrentInstance()
		const router = useRouter()
		if (
			localCache.getCache('token') !== undefined &&
			localCache.getCache('token') !== null
		) {
			service
				.get('/auth/testToken', {
					headers: { Authorization: ` ${localCache.getCache('token')}` }
				})
				.then((response) => {
					console.log(response)
					if (response.status === 0) {
						router.push('/authmain/operateContent')
					} else {
						localCache.deleteCache('token')
					}
				})
		}
		const login = () => {
			const info = { username: account.username, password: account.password }
			console.log(info)
			store.dispatch('login/accountLoginAction', { ...account })
			// proxy.axios
			// 	.post('/log/login', qs.stringify(info))
			// 	.then(function (response) {
			// 		console.log(response)
			// 		if (response.data.code === 200) {
			// 			localCache.setCache('token', response.data.token)
			// 			localCache.setCache('account', info)
			// 			// window.sessionStorage.setItem('token', response.data.token)
			// 			router.push('/sendRecord')
			// 		}
			// 	})
		}
		const backClick = () => {
			router.go(-1)
		}
		return {
			account,
			login,
			backClick
		}
	}
}
</script>

<style scoped>
body {
	padding: 0;
	margin: 0;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-image: linear-gradient(#a18cd1 0%, #fbc2eb 100%);
	background-size: cover;
	flex: 1;
	align-items: center;
}

.login {
	text-align: center;
	margin: 0 auto;
	width: 600px;
	height: 520px;
	background-color: rgba(145, 189, 216, 0.388);
	border-radius: 25px;
	box-shadow: 5px 2px 35px -7px #ff9a9e;
	margin-top: 20px;
}

.login h2 {
	margin-top: 40px;
	color: rgb(22, 11, 47);
	font-weight: 100;
}

.login_form {
	padding: 20px;
}

.login_form span {
	color: rgb(49, 139, 155);
	font-size: 18px;
	font-weight: 100;
}

.login_form input {
	background-color: transparent;
	width: 320px;
	padding: 2px;
	text-indent: 2px;
	color: rgba(29, 133, 165, 0.811);
	font-size: 18px;
	height: 45px;
	margin: 30px 30px 30px 5px;
	outline: none;
	border: 0;
	border-bottom: 1px solid rgb(131, 220, 255);
}

input::placeholder {
	color: #ad96d1;
	font-weight: 100;
	font-size: 15px;
}

.login_btn {
	background-color: rgba(255, 255, 255, 0.582);
	border: 1px solid rgb(190, 225, 255);
	padding: 10px;
	width: 180px;
	height: 60px;
	border-radius: 30px;
	font-size: 20px;
	color: rgb(100, 183, 255);
	font-weight: 100;
	margin-top: 15px;
}

.login_btn:hover {
	box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
	background-color: transparent;
	color: white;
	/* 选择动画 */
	animation: login_mation 0.5s;
	cursor: pointer;
}

/* 定义动画 */
@keyframes login_mation {
	from {
		background-color: rgba(255, 255, 255, 0.582);
		box-shadow: 0px 0px 15px 2px rgb(190, 225, 255);
	}

	to {
		background-color: transparent;
		color: white;
		box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
	}
}
</style>
