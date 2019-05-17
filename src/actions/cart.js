import request from "superagent";
import { baseUrl } from "../constants";
import { appLoaded, appLoading } from "./appStatus";
import { isExpired } from "../jwt";
import { logout } from "./users";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const addToCart = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const addProductToCart = data => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  dispatch(appLoading());
  request
    .post(`${baseUrl}/cart`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      console.log("result", result);
      dispatch(addToCart(result.body));
      dispatch(appLoaded());
    })
    .catch(err => {
      console.error(err);
      dispatch(appLoaded());
    });
};
