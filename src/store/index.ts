import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

const moduleUserInfo = {
  state: () => {
    return {
      userName: 'Tom',
    }
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
  },
  // actions: { ... },
  // getters: { ... }
}
// define your typings for the store state
export interface State {
  count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()
// const moduleB = {
// state: () => ({ ... }),
// mutations: { ... },
// actions: { ... }
// }

export const store = createStore<State>({
  state: () => {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
  },
  modules: {
    userInfo: moduleUserInfo,
  },
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
