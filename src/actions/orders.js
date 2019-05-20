import request from "superagent";
import { baseUrl } from "../constants";
import { appLoaded, appLoading } from "./appStatus";


export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

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



export const addToOrder = order => 
(dispatch, getState) => {
  console.log(order);
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .send(order)
    .then(result => {
      console.log(result.body);
      dispatch(addOrder(result.body));
    })
    .catch(err => console.error(err));
};
// dispatch => {
//   console.log("order", order);
//   dispatch(addOrder(order));
// };

export const getOrder = id => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/orders/${id}`)
    .then(result => {
      console.log("result", result);
      dispatch(setOrder(result.body));
      dispatch(appLoaded());
    })
    .catch(err => 
      console.error(err));
      dispatch(appLoaded());
};
