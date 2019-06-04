import request from "superagent";
import { baseUrl } from "../constants";
import { appLoaded, appLoading } from "./appStatus";

export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";
export const SET_URL = "SET_URL";

const addOrder = order => {
  return {
    type: ADD_ORDER,
    payload: order
  };
};
export const setOrder = order => {
  return {
    type: SET_ORDER,
    payload: order
  };
};

export const checkoutUrl = url => {
  return {
    type: SET_URL,
    payload: url
  };
};

export const addToOrder = order => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(order)
    .then(result => {
      dispatch(addOrder(result.body));
    })
    .catch(err => console.error(err));
};

export const getOrder = id => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/orders/${id}`)
    .then(result => {
      dispatch(setOrder(result.body));
    })
    .catch(err => console.error(err));
  dispatch(appLoaded());
};

export const orderCheckout = id => dispatch => {
  dispatch(appLoading());
  request
    .post(`${baseUrl}/orders/${id}/payments`)
    .then(result => {
      dispatch(checkoutUrl(result.text));
    })
    .catch(err => console.error(err));
  dispatch(appLoaded());
};
