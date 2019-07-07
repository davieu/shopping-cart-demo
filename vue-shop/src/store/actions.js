import axios from 'axios';

export default {
  async fetchProducts({ commit }) {
    const response = await axios.get('http://localhost:5001/api/products');
    // First param is the mutation we want to call. second is the data that we are passing in to the mutation.
    commit('setProducts', response.data)
  },

  async addProduct({ commit }, payload) {
    try {
      const response = await axios.post('http://localhost:5001/api/product', payload)
      commit('newProduct', response.data)

    } catch(err) {
      const errObj = {errMsg: 'Product name already in use.', err}
      commit('sendError', errObj.errMsg)
      console.error(errObj)
    }
  }
}