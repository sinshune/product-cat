const getters = {
  mobile: state => state.app.mobile,
  // isLogin: state => state.app.isLogin,
  userInfo: state => state.user.userInfo,
  userId: state => state.user.userId,
  token: state => state.user.token
}

export default getters
