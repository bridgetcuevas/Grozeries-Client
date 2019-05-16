import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingPage";
import SignupFormContainer from "./Components/Signup/signupFormContainer";
import LoginContainer from "./Components/Login/loginContainer";
import LogoutPage from "./Components/Logout/LogoutPage";
import ProductList from "./Components/Product/productListPage";
import ProductDetails from "./Components/Product/productPage";
import ShopList from "./Components/Shop/shopListPage";
import ShopDetails from "./Components/Shop/shopPage";
import CategoryList from "./Components/Category/categoryListPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/register" exact component={SignupFormContainer} />
    <Route path="/logins" exact component={LoginContainer} />
    <Route path="/logout" exact component={LogoutPage} />
    <Route path="/products" exact component={ProductList} />
    <Route path="/shops" exact component={ShopList} />
    <Route path="/shops/:shopId" exact component={ShopDetails} />
    <Route path="/products/:productId" exact component={ProductDetails} />
    <Route path="/categories" exact component={CategoryList} />
  </Switch>
);

export default Router;
