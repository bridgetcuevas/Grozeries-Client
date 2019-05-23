import React from "react";

export default props => {
  const {
    image,
    product_name,
    description,
    price,
    prices_by,
    // quantity,
    ingredients,
    allergens,
    in_stock,
    // shopId
  } = props.product;

  const INSTOCK = in_stock === true && (
    <div>
      <img className="product-page-image" src={image} alt="product" />
      <div className="container mt-5 mb-5">
        <h2 className="text-capitalize">{product_name} </h2>
        <p>{description} </p>
        <p>€ {price}</p>
        {/* <p>Quantity: {quantity} </p> */}
        <p>Ingriedients: {ingredients} </p>
        <p>Allergens: {allergens} </p>
        {/* <p>Shop: {shopId}</p> */}
        <div><input type="number" name="quantity" min="1" max="10000"/>  {prices_by}</div>
      </div>
    </div>
  );

  const OUTOFSTOCK = in_stock === false && (
    <div>
      <img className="product-page-image" src={image} alt="product" />
      <div className="container mt-5 mb-5">
        <h2 className="text-capitalize">{product_name} </h2>
        <p>{description} </p>
        <p style={{color:"red"}}>OUT OF STOCK</p>
        <p>€ {price}</p>
        <p>Ingriedients: {ingredients} </p>
        <p>Allergens: {allergens} </p>
        </div>
    </div>
  );

   return (
    <div>{INSTOCK}{OUTOFSTOCK}</div>
  );
};
