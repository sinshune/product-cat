import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
import router from '../router/index'
import {getToken, removeToken} from './auth'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://pp.nicenvwang.com', // api的base_url
  baseURL: 'http://api.dz8888.com', // api的base_url
  // baseURL: '/api',  // api的base_url
  // baseURL: 'http://localhost',  // api的base_url
  withCredentials: false, // 每次请求带上cookie
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'charset=utf-8'
  if (getToken()) {
    // console.log(Base64.decode(getToken()))
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['username'] = getUsername()
  }
  return config
}, error => {
  // Do something with request error
  console.log(error)// for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // if (response.data.code == '401') {
    //   router.push('/LoginAndReg')
    // }
    return response
  },
  error => {
    if (error.response) {
      // console.log(error.response.status);
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          // removeMenus();
          removeToken()
          router.replace({
            path: '/LoginAndReg'
            // query: {redirect: router.currentRoute.fullPath}
          })
        // if (router.currentRoute.fullPath !== '/aboutus' && router.currentRoute.fullPath !== '/faq' && router.currentRoute.fullPath !== '/Permissions') {
        //   router.replace({
        //     path: 'LoginAndReg',
        //     // query: {redirect: router.currentRoute.fullPath}
        //   })
        // }
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response)
  })

// response => response.data,
// response => {
// /**
// * code为非20000是抛错 可结合自己业务进行修改
// */
//   const res = response.data
//   if (res.ret !== 0) {
//     Message({
//       message: res.data,
//       type: 'error',
//       duration: 5 * 1000
//     })
//
//
//     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//     if (res.ret === 50008 || res.ret === 50012 || res.ret === 50014) {
//       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//         confirmButtonText: '重新登录',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         new Promise(resolve => {
//           store.commit('user/SET_TOKEN', '')
//           removeToken()
//           resolve()
//         }).then(() => {
//           location.reload()// 为了重新实例化vue-router对象 避免bug
//         })
//       })
//     }
//     return Promise.reject('error')
//   } else {
//     return response.data
//   }
// },
// response => {
//   return response
// },
// error => {
//   console.log('err' + error)// for debug
//   Message({
//     message: error.message,
//     type: 'error',
//     duration: 5 * 1000
//   })
//   return Promise.reject(error)
// }

export default service
