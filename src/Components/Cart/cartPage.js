import React from "react";


export default props => {
  const {
    image,
    price,
    product_name
  } = props.cart;
  const detail = props.detail;

  if (!detail) {
    // const shopId = props.shopId
    return (
        <div>
        <p>{product_name} </p>
        <img src={image} alt="product" width="300" />
        <p>Price: {price}</p>

    
      </div>
    );
  } else {
    return (
      <div>
        <img src={image} alt="product" width="300" />
        <p>Product: {product_name} </p>
        <p>Price: {price}</p>
        <br />
      </div>
    );
  }
};
