import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import SignupFormContainer from "./Components/Signup/signupFormContainer";
import LoginContainer from "./Components/Login/loginContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Route path="/register" exact component={SignupFormContainer} />
          <Route path="/logins" exact component={LoginContainer} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
