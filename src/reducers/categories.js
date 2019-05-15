import { SET_CATEGORIES } from "../actions/categories";

export default (state = null, action = {}) => {
  switch (action.type) {

    case SET_CATEGORIES:
      return action.payload;

    default:
      return state;
  }
};
