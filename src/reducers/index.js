import login from "./login";
import signup from "./signup";
import products from "./products";
import shops from "./shops";
import categories from "./categories";
import {combineReducers} from "redux";

export default combineReducers({
  login,
  signup,
  products,
  shops,
  categories
});
