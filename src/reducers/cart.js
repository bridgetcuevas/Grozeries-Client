import { ADD_PRODUCT } from "../actions/cart";

export default (state = null, { type, payload }) => {
  console.log("type payload", type, payload);
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};
