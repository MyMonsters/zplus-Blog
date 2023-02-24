import { accountLoginRequest } from '@/service/request'
import router from '@/router'
import { message } from 'ant-design-vue'
import localCache from '@/utils/cache'
import { getAllArticles } from '@/service/login'
const loginModule = {
	namespaced: true,
	state() {
		return {
			token: '',
			account: {},
			articles: []
		}
	},
	getters() {},
	mutations: {
		changeToken(state, token) {
			state.token = token
		},
		changeAccount(state, account) {
			state.account = account
		},
		changeArticles(state, articles) {
			state.articles = articles
		}
	},
	actions: {
		async getAllArticlesAction({ commit }) {
			console.log('ddd')
			getAllArticles().then((res) => {
				console.log('res', res)
				commit('changeArticles', res.data)
			})
		},
		async accountLoginAction({ commit, dispatch }, payload) {
			// 1.实现登录逻辑
			const loginResult = await accountLoginRequest(payload)

			if (loginResult.code === 200) {
				const { token } = loginResult
				commit('changeToken', token)
				commit('changeAccount', commit)
				localCache.setCache('token', token)

				// 2.跳到发表文章页面
				dispatch('getAllArticlesAction')
				router.push('/authmain/operateContent')
			} else {
				message.error(loginResult.message)
			}
		},
		loadLocalLogin({ commit, dispatch }) {
			const token = localCache.getCache('token')
			if (token) {
				commit('changeToken', token)
				dispatch('getAllArticlesAction')
			}
			const account = localCache.getCache('account')
			if (account) {
				commit('changeAccount', account)
				dispatch('getAllArticlesAction')
			}
		}
	}
}
export default loginModule
