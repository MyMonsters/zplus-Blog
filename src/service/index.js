import cache from '@/utils/cache'
import axios from 'axios'
import { BASE_URL, TIME_OUT } from './request/config'
// create an axios instance
const service = axios.create({
	// baseURL: 'http://chenyp.top:8008', // url = base url + request url
	baseURL: BASE_URL, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: TIME_OUT // request timeout
})

// request interceptor
service.interceptors.request.use(
	(request) => {
		const token = cache.getCache('token')
		if (token) {
			request.headers['Authorization'] = token
		}
		return request
	},
	(config) => config,
	(err) => err
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	(response) => {
		return response.data
	},
	(err) => {
		return err
	}
)

export default service
