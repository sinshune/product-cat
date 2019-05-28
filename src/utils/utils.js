export function isEmpty (val) {
  return val === null || val === undefined || val === ''
}

export function isMobile () {
  // fixmin
  return navigator.userAgent.indexOf('Mobile') !== -1
  // return window.innerWidth <= 768
}

export function keepDecimal (num, digit) {
  // debugger
  // let reg = new RegExp('^(\\-|\\+)?\\d+(\\.\\d+)?$')
  if (/^(-|\+)?\d+(\.\d+)?$/.test(num)) {
    return Math.round(num / 10000 * 10 ** digit) / 10 ** digit
  } else {
    return 'Invalid'
  }
}

/**
 * 设置cookie
 * @param key
 * @param value
 * @param expires, 单位 为天
 */
export function setCookie (key, value, expires = 0) {
  debugger
  var cdata = key + '=' + value
  var myDate = new Date()
  myDate.setTime(myDate.getTime() + expires * 24 * 60 * 60 * 1000)
  cdata += '; expires=' + myDate.toGMTString()
  // cdata +=path ? ("; path=" + path) : "" ;
  // cdata +=domain ? ("; domain=" + domain) : "" ;
  // cdata +=secure ? ("; secure=" + secure) : "" ;
  document.cookie = cdata
}

export function getCookie (key) {
  if (!key || document.cookie.indexOf(key) === -1) return false

  let temp = document.cookie.split(';').map(_ => {
    let t = _.split('=')
    let o = {}
    o[t[0]] = t[1]
    return o
  }).find(_ => {
    return Object.keys(_)[0] === key
  })
  return temp[key] ? temp[key] : null
}

export function removeCookie (key) {
  this.setCookie(key, '', -1)
}

export function getFileType (filename) {
  const seat = filename.lastIndexOf('.')
  if (seat !== -1) {
    return filename.substr(seat)
  }
}
