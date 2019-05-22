import { SET_URL } from "../actions/orders";

export default (state = null, action) => {
  switch (action.type) {
    case SET_URL:
      return action.payload
    default:
      return state;
  }
};