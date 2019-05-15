import React from "react";
import { Link } from "react-router-dom";


export default props => {

  const { img, productName, description, price, priceBy, quantity, ingriedients, allergens, active, inStock } = props.product;
  const detail = props.detail;

  if (!detail) {
    return (
      <Link to={`/products/${props.product.id}`}>
        <p>Product: {productName} </p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>

        <br />
      </Link>
    );
  } else {
    return (
      <div>
        <img src={img} alt='product'/>
        <p>Product: {productName} </p>
        <p>Description: {description} </p>
        <p>Price: {price}</p>
        <p>Price by: {priceBy}</p>
        <p>Quantity: {quantity} </p>
        <p>Ingriedients: {ingriedients} </p>
        <p>Allergens: {allergens} </p>
        <p>Active: {active}</p>
        <p>In Stock: {inStock}</p>
        <br />
      </div>
    );
  }
};
