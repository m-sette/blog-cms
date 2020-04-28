import UserService from '@/services/UserService.js'

export const state = () => ({
  user: []
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  fetchUser({ commit }) {
    return UserService.getUser().then((res) => {
      commit('SET_USER', res.data)
    })
  }
}
