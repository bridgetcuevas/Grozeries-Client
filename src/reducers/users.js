import { SET_USER } from "../actions/users";
import { USER_LOGOUT } from "../actions/users";

export default (state = null, action = {}) => {
  switch (action.type) {
    case USER_LOGOUT:
      return null;

    // case ADD_USER:
    //   return {
    //     ...state,
    //     [payload.id]: payload
    //   };
    case SET_USER:
      return action.payload;

    default:
      return state;
  }
};
