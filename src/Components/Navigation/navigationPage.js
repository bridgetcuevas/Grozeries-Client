import React from "react";

import "./navigation.css";

export default function Navigation (props) {
  return (
  <header className="navBar">
    <nav className="navBar_navigation">
      <div className="navBar_logo"> <a href="/">Grozeries</a></div>
      <div className="spacer"/>
      <div className="navBar_navigation-items"> 
      <ul>
        <li><a href="/shops">Shops</a></li>
        <li><a href="/cart">My Cart</a></li>
        <li><a href="/users">Profile</a></li>
        <li><a href="/logins">Login</a></li>
        <li><a href="/logout">Logout</a></li>
        <li><a href="/register">Sign Up</a></li>
      </ul>
      </div>
    </nav>
  </header>
)
};



