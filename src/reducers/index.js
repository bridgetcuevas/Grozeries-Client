import { combineReducers } from "redux";
import appStatus from "./appStatus";
import { reducer as burgerMenu } from "redux-burger-menu";
import categories from "./categories";
import currentUser from "./currentUser";
import login from "./login";
import order from "./orders";
import orderlines from "./orderlines";
import product from "./product";
import products from "./products";
import shops from "./shops";
import signup from "./signup";
import users from "./users";
import payments from "./payments";

export default combineReducers({
 appStatus,
  burgerMenu,
  categories,
  currentUser,
  login,
  order,
  orderlines,
  product,
  products,
  shops,
  signup,
  users,
  payments
});
