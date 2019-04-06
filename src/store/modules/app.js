const app = {
  state: {
    // PlaySortMore: false,
    // BetFilterDataFlag: true,
    // headerTitle: ''
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
