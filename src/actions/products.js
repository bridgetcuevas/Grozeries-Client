import request from "superagent";
import { appLoaded, appLoading } from "./appStatus";

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

export const getProducts = () => dispatch => {
  request
    .get(`${baseUrl}/products`)
    .then(result =>{ 
      console.log("result", result);
      dispatch(setProducts(result.body))})
    .catch(err => console.error(err));
};

export const getProductDetails = (shopId, productId) => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/shops/${shopId}/products/${productId}`)
    .then(result => {dispatch(setProductDetails(result.body));
      dispatch(appLoaded());
    })
    .catch(err => {console.error(err);
      dispatch(appLoaded());
    });
};
