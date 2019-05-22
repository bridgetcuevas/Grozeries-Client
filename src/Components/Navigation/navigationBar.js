import React from "react";
import { Component } from "react";
import "./navigationBar.css";
import Menu from "../Menu/menu";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { MdShoppingCart } from "react-icons/md";

class Navigation extends Component {
  componentDidMount() {}

  showMenu(event) {
    event.preventDefault();
  }

  render() {
    return (
      <header className="navBar">
        <nav className="navbar navBar_navigation">
          <div className="navBar_logo">
            <NavLink to="/" className="navbar-brand">
              Grozeries
            </NavLink>
          </div>
          <div className="spacer" />
          <div className="navBar_navigation-items">
            <ul>
              <li>
                <NavLink to="/shops">Shops</NavLink>{" "}
              </li>
              {this.props.currentUser && (
                <li>

                  <NavLink to="/profile">Profile</NavLink>{" "}

                </li>
              )}
              {!this.props.currentUser && (
                <li>
                  <NavLink to="/logins">Login</NavLink>{" "}
                </li>
              )}
              {!this.props.currentUser && (
                <li>
                  <NavLink to="/register">Signup</NavLink>{" "}
                </li>
              )}
              {this.props.currentUser && (
                <li>

                  <NavLink to={`/orders/${this.props.currentUser.orderid}/orderlines`}>Cart</NavLink>{" "}


                </li>
              )}
              {this.props.currentUser && (
                <li>
                  <NavLink to="/logout">Logout</NavLink>{" "}
                </li>
              )}
            </ul>
          </div>
        </nav>
        <Menu className="menu">
          <NavLink className="menu-item" to="/shops">
            Shops
          </NavLink>
          {this.props.currentUser && (
            <NavLink className="menu-item" to={`/orders/${this.props.currentUser.orderid}/orderlines`}>
              Cart
            </NavLink>
          )}
          {this.props.currentUser && (
            <NavLink className="menu-item" to="/profile">
              Profile
            </NavLink>
          )}
          {!this.props.currentUser && (
            <NavLink className="menu-item" to="/logins">
              Login
            </NavLink>
          )}
          {this.props.currentUser && (
            <NavLink className="menu-item" to="/logout">
              Logout
            </NavLink>
          )}
          {!this.props.currentUser && (
            <NavLink className="menu-item" to="/register">
              Signup
            </NavLink>
          )}
            <NavLink className="menu-item" to="/contact">
              Contact
            </NavLink>
          
        </Menu>
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navigation);
