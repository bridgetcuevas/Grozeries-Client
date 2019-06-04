import { SET_ORDERLINE } from "../actions/orderlines";

// ADD_CART_ORDERLINE,

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERLINE:
      return action.payload;

    default:
      return state;
  }
};
