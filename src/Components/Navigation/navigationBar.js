import React from "react";
import { Component } from "react";
import "./navigationBar.css";
import Menu from "../Menu/menu";

export default class Navigation extends Component {
  componentDidMount() {}

  showMenu(event) {
    event.preventDefault();
  }

  render() {
    return (
      <header className="navBar">
        <nav className="navBar_navigation">
          <div className="navBar_logo">
            <a href="/">Grozeries</a>
          </div>
          <div className="spacer" />
          <div className="navBar_navigation-items">
            <ul>
              <li> <a href="/shops">Shops</a> </li>
              <li> <a href="/cart">Cart</a> </li>
              <li> <a href="/users">Profile</a> </li>
              <li> <a href="/logins">Login</a> </li>
              <li> <a href="/logout">Logout</a> </li>
              <li ><a href="/register">Signup</a> </li>
            </ul>
          </div>
        </nav>
        <Menu className="menu">
          <a className="menu-item" href="/shops">
            Shops
          </a>
          <a className="menu-item" href="/cart">
            Cart
          </a>
          <a className="menu-item" href="/users">
            Profile
          </a>
          <a className="menu-item" href="/logins">
            Login
          </a>
          <a className="menu-item" href="/logout">
            Logout
          </a>
          <a className="menu-item" href="/register">
            Signup
          </a>
        </Menu>
      </header>
    )
  };

}