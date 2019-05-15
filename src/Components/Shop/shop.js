import React from "react";
import { Link } from "react-router-dom";


export default props => {

  const { img, shopName, description, businessHours, address, phoneNumber } = props.product;
  const detail = props.detail;

  if (!detail) {
    return (
      <Link to={`/shops/${props.shop.id}`}>
        <img src={img} alt='shop'/>
        <p>Shop: {shopName} </p>
      </Link>
    );
  } else {
    return (
      <div>
        <img src={img} alt='shop'/>
        <p>Shop: {shopName} </p>
        <p>Description: {description} </p>
        <p>Business Hours: {businessHours} </p>
        <p>Address: {address}</p>
        <p>Telephone: {phoneNumber}</p>
        <br />
      </div>
    );
  }
};
