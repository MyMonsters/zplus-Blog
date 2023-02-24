let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
	BASE_URL = 'http://101.34.205.91:8181'
} else if (process.env.NODE_ENV === 'production') {
	BASE_URL = 'http://101.34.205.91:8181'
} else {
	BASE_URL = 'http://101.34.205.91:8181'
}
export { BASE_URL, TIME_OUT }
