import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../actions/users";
import { localStorageJwtKey, localStorageFirstName, localStorageCity, localStorageEmail, localStorageHouse, localStorageLastName, localStoragePhone, localStorageStreet, localStorageZip, localStorageUserId, localStorageOrderId } from "../constants";

let initialState = null;
try {
  const jwt = localStorage.getItem(localStorageJwtKey);
  const first_name = localStorage.getItem(localStorageFirstName);
  const last_name = localStorage.getItem(localStorageLastName);
  const street_name = localStorage.getItem(localStorageStreet);
  const house_number = localStorage.getItem(localStorageHouse);
  const zipcode = localStorage.getItem(localStorageZip);
  const city = localStorage.getItem(localStorageCity);
  const phonenumber = localStorage.getItem(localStoragePhone);
  const email = localStorage.getItem(localStorageEmail);
  const id = localStorage.getItem(localStorageUserId);
  const orderid = localStorage.getItem(localStorageOrderId);



  

  if (jwt) {
    initialState = { jwt, first_name, last_name, street_name, house_number, zipcode, city, phonenumber, email, id, orderid };
  }
} catch (e) {
  console.log(`Error retrieving data from local storage`, e);
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return payload;

    case USER_LOGOUT:
      return null;

    default:
      return state;
  }
}
