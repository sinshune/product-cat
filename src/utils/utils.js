export function isMobile () {
  // fixmin
  // return navigator.userAgent.indexOf('Mobile') !== -1
  return window.innerWidth <= 768
}
