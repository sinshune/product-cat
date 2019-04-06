import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import lottery from './modules/lottery'
import user from './modules/user'
import getters from './getter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    lottery,
    user
  },
  getters
})

export default store
