import service from './index'
import qs from 'qs'
export function accountLoginRequest(account) {
	console.log(account)
	return service.post('/log/login', qs.stringify(account))
}
