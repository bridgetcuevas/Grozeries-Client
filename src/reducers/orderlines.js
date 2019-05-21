import { ADD_CART_ORDERLINE, SET_ORDERLINE } from "../actions/orderlines";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CART_ORDERLINE:
      return [...state, action.payload];
    case SET_ORDERLINE:
      return action.payload;

    default:
      return state;
  }
};