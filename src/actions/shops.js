import request from "superagent";
import { isExpired } from "../jwt";
import { logout } from "./users";

export const SET_SHOPS = "SET_SHOPS";
export const SET_SHOP_DETAILS = "SET_SHOP_DETAILS";



const baseUrl = "http://localhost:4000";

export const setShops = shops => {
  return {
    type: SET_SHOPS,
    payload: shops
  };
};

export const setShopDetails = shopDetails => {
  return {
    type: SET_SHOP_DETAILS,
    payload: shopDetails
  };
};



export const getShops = () => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/shops`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => dispatch(setShops(result.body)))
    .catch(err => console.error(err));
};

export const getShopDetails = id => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/shops/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => dispatch(setShopDetails(result.body)))
    .catch(err => console.error(err));
};

