import axios from 'axios';


// Note: for heroky the path for the api no longer need localhost for dev since a vue.config was made to proxy it.
export default {
  async fetchProducts({ commit }) {
    const response = await axios.get('api/products');
    // First param is the mutation we want to call. second is the data that we are passing in to the mutation.
    commit('setProducts', response.data)
  },

  async addProduct({ commit }, payload) {
    try {
      const response = await axios.post('api/product', payload)
      commit('newProduct', response.data)

    } catch(err) {
      const errObj = {errMsg: 'Product name already in use.', err}
      commit('sendError', errObj.errMsg)
    }
  },
  addProductToCart({ commit }, payload) {
    commit('pushProductToCart', payload)
  },
  removeProductFromCart({ commit }, payload) {
    commit('removeFromCart', payload)
  },
  addPromotionToProduct({commit}, payload) {
    commit('promotionActivated', payload)
  }
}