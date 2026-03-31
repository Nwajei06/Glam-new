import { FaRegSadTear, FaWallet, FaLayerGroup } from "react-icons/fa";

export default function Features() {
  return (
    <section className="features">
      <h2 className="section-title">Tired of skincare guessing games?</h2>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaRegSadTear />
          </div>
          <h4>Confused?</h4>
          <p>You don’t know your real skin type</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaWallet />
          </div>
          <h4>Wasted Money</h4>
          <p>Buying products that don’t work</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLayerGroup />
          </div>
          <h4>Mismatched</h4>
          <p>Routine not built for YOUR skin</p>
        </div>
      </div>

      <p className="features-note">
        “Your skin is unique. Your skincare should be too.”
      </p>
    </section>
  );
}
