import request from "superagent";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

const baseUrl = "http://localhost:4000";

const signupSuccess = jwt => ({
  type: SIGNUP_SUCCESS,
  jwt
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
) => dispatch => {
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
    .then(response => {
      dispatch(signupSuccess(response.body.jwt));
    })
    .catch(console.error);
};
