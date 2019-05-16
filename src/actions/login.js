import request from "superagent";
import { baseUrl } from "../constants";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loginSuccess = (jwt, username) => ({
  type: LOGIN_SUCCESS,
  jwt,
  loggedIn: true,
  username
});

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(response => {
      console.log(response);
      dispatch(loginSuccess(response.body.jwt, response.body.email));
    })
    .catch(console.error);
};
