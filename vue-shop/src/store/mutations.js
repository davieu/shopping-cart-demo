export default {
  setProducts: (state, products) => {
    products.forEach(product => {
      // quick name shortener
      let prodName = product.productName
      // uppercases the first letter of the product names in the state
      product.productName = prodName[0].toUpperCase() + prodName.substring(1, prodName.length)}); 
      // This initializes the products and count for each product. This state is strictly for keeping count of each product type in state  
      if (state.initializeState) {
        for (let i = 0; i < products.length;i++) {
          //initializes the products and count to 0
          // state.typeOfProductCountInCart[products[i].productName] = 0
          state.typeOfProductCountInCart.push({product:{productName: products[i].productName, count: 0}})
          
        }
        console.log(state.typeOfProductCountInCart)
      }
      // once ran once. the initialization for the typeOfProductCountInCart state will not run again
      state.initializeState = false
      state.products = products
  },
  newProduct: (state, addedProduct) => {
    // timeout for the success msg. only lasts for 1.5s
    setTimeout(() => state.requestStatus = null, 1500)
    // This uppercase var was needed because the object productName sent was lowercase and I needed the first letter uppercase to store in the state
    let uppercaseName = addedProduct.productName[0].toUpperCase() + addedProduct.productName.substring(1, addedProduct.productName.length)
    // adds the addedproduct to the typeOfProductCountInCart.
    state.typeOfProductCountInCart[uppercaseName] = 0;
    // flag for knowing if request is good or bad.
    state.requestStatus = true;
    state.errorMsg = '';
    state.products.push(addedProduct)
  },
  sendError: (state, errMsg) => {
    state.requestStatus = false;
    state.errorMsg = errMsg
    // timeout for the err msg. only lasts for 2s
    setTimeout(() => state.requestStatus = null, 2000) 
  },
  pushProductToCart: (state, addedToCart) => {
    state.cartArray.push(addedToCart)
    // gets the index of the productName in the typeOfProductCountInCart state array
    let indexOfProductName = state.typeOfProductCountInCart.findIndex(x => x.product.productName == addedToCart)
    // adds 1 to the counter in the typeOfProductCountInCart state
    state.typeOfProductCountInCart[indexOfProductName].product.count += 1
  }
}