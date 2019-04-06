const lottery = {
  state: {
    lotteryList: [], // 选号篮
    lotteryRebate: {
      k3: [],
      ssc: [],
      syxw: [],
      pk10: []
    }
  },
  mutations: {
    resetLotteryList: (state) => {
      state.lotteryList = []
    },
    setLotteryList: (state, data) => {
      state.lotteryList.push(JSON.parse(JSON.stringify(data)))
    },
    deleteLotteryListItem: (state, data) => {
      state.lotteryList.splice(data + 1, 1)
    },

    setLotteryRebate: (state, type, data) => {
      state.lotteryRebate[type] = data
    }
  },
  actions: {

  }
}

export default lottery
