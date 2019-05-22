import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { MdAddShoppingCart } from "react-icons/md";

export default props => {

  console.log(props);
  const { id, image, product_name, price } = props.product;


  return (
    <div className="card mb-3">
      <img className="product-list-image" src={image} alt="product" />
      <div className="p-3">
        <b>{product_name} </b>
        <p>Price: € {price}</p>
        <Link to={`/products/${id}`}>
          <button className="btn btn-outline-success" value={"hello"}>
            View Details
          </button>
        </Link>
        <button

          className="btn btn-outline-secondary"
          onClick={event => props.handleClick(event)}
//           onClick={(e)=> props.handleClick(e, id, userId) }

        >
          <MdAddShoppingCart />
        </button>
      </div>
    </div>
  );
};
