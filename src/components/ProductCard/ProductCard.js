import React from "react";
import "./product-card.scss";

function ProductCard({ title, price, description, image }) {
  return (
    <>
      <div className="product-card">
        <div className="cards">
          <img className="p-img" alt="products" src={image} height={100} width={100} />
          <h4 className="name">{title}</h4>
          <p className="description">{description}</p>
          <h5><span>$</span>{price}</h5>
          <button className="product-btn">Add to Card</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
