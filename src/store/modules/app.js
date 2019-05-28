import { isMobile } from '@/utils/utils.js'

const app = {
  state: {
    mobile: isMobile(),
    isLogin: false
  },
  mutations: {
    setLogin: (state, data) => {
      state.isLogin = data
    }
  },
  actions: {}
}

export default app
