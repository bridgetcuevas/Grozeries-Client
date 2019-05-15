import { SET_PRODUCTS, SET_PRODUCT_DETAILS } from "../actions/products";

export default (state = null, action = {}) => {
  switch (action.type) {

    case SET_PRODUCTS:
      return action.payload;

    case SET_PRODUCT_DETAILS:
      return action.payload;

    default:
      return state;
  }
};
