import axios from 'axios';

export default {
  allProducts: (state) => state.products,

  getErrorMsg: (state) => state.errorMsg,
  getRequestStatus: (state) => state.requestStatus
}