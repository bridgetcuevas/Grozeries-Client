import login from "./login";
import signup from "./signup";
import products from "./products";
import shops from "./shops";
import categories from "./categories";
import { combineReducers } from "redux";
import appStatus from "./appStatus";
import product from "./product";
import currentUser from "./currentUser";
import { reducer as burgerMenu } from "redux-burger-menu";
import cart from "./cart";
import users from "./users";

export default combineReducers({
  login,
  signup,
  products,
  shops,
  categories,
  appStatus,
  product,
  currentUser,
  cart,
  users,
  burgerMenu
});
