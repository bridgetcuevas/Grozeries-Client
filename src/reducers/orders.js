import { ADD_CART_ORDER, SET_ORDER } from "../actions/orders";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CART_ORDER:
      return [...state, action.payload];
    case SET_ORDER:
      return action.payload;

    default:
      return state;
  }
};