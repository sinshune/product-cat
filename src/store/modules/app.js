import { isMobile } from '@/utils/utils.js'

const app = {
  state: {
    mobile: isMobile()
  },
  mutations: {
    showPlaySortMore: (state, data) => {
      state.PlaySortMore = data
    },
    resetBetFilterData: (state) => {
      state.BetFilterDataFlag = !state.BetFilterDataFlag
    },
    setHeaderTitle: (state, data) => {
      state.headerTitle = data
    }
  },
  actions: {}
}

export default app
