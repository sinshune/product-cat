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

const baseURL = 'http://localhost:80/'
export default {
  post (url, data) {
    return request({
      baseURL: baseURL,
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
  },
  get (url, data) {
    return request({
      baseURL: baseURL,
      method: 'get',
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
  },
  delete (url, data) {
    return request({
      baseURL: baseURL,
      method: 'delete',
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
