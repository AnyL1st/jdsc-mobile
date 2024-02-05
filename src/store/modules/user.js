import { setUserStor, getUserStor } from '@/utils/storage.js'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getUserStor()
    }
  },
  getters: {},
  mutations: {
    setUserInfo (state, { token, userId }) {
      state.userInfo = { token, userId }
      setUserStor({ token, userId })
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})
      context.commit('cart/setCartList', [], { root: true })
    }
  }
}
