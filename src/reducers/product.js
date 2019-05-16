import { SET_PRODUCT } from "../actions/products";

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.payload;

    default:
      return state;
  }
};
