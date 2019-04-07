/**
 * 在移动端自适应
 * */
(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize' // 判断是否支持横竖屏
  let recalc = function () {
    var clientWidth = window.innerWidth
    if (clientWidth > 1025) {
      docEl.style.fontSize = 32 * (clientWidth / 1920) + 'px'
    } else if (clientWidth > 768) {
      docEl.style.fontSize = 32 * (clientWidth / 1024) + 'px'
    } else {
      docEl.style.fontSize = 32 * (clientWidth / 750) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
