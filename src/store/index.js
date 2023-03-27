// import localCache from '@/utils/cache'
import { createStore } from 'vuex'

// import service from '@/service'
import loginModule from './login'
import infoModule from './info'
// 创建一个新的 store 实例
const store = createStore({
	state() {
		return {}
	},
	mutations: {},
	actions: {
		// async getArticleList({ commit }) {
		// 	const token = localCache.getCache('token')
		// 	service
		// 		.get('/record/getAllArticles', {
		// 			headers: { Authorization: ` ${token}` }
		// 		})
		// 		.then((res) => {
		// 			console.log(res)
		// 			commit('changeArticles', res.data)
		// 		})
		// }
	},
	modules: {
		login: loginModule,
		info: infoModule
	}
})
export function setupLogin() {
	store.dispatch('login/loadLocalLogin')
	store.dispatch('info/getTodolistAction')
	store.dispatch('info/getTimelineAction')
	store.dispatch('info/getAllArticlesAction')
}
export default store
