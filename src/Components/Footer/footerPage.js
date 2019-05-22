import React from "react";
import "./footerPage.css";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footer">
      <footer>
        <p>
          <NavLink to="/contact" className="navlink">
            Contact us
          </NavLink>
        </p>
        <p> © Grozeries 2019</p>
      </footer>
    </div>
  );
}
