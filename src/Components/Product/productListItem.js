import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

export default props => {
  console.log(props)
  const { image, product_name, description, price, id } = props.product;
  const { userId } = props.userId;
  return (
    <div className="card mb-3">
      <img src={image} alt="product" />
      <div className="p-3">
        <b>{product_name} </b>
        <p>Description: {description}</p>
        <p>Price: € {price}</p>
        <Link to={`/products/${id}`}>
          <button className="btn btn-outline-success" value={"hello"}>
            View Details
          </button>
        </Link>
        <button
          className="btn btn-outline-success"
          onClick={(e)=> props.handleClick(e, id, userId) }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
