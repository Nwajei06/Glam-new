import React from "react";
import "../style.css";
// import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";


import FirstProduct from "../assets/images/first-product.png";
import ProductCard from "../components/ProductCard.";

function Shop() {
  const products = [
    { id: 1, name: "Natural Face Cream", price: "12,000", img: FirstProduct },
    { id: 2, name: "Glow Serum", price: "18,500", img: FirstProduct },
    { id: 3, name: "Hair Growth Oil", price: "9,200", img: FirstProduct },
    { id: 4, name: "Organic Soap", price: "4,000", img: FirstProduct },
    { id: 5, name: "Perfume Essence", price: "28,000", img: FirstProduct },
    { id: 6, name: "Clay Mask", price: "15,000", img: FirstProduct },
  ];

  return (
    <div className="shop-page">
      <Navbar />

      <header className="shop-hero">
        <h1>SHOP</h1>
        {/* <img src="/images/shophero.png"  alt="" /> */}
      </header>

      <div className="product-section">
        <h2 className="section-title">Products</h2>

        <div className="product-grid">
          {products.map((p) => (
            // <ProductCard
            //   key={p.id}
            //   img={p.img}
            //   name={p.name}
            //   price={p.price}
            // />
            <ProductCard
             key={p.id}
               img={p.img}
              name={p.name}
              price={p.price}
            
            
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
