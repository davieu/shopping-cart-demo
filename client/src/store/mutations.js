export default {
  setProducts: (state, products) => {
    products.forEach(product => {
      // quick name shortener
      let prodName = product.productName;
      // uppercases the first letter of the product names in the state
      product.productName =
        prodName[0].toUpperCase() + prodName.substring(1, prodName.length);
    });
    // This initializes the products and count for each product. This state is strictly for keeping count of each product type in state
    if (state.initializeState) {
      for (let i = 0; i < products.length; i++) {
        //initializes the products and count to 0
        // state.typeOfProductCountInCart[products[i].productName] = 0
        state.typeOfProductCountInCart.push({
          product: {
            productName: products[i].productName,
            count: 0,
            inCart: false,
            price: products[i].price,
            productID: products[i]._id
          }
        });
      }
      console.log(state.typeOfProductCountInCart);
    }
    // once ran once. the initialization for the typeOfProductCountInCart state will not run again
    state.initializeState = false;
    state.products = products;
  },

  newProduct: (state, addedProduct) => {
    console.log("mutNewProd", addedProduct);
    // timeout for the success msg. only lasts for 1.5s
    setTimeout(() => (state.requestStatus = null), 1500);
    // This uppercase var was needed because the object productName sent was lowercase and I needed the first letter uppercase to store in the state
    let uppercaseName =
      addedProduct.productName[0].toUpperCase() +
      addedProduct.productName.substring(1, addedProduct.productName.length);
    // adds the addedproduct to the typeOfProductCountInCart.
    state.typeOfProductCountInCart.push({
      product: {
        productName: uppercaseName,
        count: 0,
        inCart: false,
        price: addedProduct.price,
        productID: addedProduct._id
      }
    });
    // flag for knowing if request is good or bad.
    state.requestStatus = true;
    state.errorMsg = "";
    state.products.push(addedProduct);
  },

  deleteProductState: (state, deletedProduct) => {
    // finds the index of the deleted product inputed in the state
    let indexOfDeletedProd = state.products.findIndex(products => {
      return products._id === deletedProduct._id;
    });

    // This is for my protected products so people wont delete my initial products.
    if (deletedProduct.cannotDelete !== true) {
      // deletes/splices out the product that is chosen for deletion from the state
      state.products.splice(indexOfDeletedProd, 1);
      state.typeOfProductCountInCart.splice(indexOfDeletedProd, 1);
    }

    // this is for the error/success msgs on failed or complete
    setTimeout(() => (state.requestStatus = null), 1500);
    state.requestStatus = true;
    state.errorMsg = "";
  },

  sendError: (state, errMsg) => {
    state.requestStatus = false;
    state.errorMsg = errMsg;
    // timeout for the err msg. only lasts for 2s
    setTimeout(() => (state.requestStatus = null), 2000);
  },

  updateProductState: (state, updatedProduct) => {
    console.log(updatedProduct);
  },

  pushProductToCart: (state, addedToCart) => {
    state.cartArray.push(addedToCart.productName);
    // gets the index of the productName in the typeOfProductCountInCart state array
    let indexOfProductName = state.typeOfProductCountInCart.findIndex(
      x => x.product.productName == addedToCart.productName
    );
    // adds 1 to the counter in the typeOfProductCountInCart state
    state.typeOfProductCountInCart[indexOfProductName].product.count += 1;
    state.typeOfProductCountInCart[indexOfProductName].product.inCart = true;
    state.totalCost += addedToCart.price;
    console.log(state.typeOfProductCountInCart);
    console.log(state.cartArray);
  },

  removeFromCart: (state, removedFromCart) => {
    let indexForCartArrayItem = state.cartArray.indexOf(
      removedFromCart.productName
    );
    state.cartArray.splice(indexForCartArrayItem, 1);

    let indexOfProductName = state.typeOfProductCountInCart.findIndex(
      x => x.product.productName == removedFromCart.productName
    );

    state.typeOfProductCountInCart[indexOfProductName].product.count -= 1;
    if (state.typeOfProductCountInCart[indexOfProductName].product.count == 0) {
      state.typeOfProductCountInCart[indexOfProductName].product.inCart = false;
    }
    state.totalCost -= removedFromCart.price;
  },

  promotionActivated: (state, promotions) => {
    // When someone submits the promotions they want to activate the state.productPromotionsActivated
    // is reset then the new array is pushed
    state.productPromotionsActivated = [];
    state.promotions.forEach(promotion => (promotion.isActivated = false));
    // changing state based on the promotions activated
    promotions.forEach(promotion =>
      state.productPromotionsActivated.push(promotion)
    );
    state.promotions.forEach(promotion => {
      for (let i = 0; i < state.promotions.length; i++) {
        if (promotion.productName == promotions[i]) {
          promotion.isActivated = true;
        }
      }
      console.log(promotion.isActivated);
    });
    console.log(state.promotions);
    console.log(state.productPromotionsActivated);
  }
};
