import request from "superagent";
import { baseUrl } from "../constants";
import { appLoaded, appLoading } from "./appStatus";
// import { isExpired } from "../jwt";
// import { logout } from "./users";

export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const SET_CART = "SET_CART";

const addCart = product => {
  return {
    type: ADD_PRODUCT_CART,
    payload: product
  };
};
export const setCart = cart => {
  return {
    type: SET_CART,
    payload: cart
  };
};

export const addToCart = cart => dispatch => {
  console.log("cart", cart);
  dispatch(addCart(cart));
};

export const getCart = () => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/cart`)
    .then(result => {
      console.log("result", result);
      dispatch(setCart(result.body));
      dispatch(appLoaded());
    })
    .catch(err => console.error(err));
    dispatch(appLoaded());
};
