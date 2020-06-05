import axios from "axios";

// Note: for heroky the path for the api no longer need localhost for dev since a vue.config was made to proxy it.
export default {
  async fetchProducts({ commit }) {
    const response = await axios.get("api/products");
    // First param is the mutation we want to call. second is the data that we are passing in to the mutation.
    commit("setProducts", response.data);
  },

  async addProduct({ commit }, payload) {
    console.log(payload);
    try {
      const response = await axios.post("api/product", payload);
      commit("newProduct", response.data);
    } catch (err) {
      const errObj = { errMsg: "Product name already in use.", err };
      console.log("error hit");
      commit("sendError", errObj.errMsg);
    }
  },

  async deleteProduct({ commit }, payload) {
    try {
      axios.delete(`api/product/${payload._id}`, payload);
      console.log("actionPayload", payload);
      commit("deleteProductState", payload);
    } catch (err) {
      console.log("ERRRORRORORO");
      const errObj = { errMsg: "Product not found for deletion.", err };
      commit("sendError", errObj.errMsg);
    }
  },
  addProductToCart({ commit }, payload) {
    commit("pushProductToCart", payload);
  },
  removeProductFromCart({ commit }, payload) {
    commit("removeFromCart", payload);
  },
  addPromotionToProduct({ commit }, payload) {
    commit("promotionActivated", payload);
  }
};
