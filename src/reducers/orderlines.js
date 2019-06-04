
import {  SET_ORDERLINE } from "../actions/orderlines";


export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERLINE:
      return action.payload;

    default:
      return state;
  }
};
