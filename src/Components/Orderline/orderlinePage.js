import React from "react";

export default props => {
  const { id, price, quantity } = props.orderline;
  const { image, product_name } = props.orderline.product;

  return (
    <div className="card mb-3" key={id}>
      <img
        className="cart-detail-header-image"
        src={image}
        alt="product"
        width="300"
      />
      <div className="container p-2">
        <b>{product_name} </b>
        <p>€ {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
