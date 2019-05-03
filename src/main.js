// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import ElementUI from 'element-ui'
import '../theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
// import '../element-variables.scss'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'animate.css'
import 'swiper/dist/css/swiper.min.css'
import router from './router'
import store from './store'
import axios from 'axios'

import '@/utils/rem.js'
import '@/utils/utils.js'

Vue.use(Vant)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.prototype.http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
