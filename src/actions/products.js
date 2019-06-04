import request from "superagent";
import { appLoaded, appLoading } from "./appStatus";
import { baseUrl } from "../constants";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};

export const setProductDetails = productDetails => {
  return {
    type: SET_PRODUCT,
    payload: productDetails
  };
};

export const getProducts = () => dispatch => {
  request
    .get(`${baseUrl}/products`)
    .then(result => {
      console.log("result", result);
      dispatch(setProducts(result.body));
    })
    .catch(err => console.error(err));
};

export const getProductDetails = id => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/products/${id}`)
    .then(result => {
      dispatch(setProductDetails(result.body));
      dispatch(appLoaded());
    })
    .catch(err => {
      console.error(err);
      dispatch(appLoaded());
    });
};
