import { ADD_PRODUCT_CART } from "../actions/cart";
import { CLIENT_RENEG_LIMIT } from "tls";

export default (state = [], action) => {
  console.log("reducer test", action);
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};
