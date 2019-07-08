import axios from 'axios';

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
      console.error(errObj)
    }
  },
  addProductToCart({ commit }, payload) {
    commit('pushProductToCart', payload)
  },
  removeProductFromCart({ commit }, payload) {
    commit('removeFromCart', payload)
  }
}