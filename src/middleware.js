import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "./actions/users";
import { localStorageJwtKey, localStorageFirstName, localStorageLastName, localStorageCity, localStorageEmail, localStorageHouse, localStoragePhone, localStorageStreet, localStorageZip, localStorageUserId, localStorageOrderId } from "./constants";

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt);
      localStorage.setItem(localStorageFirstName, action.payload.first_name);
      localStorage.setItem(localStorageLastName, action.payload.last_name);
      localStorage.setItem(localStorageStreet, action.payload.street_name);
      localStorage.setItem(localStorageHouse, action.payload.house_number);
      localStorage.setItem(localStorageZip, action.payload.zipcode);
      localStorage.setItem(localStorageCity, action.payload.city);
      localStorage.setItem(localStoragePhone, action.payload.phonenumber);
      localStorage.setItem(localStorageEmail, action.payload.email);
      localStorage.setItem(localStorageUserId, action.payload.id);
      localStorage.setItem(localStorageOrderId, action.payload.orderid);
      console.log(action.payload.orderid)
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey);
      localStorage.removeItem(localStorageFirstName);
      localStorage.removeItem(localStorageLastName);
      localStorage.removeItem(localStorageStreet);
      localStorage.removeItem(localStorageHouse);
      localStorage.removeItem(localStorageZip);
      localStorage.removeItem(localStorageCity);
      localStorage.removeItem(localStoragePhone);
      localStorage.removeItem(localStorageEmail);
      localStorage.removeItem(localStorageUserId);
    }
  } catch (error) {
    console.log(`Interaction with LocalStorage went wrong`, error);
  }

  next(action);
};

// export const socketIo = socketio => store => next => action => {
//   if (action.type === USER_LOGIN_SUCCESS) {
//     const jwt = action.payload.jwt;
//     socketio.connect(store.dispatch, jwt);
//   }
//   if (action.type === USER_LOGOUT) {
//     socketio.disconnect();
//   }

//   next(action);
// };
