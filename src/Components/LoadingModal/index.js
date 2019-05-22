import React from "react";
import logo from "./grozeriesLogo.png";
import "./loadingModal.css";

export default () => {
  return (
    <div className="loading-container">
      <div className="loading-square">
        <img className="loading-modal" src={logo} className="LoadingModal" alt="logo" />
      </div>
    </div>
  );
};
