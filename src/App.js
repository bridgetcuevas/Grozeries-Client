import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import signupFormContainer from "./Components/Signup/signupFormContainer";
import loginContainer from "./Components/Login/loginContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Route path="/logins" exact component={signupFormContainer} />
          <Route path="/register" exact component={loginContainer} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
