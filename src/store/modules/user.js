import {getUserInfo, setUserInfo, removeUserInfo, getUserId, getToken, removeToken, setToken} from '../../utils/auth'

const user = {
  state: {
    // userInfo: ''
    userInfo: getUserInfo(),
    userId: getUserId(),
    token: getToken()
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
    }
  },
  actions: {

  }
}

export default user
