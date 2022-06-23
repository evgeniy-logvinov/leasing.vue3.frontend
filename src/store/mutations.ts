import { MutationTree } from 'vuex'
import { Permissions } from '~/types'
import { RootState } from './types'

export const mutations: MutationTree<RootState> = {
  setName(state: RootState, payload: string) {
    state.userName = payload
  },
  setPermissions(state: RootState, payload: Permissions[]) {
    state.permissons = payload
  },
}
