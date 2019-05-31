import {
  getUserInfo,
  setUserInfo,
  removeUserInfo,
  getUserId,
  getToken,
  removeToken,
  setToken,
  setUserId, setUsername, setAvatar
} from '../../utils/auth'
import {removeCookie, setCookie} from '../../utils/utils'

const user = {
  state: {
    // userInfo: ''
    userInfo: getUserInfo(),
    userId: getUserId(),
    token: getToken()
    // cookieUserId:
  },
  mutations: {
    setUserInfo: (state, data) => {
      setUserInfo(data)
      console.log(data)
      state.userInfo = data
    },
    setUserAvatar: (state, data) => {
      state.userInfo.avatar = data
      setUserInfo(state.userInfo)
    },
    removeUserInfo: (state) => {
      removeUserInfo()
      state.userInfo = {}
    },
    setToken: (state, data) => {
      setToken(data)
    },
    removeToken: (state) => {
      removeToken()
      state.token = ''
    },
    setUserId: (state, data) => {
      setUserId(data)
    },
    setCookieUserId: (state, data) => {
      setCookie('userId', data, 7)
    },
    removeCookieUserId: (state, data) => {
      removeCookie('userId')
    },
    setCookieToken: (state, data) => {
      setCookie('token', data, 7)
    },
    removeCookieToken: (state, data) => {
      removeCookie('token')
    },
    setUsername: (state, data) => {
      setUsername(data)
    },
    setCookieUsername: (state, data) => {
      setCookie('username', data, 7)
    },
    removeCookieUsername: (state, data) => {
      removeCookie('username')
    },
    setAvatar: (state, data) => {
      setAvatar(data)
    },
    setCookieAvatar: (state, data) => {
      setCookie('avatar', data)
    },
  },
  actions: {

  }
}

export default user
