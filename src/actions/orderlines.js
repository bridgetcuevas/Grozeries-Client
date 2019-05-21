import request from "superagent";
import { baseUrl } from "../constants";

export const ADD_CART_ORDERLINE = "ADD_CART_ORDERLINE";
export const SET_ORDERLINE = "SET_ORDERLINE";

const addOrderline = orderline => {
  return {
    type: ADD_CART_ORDERLINE,
    payload: orderline
  };
};
export const setOrderline = orderline => {
  return {
    type: SET_ORDERLINE,
    payload: orderline
  };
};

export const addToOrderline = (
  id,
  price,
  quantity,
  shopId,
  orderId,
  userId
) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/orders/1/`)
    .set("Authorization", `Bearer ${jwt}`)
    .send({
      productId: id,
      price,
      quantity,
      shopId,
      orderId,
      userId
    })
    .then(result => {
      console.log("RESULT-BODY", result.body);
      dispatch(addOrderline(result.body));
    })
    .catch(err => console.error(err));
};
// dispatch => {
//   console.log("order", order);
//   dispatch(addOrder(order));
// };

export const getOrderline = () => dispatch => {
  request
    .get(`${baseUrl}/orderlines`)
    .then(result => {
      console.log("result", result);
      dispatch(setOrderline(result.body));
    })
    .catch(err => console.error(err));
};
