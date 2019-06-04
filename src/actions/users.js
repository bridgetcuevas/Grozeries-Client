import * as request from "superagent";
import { baseUrl } from "../constants";
import { isExpired } from "../jwt";
import { appLoaded, appLoading } from "./appStatus";

export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USERS = "UPDATE_USERS";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const USER_LOGOUT = "USER_LOGOUT";

export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";

export const logout = () => ({
  type: USER_LOGOUT
});

const userLoginSuccess = login => ({
  type: USER_LOGIN_SUCCESS,
  payload: login
});

const userLoginFailed = error => ({
  type: USER_LOGIN_FAILED,
  payload: error || "Unknown error"
});

const userSignupFailed = error => ({
  type: USER_SIGNUP_FAILED,
  payload: error || "Unknown error"
});

const userSignupSuccess = () => ({
  type: USER_SIGNUP_SUCCESS
});

const updateUsers = users => ({
  type: UPDATE_USERS,
  payload: users
});

const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
});

export const login = (email, password) => dispatch =>
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      console.log(result.body);
      dispatch(userLoginSuccess(result.body));
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch(userLoginFailed(err.response.body.message));
      } else {
        console.error(err);
      }
    });

export const signup = (
  first_name,
  last_name,
  street_name,
  house_number,
  zipcode,
  city,
  phonenumber,
  email,
  password,
  user_type
) => dispatch =>
  request
    .post(`${baseUrl}/register`)
    .send({
      first_name,
      last_name,
      street_name,
      house_number,
      zipcode,
      city,
      phonenumber,
      email,
      password,
      user_type
    })
    .then(result => {
      dispatch(userSignupSuccess());
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch(userSignupFailed(err.response.body.message));
      } else {
        console.error(err);
      }
    });

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .get(`${baseUrl}/register`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateUsers(result.body));
    })
    .catch(err => console.error(err));
};

export const getUser = id => (dispatch, getState) => {
  const state = getState();
  if (!state.currentUser) return null;
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  dispatch(appLoading());
  request
    .get(`${baseUrl}/users/${id}`)
    .then(result => {
      dispatch(updateUser(result.body));
      dispatch(appLoaded());
    })
    .catch(err => {
      console.error(err);
      dispatch(appLoaded());
    });
};
