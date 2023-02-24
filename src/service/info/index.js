import service from '..'
import qs from 'qs'
import localCache from '@/utils/cache'
const token = localCache.getCache('token')
export function getTimeline() {
	return service.get('/record/getTimeline')
}
export function updateTimeline(info) {
	const { id, title, time, color } = info
	return service.post(
		'/auth/updateTimeline',
		qs.stringify({
			id: id,
			title: title,
			time: time,
			color: color
		}),
		{ headers: { Authorization: ` ${token}` } }
	)
}
export function removeTimeline(id) {
	return service.post('/auth/removeTimeline', qs.stringify({ id: id }), {
		headers: { Authorization: ` ${token}` }
	})
}
export function addTimeline(info) {
	const { id, title, time, color } = info
	return service.post(
		'/auth/addTimeline',
		qs.stringify({
			id: id,
			title: title,
			time: time,
			color: color
		}),
		{ headers: { Authorization: ` ${token}` } }
	)
}
export function getTodolist() {
	return service.get('/record/getTodolist')
}
export function removeTodo(id) {
	return service.post('/auth/removeTodo', qs.stringify({ id: id }), {
		headers: { Authorization: ` ${token}` }
	})
}
export function addTodo(title) {
	return service.post('/auth/addTodo', qs.stringify({ title: title }), {
		headers: { Authorization: ` ${token}` }
	})
}

export function getArticleById(id) {
	return service.get('/record/getArticleById/' + id)
}
