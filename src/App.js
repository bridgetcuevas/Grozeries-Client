import React from "react";
import { NavLink } from "react-router-dom";

import Router from "./Router";
const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shops">Shops</NavLink>
      </li>
      <li>
        <NavLink to="/logins">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  </nav>
);
function App() {
  return (
    <div>
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
