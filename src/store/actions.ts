import { ActionTree } from 'vuex'
import { RootState } from './types'

export const actions: ActionTree<RootState, RootState> = {
  setNewName: ({ commit }, payload: string) => {
    commit('setName', payload)
  },
}
