import { InjectionKey } from 'vue'
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex'
import { RootState } from './types'
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'
import { auth } from './modules/auth'

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger()],
  modules: {
    auth,
  },
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
