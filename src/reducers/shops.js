import { SET_SHOPS, SET_SHOP_DETAILS } from "../actions/shops";

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_SHOPS:
      return action.payload;

    case SET_SHOP_DETAILS:
      return action.payload;

    default:
      return state;
  }
};
