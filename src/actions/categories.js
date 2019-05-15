import request from "superagent";

export const SET_CATEGORIES = "SET_CATEGORIES";


const baseUrl = "http://localhost:4000";

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

