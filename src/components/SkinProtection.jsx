export default function SkinProtection() {
  return (
    <section className="skin-protection">
      <h2 className="section-title">Your Skin Data, Protected</h2>

      <div className="protection-grid">
        <div className="protection-card">
          <img
            src="/icons/lock.png"
            alt="private and encrypted icon"
          />
          <h4>Private & Encrypted</h4>
          <p>Your photos are analyzed instantly and never shared.</p>
        </div>

        <div className="protection-card">
          <img
            src="/icons/expert.png"
            alt="expert backed ai icon"
          />
          <h4>Expert-Backed AI</h4>
          <p>Algorithms built with board-certified dermatologists.</p>
        </div>

        <div className="protection-card">
          <img
            src="/icons/check.png"
            alt="safety first icon"
          />
          <h4>Safety First</h4>
          <p>Includes patch test guidance and contraindication warnings.</p>
        </div>
      </div>
    </section>
  );
}
