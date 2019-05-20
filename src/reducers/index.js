import { combineReducers } from "redux";
import appStatus from "./appStatus";
import { reducer as burgerMenu } from "redux-burger-menu";
import cart from "./cart";
import categories from "./categories";
import currentUser from "./currentUser";
import login from "./login";
import orders from "./orders";
import product from "./product";
import products from "./products";
import shops from "./shops";
import signup from "./signup";
import users from "./users";

export default combineReducers({
 appStatus,
  burgerMenu,
  cart,
  categories,
  currentUser,
  login,
  orders,
  product,
  products,
  shops,
  signup,
  users

});
