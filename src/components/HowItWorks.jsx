import { FiCamera } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

export default function HowItWorks() {
  return (
    <section className="how">
      <h2 className="section-title">How It Works</h2>

      <div className="how-line"></div>

      <div className="how-steps">
        {/* SCAN */}
        <div className="how-card">
          <div className="how-icon">
            <FiCamera />
          </div>
          <h4>SCAN</h4>
          <p>Take a selfie or upload a photo</p>
        </div>

        {/* ANALYZE */}
        <div className="how-card highlight">
          <div className="how-icon highlight-icon">
            <BsStars />
          </div>
          <h4>ANALYZE</h4>
          <p>AI detects skin type, acne, dryness & more</p>
        </div>

        {/* SHOP */}
        <div className="how-card">
          <div className="how-icon">
            <FiShoppingBag />
          </div>
          <h4>SHOP</h4>
          <p>Get personalized routine & products instantly</p>
        </div>
      </div>
    </section>
  );
}
