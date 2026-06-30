import React from "react";
import { FaRegComment, FaShoppingBag, FaLeaf, FaRegSmile } from "react-icons/fa";
import "../style.css";
import { NavLink } from "react-router-dom";


import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Routines from "../components/Routines";
import Products from "../components/Products";
import SkinProtection from "../components/SkinProtection.jsx";
import CTA from "../components/CTA";

/**
 * Put these images into public/images/
 * ellipse.png, piascart.png, leafgroup.png, singleleaf.png, invert3.png, invert1.png, Vector3.png, Vector1.png
 */

export default function Mainhome() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* LEFT SECTION */}
        <div className="hero-left">
          <h1 className="hero-title">
            Your Personal Skin <br /> Companion
          </h1>

          <p className="hero-desc">
            Your personal Skin Companion

Glam is an intelligent skincare companion designed to help you better understand your skin, build effective routines, and maintain a consistent, healthy glow.
Get personalized insights, track your daily routines, and interact with your AI assistant for tailored skincare guidance anytime you need it.
          </p>

          <div className="hero-ctas">
            <NavLink to="https://tally.so/r/LZkKeG"><button className="btn btn-primary">Sign up</button></NavLink>
            <NavLink to="https://tally.so/r/LZkKeG"> <button className="btn btn-ghost">Login</button> </NavLink>
            <NavLink to="https://tally.so/r/LZkKeG"> <button className="btn btn-ghost">Join waitlist</button></NavLink>
          </div>
        </div>

        {/* CENTER / RIGHT — IMAGE COMPOSITION */}
        <div className="hero-right" aria-hidden="true">
          <img src="/images/ellipse.png" className="hero-ellipse" alt="" />
          <img src="/images/piascart.png" className="hero-woman" alt="model head" />
          <img src="/images/leafgroup.png" className="hero-leafgroup" alt="" />
          <img src="/images/singleleaf.png" className="hero-singleleaf-top" alt="" />

          {/* LEFT-BOTTOM WAVES (moved INSIDE hero-right so they sit behind the woman) */}
          {/* <div className="hero-waves-left" aria-hidden="true"> */}
          {/* <img src="/images/invert3.png" className="wave-left wave-dark-left" alt="dark left wave" /> */}
          {/* <img src="/images/invert1.png" className="wave-left wave-light-left" alt="light left wave" /> */}
          {/* </div> */}
        </div>

        {/* RIGHT ICON COLUMN */}
        <aside className="hero-icons" aria-label="quick actions">
          <ul>
            <li>
              <span className="icon-wrap">
                <FaRegComment className="icon" />
              </span>
              <span>Scan your face</span>
            </li>
            <li>
              <span className="icon-wrap">
                <FaRegComment className="icon" />
              </span>
              <span>Chat with Ai</span>
            </li>
            <li>
              <span className="icon-wrap">
                <FaShoppingBag className="icon" />
              </span>
              <span>Shop from us</span>
            </li>
            <li>
              <span className="icon-wrap">
                <FaLeaf className="icon" />
              </span>
              <span>Routines</span>
            </li>
          </ul>
        </aside>
      </div>

      {/* RIGHT-SIDE WAVES (existing) */}
      <div className="hero-waves" aria-hidden="true">
        {/* <img src="/images/Vector3.png" className="wave wave-dark" alt="" /> */}
        {/* <img src="/images/Vector1.png" className="wave wave-light" alt="" /> */}
      </div>
    <div>
        <Features />
      <HowItWorks />
      <Routines />
      <Products />
      <SkinProtection />
      <CTA />
    </div>
    </section>
    
  );
}
