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

  return (
    <div>
      <Link to={`/shops/${props.product.shopId}`}>
        <button className="btn btn-primary" value={"hello"}>
          Back to shop
        </button>
      </Link>
      <br />
      <img src={image} alt="product" width="300" />
      <p>Product: {product_name} </p>
      <p>Description: {description} </p>
      <p>Price: € {price}</p>
      <p>Price by: {prices_by}</p>
      <p>Quantity: {quantity} </p>
      <p>Ingriedients: {ingredients} </p>
      <p>Allergens: {allergens} </p>
      <p>Shop: {shopId}</p>

      <br />
    </div>
  );
};
