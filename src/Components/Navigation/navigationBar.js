import React from "react";
import { Component } from "react";
import "./navigationBar.css";
import Menu from "../Menu/menu";
import {NavLink} from "react-router-dom"

export default class Navigation extends Component {
  componentDidMount() {}

  showMenu(event) {
    event.preventDefault();
  }

  render() {
    return (
      <header className="navBar">
        <nav className="navbar navBar_navigation">
          <div className="navBar_logo">
            <NavLink to="/"className="navbar-brand" >
              Grozeries
            </NavLink>
          </div>
          <div className="spacer" />
          <div className="navBar_navigation-items">
            <ul>
              <li>
                <NavLink to="/shops">Shops</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/users/:id">Profile</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/logins">Login</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/logout">Logout</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/register">Signup</NavLink>{" "}
              </li>
            </ul>
          </div>
        </nav>
        <Menu className="menu">
          <NavLink className="menu-item" to="/shops">
            Shops
          </NavLink>
          <NavLink className="menu-item" to="/cart">
            Cart
          </NavLink>
          <NavLink className="menu-item" to="/users">
            Profile
          </NavLink>
          <NavLink className="menu-item" to="/logins">
            Login
          </NavLink>
          <NavLink className="menu-item" to="/logout">
            Logout
          </NavLink>
          <NavLink className="menu-item" to="/register">
            Signup
          </NavLink>
        </Menu>
      </header>
    );
  }
}
