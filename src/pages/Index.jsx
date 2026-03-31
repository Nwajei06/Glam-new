import React from "react";
import "../style.css";
import IconPill from "../components/IconPill";
import { FaLeaf, FaCommentDots, FaSuitcase, FaCamera } from "react-icons/fa"; 




function Index() {
  const pillItems = [
    { icon: FaCamera, label: "cam", onClick: () => console.log("camera") },
    { icon: FaCommentDots, label: "chat", onClick: () => console.log("chat") },
    { icon: FaSuitcase, label: "case", onClick: () => console.log("case") },
    { icon: FaLeaf, label: "leaf", onClick: () => console.log("leaf") },
  ];

  return (
    <div className="home">
      <div className="hero">
        <img src="/images/homepage.png" alt="hero" className="hero-img" />

        <div className="hero-content">
          <h1 className="hero-title">Hello User</h1>
          <p className="hero-sub">How can Glam Help you</p>

          <IconPill items={pillItems} />
        </div>
    
      </div>

   

    </div>
  );
}

export default Index;
