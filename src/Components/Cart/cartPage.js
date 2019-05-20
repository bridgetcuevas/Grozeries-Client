import React from "react";

export default props => {
  const { id, image, price, product_name } = props.orderlines;

  return (
    <div key={id}>
      <p>{product_name} </p>
      <img src={image} alt="product" width="300" />
      <p>Price: {price}</p>
    </div>
  );
};
