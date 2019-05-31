const getters = {
  mobile: state => state.app.mobile,
  // isLogin: state => state.app.isLogin,
  userInfo: state => state.user.userInfo,
  userId: state => state.user.userId,
  token: state => state.user.token,
  username: state => state.user.username,
  avatar: state => state.user.avatar
}

export default getters
