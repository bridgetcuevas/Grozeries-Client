import React from "react";

export default props => {
  const { id } = props.order;
  // const detail = props.detail;

  // if (!detail) {
  // const shopId = props.shopId
  console.log('props', props)
  return (
    <div>
      <p> Order #{id} </p>
      {/* <img src={image} alt="product" width="300" />
      <p>Price: {price}</p> */}
    </div>
  );
}