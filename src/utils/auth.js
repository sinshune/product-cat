let ActivePageIndex = 'ActivePageIndex'
let Token = 'Token'
let UserInfo = 'userInfo'
let K3Rebase = 'K3Rebate'
let SscRebase = 'SscRebate'
let SyxwRebase = 'SyxwRebase'
let Pk10Rebase = 'Pk10Rebase'

export function setK3Rebase (data) {
  return sessionStorage.setItem(K3Rebase, JSON.stringify(data))
}

export function getK3Rebase () {
  return sessionStorage.getItem(K3Rebase)
}

export function getSscRebase () {
  return sessionStorage.getItem(SscRebase)
}

export function setSyxwRebase (data) {
  return sessionStorage.setItem(SyxwRebase, JSON.stringify(data))
}

export function getSyxwRebase () {
  return sessionStorage.getItem(SyxwRebase)
}

export function setPk10Rebase (data) {
  return sessionStorage.setItem(Pk10Rebase, JSON.stringify(data))
}

export function getPk10Rebase () {
  return sessionStorage.getItem(Pk10Rebase)
}

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

export function hezhi (number = 8) {
  for (let i in 8) {
    console.log(i)
  }
}

export function selectedDataToStr (type, data) {
  let str = ''
  if (type === 'input') {
    str = data.map(v => {
      return v.join(' ')
    }).join(',')
  } else {
    let arr = data.map(v => {
      return v.data.map(v1 => {
        return v1.label
      })
    })
    str = arr.map(v => {
      return v.join(' ')
    }).join(',')
  }
  return str
}
