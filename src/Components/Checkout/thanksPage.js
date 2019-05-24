import React from "react";
import "./thanks.css";

export default function ThanksPage(props) {
  return (
      
    <div className="thanks-div pt-4">
      <h1 className="h1-thanks ">
       Thank you for your order! {" "}
      </h1>
      <p className="p-thanks"> You will recieve an email confirmation shortly. </p>
    </div>
  
   
  );
}