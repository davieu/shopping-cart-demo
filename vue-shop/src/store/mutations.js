export default {
  setProducts: (state, products) => {
    products.forEach(product => {
      // quick name shortener
      let prodName = product.productName
      // uppercases the first letter of the product names in the state
      product.productName = prodName[0].toUpperCase() + prodName.substring(1, prodName.length)});   
      state.products = products
  },
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