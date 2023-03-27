import {
	addTimeline,
	addTodo,
	getArticleById,
	getTimeline,
	getTodolist,
	removeTimeline,
	removeTodo,
	updateTimeline
} from '@/service/info'
import { getAllArticles } from '@/service/login'
import { message } from 'ant-design-vue'
const infoModule = {
	namespaced: true,
	state() {
		return {
			timeline: [],
			todolist: [],
			currentArticle: {},
			currentEditArticle: {},
			articles: []
		}
	},
	mutations: {
		changeTimeline(state, timeline) {
			state.timeline = timeline
		},
		changeTodolist(state, todolist) {
			state.todolist = todolist
		},
		changeCurrentArticle(state, article) {
			state.currentArticle = article
			console.log('changed')
		},
		changeAllArticles(state, articles) {
			state.articles = articles
		}
	},
	actions: {
		getTimelineAction({ commit }) {
			getTimeline().then((res) => {
				console.log(res)
				commit('changeTimeline', res.data)
			})
		},
		addTimelineAction({ commit, state }, payload) {
			const { time, title, id, color } = payload.info
			addTimeline({ time, title, id, color }).then((res) => {
				console.log(res)
				let newtimeline = state.timeline
				newtimeline.push({ time, title, id: res.id, color })
				commit('changeTimeline', newtimeline)
			})
		},
		updateTimelineAction({ state, commit }, payload) {
			console.log(payload)
			const { time, title, id, color } = payload.info
			updateTimeline({ time, title, id, color }).then((res) => {
				console.log(res)
				let newtimeline = state.timeline
				Object.assign(newtimeline.filter((item) => id === item.id)[0], {
					id,
					time,
					title,
					color
				})
				commit('changeTimeline', newtimeline)
			})
		},
		removeTimelineAction({ commit, state }, payload) {
			const { id } = payload
			removeTimeline(id).then((res) => {
				console.log(res)
				let newtimeline = state.timeline
				newtimeline = newtimeline.filter((item) => id !== item.id)
				commit('changeTimeline', newtimeline)
			})
		},
		getTodolistAction({ commit }) {
			getTodolist().then((res) => {
				console.log(res)
				commit('changeTodolist', res.data)
			})
		},
		removeTodolistAction({ commit, state }, payload) {
			const { id } = payload
			//发送请求
			removeTodo(id).then((res) => {
				console.log(res)
				if (res.status == 0) {
					//同步
					message.success('删除成功！')
					const newTodolist = state.todolist.filter((item) => item.id !== id)
					commit('changeTodolist', newTodolist)
				}
			})
		},
		addTodolistAction({ commit, state }, payload) {
			const { title } = payload
			let newtodolist = state.todolist
			addTodo(title)
				.then((res) => {
					console.log(res)
					if (res.status === 0) {
						message.success('添加成功！')
						const insertId = res.id
						newtodolist.push({
							title: title,
							id: insertId,
							isdone: 0
						})
						commit('changeTodolist', newtodolist)
					}
				})
				.catch((err) => {
					console.error(err)
				})
		},
		getCurrentArticleByIdAction({ commit }, payload) {
			const { id } = payload
			getArticleById(id).then((res) => {
				console.log(res)
				commit('changeCurrentArticle', res.data[0])
			})
		},
		getAllArticlesAction({ commit }) {
			getAllArticles().then((res) => {
				commit('changeAllArticles', res.data)
			})
		}
	}
}
export default infoModule
