import React from "react";
import { Link } from "react-router-dom";
import "./shop.css";

export default props => {
  const { shop_image, shop_name } = props.shop;

  return (
    <Link to={`/shops/${props.shop.id}`}>
      <img className="list-item-image" src={shop_image} alt="shop" />
      <p>{shop_name} </p>
    </Link>
  );
};
