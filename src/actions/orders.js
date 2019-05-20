import request from "superagent";
import { baseUrl } from "../constants";


export const ADD_CART_ORDER = "ADD_CART_ORDER";
export const SET_ORDER = "SET_ORDER";

const addOrder = order => {
  return {
    type: ADD_CART_ORDER,
    payload: order
  };
};
export const setOrder = order => {
  return {
    type: SET_ORDER,
    payload: order
  };
};

export const addToOrder = order => dispatch => {
  console.log("order", order);
  dispatch(addOrder(order));
};

export const getOrder = () => dispatch => {
  request
    .get(`${baseUrl}/order`)
    .then(result => {
      console.log("result", result);
      dispatch(setOrder(result.body));
    })
    .catch(err => console.error(err));
};
