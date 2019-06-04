import React from "react";
import { Link } from "react-router-dom";

//Needs to be implemented
export default props => {
  const { type } = props.product;
  const detail = props.detail;

  if (!detail) {
    return (
      <Link to={`/categories/${props.category.id}`}>
        <p>Type: {type} </p>
      </Link>
    );
  } else {
    return (
      <div>
        <p>Type: {type} </p>
      </div>
    );
  }
};
