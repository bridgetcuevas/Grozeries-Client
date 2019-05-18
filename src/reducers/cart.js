import { ADD_PRODUCT_CART, SET_CART } from "../actions/cart";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return [...state, action.payload];
    case SET_CART:
      return action.payload;

    default:
      return state;
  }
};
