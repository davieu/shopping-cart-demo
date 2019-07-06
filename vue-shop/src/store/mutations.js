export default {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, {addedProduct}) => state.products.push({addedProduct})
}