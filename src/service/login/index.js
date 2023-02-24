import service from '..'
import localCache from '@/utils/cache'
const token = localCache.getCache('token')
export function getAllArticles() {
	return service.get('/record/getAllArticles', {
		headers: { Authorization: ` ${token}` }
	})
}
