import axios from 'axios'
import { getToken } from './auth'
let baseUrl = 'http://192.168.43.186:80/'
const request = axios.create({
  timeout: 10000,
  headers: {
    'token': getToken()
  }
})
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
let http = {
  post (url, data) {
    return request.post(baseUrl + url, data)
  }
}
export default http
