import request from "superagent";
import { isExpired } from "../jwt";
import { logout } from "./users";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";

const baseUrl = "http://localhost:4000";

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const setProductDetails = productDetails => {
  return {
    type: SET_PRODUCTS,
    payload: productDetails
  };
};


export const getProducts = () => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/products`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => dispatch(setProducts(result.body)))
    .catch(err => console.error(err));
};

export const getProductDetails = id => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/products/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => dispatch(setProductDetails(result.body)))
    .catch(err => console.error(err));
};