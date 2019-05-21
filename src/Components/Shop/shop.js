import React from "react";
import "./shop.css";

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

  return (
    <div>
      <img className="shop-detail-header-image" src={shop_image} alt="shop" />
      <div className="container">
        <div className="mt-5 mb-5">
          <h2>{shop_name} </h2>
          <small>Opening:{business_hours} </small>
          <p>{description} </p>

          <p>
            {street_name} {house_number}{" "}
          </p>
          <p>{zipcode}</p>
          <p> {city}</p>
          <p>{phonenumber}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};
