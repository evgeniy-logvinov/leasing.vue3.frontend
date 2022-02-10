import { State } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
  },
  actions: {},
  modules: {},
})
