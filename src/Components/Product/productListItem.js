import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

export default props => {
  const { image, product_name, description, price } = props.product;

  return (
    <div>
      <img src={image} alt="product" />
      <p>{product_name} </p>
      <p>Description: {description}</p>
      <p>Price: € {price}</p>
      <Link to={`/products/${props.product.id}`}>
        <button className="btn btn-primary" value={"hello"}>
          View Details
        </button>
      </Link>
      {/* <button value={"hello"} onClick={props.handleClick}>
          Add to cart
        </button> */}
    </div>
  );
};
