import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { MdAddShoppingCart } from "react-icons/md";

export default props => {
  const { image, product_name, id, price } = props.product;
  console.log("props", props);
  const userId = props.userId;
  const orderid = props.orderid;
  // const inStock = in_stock === true;

  return (
    <div className="card mb-3">
      <img className="product-list-image" src={image} alt="product" />
      <div className="p-3">
        <b>{product_name} </b>
        <p>Price: € {price}</p>
        {/* {in_stock === true(
          <div> */}
            <Link to={`/products/${props.product.id}`}>
              <button className="btn btn-outline-success" value={"hello"}>
                View Details
              </button>
            </Link>
            <button
              className="btn btn-outline-secondary"
              onClick={event => props.handleClick(event, id, userId, orderid)}
            >
              <MdAddShoppingCart />
            </button>
          </div>
        {/* )}
      </div> */}
    </div>
  );
};
