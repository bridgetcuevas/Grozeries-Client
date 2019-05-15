import request from "superagent";
import { isExpired } from "../jwt";
import { logout } from "./users";

export const SET_CATEGORIES = "SET_CATEGORIES";


const baseUrl = "http://localhost:4000";

export const setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
};



export const getCategories = () => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/categories`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => dispatch(setCategories(result.body)))
    .catch(err => console.error(err));
};

