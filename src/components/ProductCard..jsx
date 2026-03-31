import React from "react";
import "../style.css";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="product-card">
      <img src={img} alt={name} className="product-img" />

      <div className="product-info">
        <h3 className="product-title">{name}</h3>

        <p className="product-price">₦{price}</p>
      </div>

      <button className="product-add">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
