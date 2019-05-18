import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const {
    image,
    product_name,
    description,
    price,
    prices_by,
    quantity,
    ingredients,
    allergens,
    // in_stock,
    shopId
  } = props.product;
  const detail = props.detail;
  console.log("props", props);
  if (!detail) {
    // const shopId = props.shopId
    return (
      <div>
        <p>{product_name} </p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <Link to={`/products/${props.product.id}`}>
          <button value={"hello"}>View Details</button>
        </Link>
        <button value={"hello"} onClick={props.handleClick}>
          Add to cart
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <img src={image} alt="product" width="300" />
        <p>Product: {product_name} </p>
        <p>Description: {description} </p>
        <p>Price: {price}</p>
        <p>Price by: {prices_by}</p>
        <p>Quantity: {quantity} </p>
        <p>Ingriedients: {ingredients} </p>
        <p>Allergens: {allergens} </p>
        <p>Shop: {shopId}</p>

        <br />
      </div>
    );
  }
};
