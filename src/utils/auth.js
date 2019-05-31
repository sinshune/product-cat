let Token = 'token'
let UserInfo = 'userInfo'
let UserId = 'userId'
let Username = 'username'
let Avatar = 'avatar'

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

export function setUsername (username) {
  return sessionStorage.setItem(Username, username)
}

export function getUsername () {
  return sessionStorage.getItem(Username)
}

export function removeUsername () {
  return sessionStorage.removeItem(Username)
}

export function setAvatar (avatar) {
  return sessionStorage.setItem(Avatar, avatar)
}

export function getAvatar () {
  return sessionStorage.getItem(Avatar)
}

export function removeAvatar () {
  return sessionStorage.removeItem(Avatar)
}
