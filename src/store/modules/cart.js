import { getCartList, updateCount, delCartApi } from '@/api/cart.js'

export default {

  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter((item) => {
        return item.isChecked === true
      })
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num
      }, 0
      )
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked === true)
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
      // console.log(state.cartList)
    },
    toggleCheck (state, id) {
      const theOne = state.cartList.find((item) => item.goods_id === id)
      theOne.isChecked = !theOne.isChecked
    },
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => { item.isChecked = !flag })
    },
    changeCount (state, { id, num }) {
      const theOne = state.cartList.find(item => item.goods_id === id)
      theOne.goods_num = num
    }
  },
  actions: {
    async delCartAction (context) {
      const idArr = context.getters.selCartList.map(item => item.id)
      const { message } = await delCartApi(idArr)
      console.log(message)
      context.dispatch('getCartAction')
    },
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(element => {
        element.isChecked = false
      })
      context.commit('setCartList', data.list)
    },
    async changeCountAction (context, { num, id, sku }) {
      context.commit('changeCount', { id, sku, num })
      const res = await updateCount(id, sku, num)
      console.log(res)
    }
  }
}
