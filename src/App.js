import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import SignupFormContainer from "./Components/Signup/signupFormContainer";
import LoginContainer from "./Components/Login/loginContainer";
import ProductList from "./Components/Product/productListPage";
import ProductDetails from "./Components/Product/productPage";
import ShopList from "./Components/Shop/shopListPage";
import ShopDetails from "./Components/Shop/shopPage";
import CategoryList from "./Components/Category/categoryListPage";

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Route path="/register" exact component={SignupFormContainer} />
          <Route path="/logins" exact component={LoginContainer} />
          <Route path="/products" exact component={ProductList} />

          <Route path="/shops" exact component={ShopList} />
          <Route path="/shops/:shopId" exact component={ShopDetails} />
          <Route
            path="/shops/:shopId/products/:productId"
            exact
            component={ProductDetails}
          />
          <Route path="/categories" exact component={CategoryList} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
