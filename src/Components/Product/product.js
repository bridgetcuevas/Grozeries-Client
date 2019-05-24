import React from "react";

export default props => {

  const 
    {image,
      product_name,
      description,
      price,
      // prices_by,
      // quantity,
      ingredients,
      allergens,
      in_stock,
      // shopId
    } = props.product;

    const OUTOFSTOCK = in_stock === false && (
      <div>
          <p style={{color:"red"}}>OUT OF STOCK</p>
      </div>
    );

  return(
    <div>
        <img className="product-page-image" src={image} alt="product" />
        <div className="container mt-5 mb-5">
          <h2 className="text-capitalize">{product_name} </h2>
          <p>{description} </p>
          {OUTOFSTOCK}
          <p>€ {price}</p>
          <p>Ingriedients: {ingredients} </p>
          <p>Allergens: {allergens} </p>
        </div>
    </div>
  );
}
