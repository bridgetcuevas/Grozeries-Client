import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const {
    shop_image,
    shop_name,
    description,
    business_hours,
    street_name,
    house_number,
    zipcode,
    city,
    phonenumber,
    email
  } = props.shop;
  const detail = props.detail;

  if (!detail) {
    return (
      <Link to={`/shops/${props.shop.id}`}>
        <img src={shop_image} alt="shop" width="300" />
        <p>{shop_name} </p>
      </Link>
    )
  } else {
    return (
      <div>
        <img src={shop_image} alt="shop" width="300" />
        <p>{shop_name} </p>
        <p>{description} </p>
        <p>{business_hours} </p>
        <p>
          {street_name} {house_number}
        </p>
        <p>
          {zipcode}
          {city}
        </p>
        <p>{phonenumber}</p>
        <p>{email}</p>
        <br />
      </div>
    );
  }
};
