let Token = 'token'
let UserInfo = 'userInfo'
let UserId = 'UserId'

export function setUserInfo (userInfo) {
  const { userId, token } = userInfo
  sessionStorage.setItem(Token, token)
  sessionStorage.setItem(UserId, userId)
}

export function getUserInfo () {
  try {
    return JSON.parse(sessionStorage.getItem(UserInfo))
  } catch (err) {
    return {}
  }
}

export function setUserId (userId) {
  return sessionStorage.setItem(UserId, userId)
}

export function getUserId () {
  return sessionStorage.getItem(UserId)
}

export function setToken (token) {
  return sessionStorage.setItem(Token, token)
}

export function getToken () {
  return sessionStorage.getItem(Token)
}

export function removeUserInfo () {
  return sessionStorage.removeItem(UserInfo)
}
export function removeToken () {
  return sessionStorage.removeItem(Token)
}
