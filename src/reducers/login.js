import { LOGIN_SUCCESS } from "../actions/login";

export default function(state = { loggedIn: false, username: null }, action) {
  if (action.type === LOGIN_SUCCESS)
    return Object.assign(
      {},
      { jwt: action.jwt, loggedIn: action.loggedIn, username: action.username }
    );
  return state;
}
