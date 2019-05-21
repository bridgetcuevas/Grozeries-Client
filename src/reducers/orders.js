import { ADD_ORDER, SET_ORDER } from "../actions/orders";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    case SET_ORDER:
      return action.payload;

    default:
      return state;
  }
};