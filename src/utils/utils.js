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

export function getFileType (filename) {
  const seat = filename.lastIndexOf('.')
  if (seat !== -1) {
    return filename.substr(seat)
  }
}
