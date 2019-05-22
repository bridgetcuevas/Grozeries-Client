import React from "react";

export default props => {
  const { id, price, quantity, orderId, shopId, productId } = props.orderline;
  const { image, product_name } = props.orderline.product;
  // const { shop_name } = props.shop;

  return (
    <div key={id}>
      <p>Your order number: {orderId}</p>
      <p>{product_name} </p>
      <img src={image} alt="product" width="300" />
      <p>Quantity: {quantity}</p>
      <p>From: {shopId}</p>
      {/* display shop name
      <p>From: {shop_name} </p> */}
      <p>Price: €{price}</p>
    </div>
  );
};
