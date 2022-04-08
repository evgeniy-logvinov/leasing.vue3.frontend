import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { authService } from '~/services'
import { RootState } from '~/store/types'
import { AuthUserInfo, SignInInfo } from '~/types'

const user = authService.getUser()

export const state = (): AuthState => {
  return user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null }
}

export interface AuthState {
  status: {
    loggedIn: boolean
  }
  user: AuthUserInfo | null
}

export const actions: ActionTree<AuthState, RootState> = {
  signIn({ commit }, user: SignInInfo) {
    try {
      const res = authService.signIn(user)
      commit('signInSuccess', res)
      return Promise.resolve(res)
    } catch (err) {
      commit('signInFailure')
      return Promise.reject(err)
    }
  },
  signOut({ commit }) {
    authService.signOut()
    commit('signOut')
  },
  signUp({ commit }, user) {
    try {
      const res = authService.signUp(user)
      commit('signUpSuccess')
      return Promise.resolve(res)
    } catch (err) {
      commit('signUpFailure')
      return Promise.reject(err)
    }
  },
}

export const mutations: MutationTree<AuthState> = {
  signInSuccess(state: AuthState, user: AuthUserInfo) {
    state.status.loggedIn = true
    state.user = user
  },
  signInFailure(state: AuthState) {
    state.status.loggedIn = false
    state.user = null
  },
  signOut(state: AuthState) {
    state.status.loggedIn = false
    state.user = null
  },
  signUpSuccess(state: AuthState) {
    state.status.loggedIn = false
  },
  signUpFailure(state: AuthState) {
    state.status.loggedIn = false
  },
}

export const getters: GetterTree<AuthState, RootState> = {
  loggedIn: (state: AuthState): boolean => {
    return state.status.loggedIn
  },
}

export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
