import { FiDroplet, FiShield } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

export default function Products() {
  return (
    <section className="products">
      <h2 className="section-title">Products Chosen For Your Skin</h2>

      <div className="products-grid">
        {/* Card 1 */}
        <div className="product-card figma">
          <span className="product-chip">For Oily Zones</span>

          <div className="product-shape arch">
            <FiDroplet />
          </div>

          <div className="product-info">
            <h4>Balance Gel Cleanser</h4>
            <span className="price">$24</span>
          </div>

          <button>Add to Routine</button>
        </div>

        {/* Card 2 */}
        <div className="product-card figma">
          <span className="product-chip">For Dark Spots</span>

          <div className="product-shape oval">
            <BsSun />
          </div>

          <div className="product-info">
            <h4>Radiance Vitamin C</h4>
            <span className="price">$48</span>
          </div>

          <button>Add to Routine</button>
        </div>

        {/* Card 3 */}
        <div className="product-card figma">
          <span className="product-chip">For Sensitivity</span>

          <div className="product-shape rect">
            <FiShield />
          </div>

          <div className="product-info">
            <h4>Barrier Restore Cream</h4>
            <span className="price">$36</span>
          </div>

          <button>Add to Routine</button>
        </div>
      </div>
    </section>
  );
}
