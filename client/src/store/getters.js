import axios from "axios";

export default {
  allProducts: state => state.products,
  getArrayOfProductNames: state => {
    console.log(state);
    let productsArr = [];
    for (let i = 0; i < state.products.length; i++) {
      // if the product is protected from being altered, cannotDelete=True then it will not show up
      let upperCase =
        state.products[i].productName[0].toUpperCase() +
        state.products[i].productName.substring(
          1,
          state.products[i].productName.length
        );
      // console.log(upperCase);
      if (!state.products[i].cannotDelete) {
        productsArr.push(upperCase);
        // state.products[i].productName
      }
    }
    return productsArr.sort();
  },
  getErrorMsg: state => state.errorMsg,
  getRequestStatus: state => state.requestStatus,
  getShoppingCart: state =>
    state.typeOfProductCountInCart.filter(prod => prod.product.inCart == true),
  getCartItemsLength: state => state.cartArray.length,
  getSubTotal: state => {
    let subTotal = `$${state.totalCost.toFixed(2)}`;
    // since floats are weird when it does to fixed on last number it will show as $-0.00. Needs to be $0.00
    if (subTotal == "$-0.00") {
      return "$0.00";
    } else {
      return subTotal;
    }
  },
  getTax: state => {
    let tax = state.totalCost * 0.075;
    let formattedTax = `$${tax.toFixed(2)}`;
    if (formattedTax == "$-0.00") {
      return "$0.00";
    } else {
      return formattedTax;
    }
  },
  getOrderTotal: state => {
    let tax = state.totalCost * 0.075;
    let total = tax + state.totalCost;
    let formattedTotal = `$${total.toFixed(2)}`;
    if (formattedTotal == "$-0.00") {
      return "$0.00";
    } else {
      return formattedTotal;
    }
  },
  displayPromotionsActivated: state =>
    state.promotions.filter(prom => prom.isActivated == true)
};
