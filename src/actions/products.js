import request from "superagent";

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
    .then(result => dispatch(setProducts(result.body)))
    .catch(err => console.error(err));
};

export const getProductDetails = (shopId, productId) => dispatch => {
  request
    .get(`${baseUrl}/shops/${shopId}/products/${productId}`)
    .then(result => dispatch(setProductDetails(result.body)))
    .catch(err => console.error(err));
};
