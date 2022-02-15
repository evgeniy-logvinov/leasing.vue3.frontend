import { GetterTree } from 'vuex'
import { RootState } from './types'

export const getters: GetterTree<RootState, RootState> = {
  nameDate: (state: RootState): string => {
    return state.userName + Date.now()
  },
}
