import request from "superagent";
import { appLoaded, appLoading } from "./appStatus";
import { baseUrl } from "../constants";

export const SET_SHOPS = "SET_SHOPS";
export const SET_SHOP_DETAILS = "SET_SHOP_DETAILS";

export const setShops = shops => {
  return {
    type: SET_SHOPS,
    payload: shops
  };
};

export const setShopDetails = shopDetails => {
  return {
    type: SET_SHOP_DETAILS,
    payload: shopDetails
  };
};

export const getShops = () => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/shops`)
    .then(result => {
      dispatch(setShops(result.body));
      dispatch(appLoaded());
    })
    .catch(err => console.error(err));
};

export const getShopDetails = id => dispatch => {
  dispatch(appLoading());
  request
    .get(`${baseUrl}/shops/${id}`)
    .then(result => {
      console.log("result", result.body);
      dispatch(setShopDetails(result.body));
      dispatch(appLoaded());
    })

    .catch(err => {
      console.error(err);
      dispatch(appLoaded());
    });
};
