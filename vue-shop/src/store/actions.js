import axios from 'axios';


export default {
  async fetchProducts({ commit }) {
    const response = await axios.get('http://localhost:5001/api/products');
    // First param is the mutation we want to call. second is the data that we are passing in to the mutation.
    commit('setProducts', response.data)
  }
}