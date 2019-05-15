import { SIGNUP_SUCCESS } from "../actions/signup";

export default function(state = { success: false }, { type }) {
  switch (type) {
    case SIGNUP_SUCCESS:
      return { success: true };

    default:
      return state;
  }
}
