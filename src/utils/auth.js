let ActivePageIndex = 'ActivePageIndex'
let Token = 'Token'
let UserInfo = 'userInfo'

export function setUserInfo (userInfo) {
  return sessionStorage.setItem(UserInfo, JSON.stringify(userInfo))
}

export function getUserInfo () {
  // console.log(sessionStorage.getItem(UserInfo))
  try {
    return JSON.parse(sessionStorage.getItem(UserInfo))
  } catch (err) {
    return {}
  }
}

export function removeUserInfo () {
  return sessionStorage.removeItem(UserInfo)
}

export function setActivePage (index) {
  return sessionStorage.setItem(ActivePageIndex, index)
}

export function setToken (token) {
  return sessionStorage.setItem(Token, token)
}

export function getToken () {
  return sessionStorage.getItem(Token)
}

export function removeToken () {
  return sessionStorage.removeItem(Token)
}

export function getActivePage () {
  return sessionStorage.getItem(ActivePageIndex)
}
