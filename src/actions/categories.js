import request from "superagent";
import { baseUrl } from "../constants";

export const SET_CATEGORIES = "SET_CATEGORIES";

//Needs to be implemented

export const setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
};

export const getCategories = () => dispatch => {
  request
    .get(`${baseUrl}/categories`)
    .then(result => dispatch(setCategories(result.body)))
    .catch(err => console.error(err));
};
