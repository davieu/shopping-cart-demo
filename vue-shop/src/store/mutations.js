export default {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, {addedProduct}) => {
    setTimeout(() => state.requestStatus = null, 1500)
    state.requestStatus = true;
    state.errorMsg = '';
    state.products.push({addedProduct}
  )},
  sendError: (state, errMsg) => {
    state.requestStatus = false;
    state.errorMsg = errMsg
    setTimeout(() => state.requestStatus = null, 2000) 
  }
}