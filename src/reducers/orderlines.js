import {
  ADD_CART_ORDERLINE,
  SET_ORDERLINE,
  ORDERLINE_DELETE_SUCCESS
} from "../actions/orderlines";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CART_ORDERLINE:
      return [...state, action.payload];

    case SET_ORDERLINE:
      return action.payload;

    case ORDERLINE_DELETE_SUCCESS:
      return state.filter(orderline => orderline.id !== action.orderlines);

    default:
      return state;
  }
};
