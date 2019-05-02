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
