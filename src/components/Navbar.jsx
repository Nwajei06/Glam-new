import React from "react";
import "../style.css";
import { FaGlobe, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleUnavailable = (e) => {
    e.preventDefault();
    alert("This feature is not available yet.");
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-logo">
          <NavLink className="nav-logo" to="/">
            GLAM
          </NavLink>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/user" className="nav-link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/shop"
            className="nav-link"
            onClick={handleUnavailable}
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/glam-beauty"
            className="nav-link"
            onClick={handleUnavailable}
          >
            Glam Beauty
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={handleUnavailable}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about-us"
            className="nav-link"
            onClick={handleUnavailable}
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <NavLink to="/" onClick={handleUnavailable}>
          <FaGlobe className="icon" />
        </NavLink>

        <NavLink
          to="/cart"
          className="nav-link"
          onClick={handleUnavailable}
        >
          <FaShoppingCart className="icon" />
        </NavLink>

        <NavLink
          to="/login"
          className="nav-link"
          onClick={handleUnavailable}
        >
          <FaUser className="icon" />
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;