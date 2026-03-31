import React from "react";
import "../style.css";
import { FaGlobe, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-logo"><NavLink className="nav-logo" to="/" >GLAM</NavLink></div>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/user" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/glam-beauty" className="nav-link">Glam Beauty</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className="nav-link">About us</NavLink>
        </li>
      </ul>
<div>
      <div className="nav-right">

      <NavLink to="/" ><FaGlobe className="icon" /></NavLink>  
       <NavLink to="/cart" className="nav-link"><FaShoppingCart className="icon" /></NavLink>
        <NavLink to="/login" className="nav-link"><FaUser className="icon" /></NavLink>
        
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
