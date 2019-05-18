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
        <h1>{shop_name} </h1>
        <img src={shop_image} alt="shop" width="300" />
        <p>{description} </p>
        <p>Hours: {business_hours} </p>
        <p>
          Address: {street_name}, {house_number} <br/>{zipcode}, {city}
        </p>
        <p>Phone: {phonenumber}</p>
        <p>E-mail: {email}</p>
        <br />
      </div>
    );
  }
};
