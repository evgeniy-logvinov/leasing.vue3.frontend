import { MutationTree } from 'vuex'
import { RootState } from './types'

export const mutations: MutationTree<RootState> = {
  setName(state: RootState, payload: string) {
    state.userName = payload
  },
}
