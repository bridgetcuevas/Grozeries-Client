import React from "react";
import { Link } from "react-router-dom";
import "./shop.css";

export default props => {
  const { shop_image, shop_name } = props.shop;

  return (
    <Link className="item-link" to={`/shops/${props.shop.id}`}>
      <img className="list-item-image mb-1" src={shop_image} alt="shop" />
      <p>{shop_name} </p>
    </Link>
  );
};
