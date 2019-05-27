import axios from 'axios'
import { getToken } from './auth'
const request = axios.create()
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default {
  post (url, data) {
    return request({
      baseURL: 'http://192.168.43.186:80/',
      method: 'post',
      url,
      data,
      timeout: 10000,
      headers: {
        'token': getToken()
      }
    }).then(res => {
      return res.data
    }).catch(err => {
      console.log('err', err)
    })
  }
}
