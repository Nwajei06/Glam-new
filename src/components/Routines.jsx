import { FiSun, FiMoon } from "react-icons/fi";

export default function Routines() {
  return (
    <section className="routines">
      <h2 className="section-title">Routines Built Just For You</h2>
      <p className="subtitle">Based on your unique skin analysis</p>

      <div className="routine-cards">
        {/* Morning */}
        <div className="routine light">
          <div className="routine-head">
            <div className="routine-icon">
              <FiSun />
            </div>
            <span>Morning Routine</span>
          </div>

          <div className="routine-steps">
            <span>Cleanse</span>
            <span>Treat</span>
            <span>Hydrate</span>
            <span>Protect</span>
          </div>
        </div>

        {/* Night */}
        <div className="routine dark">
          <div className="routine-head">
            <div className="routine-icon dark-icon">
              <FiMoon />
            </div>
            <span>Night Routine</span>
          </div>

          <div className="routine-steps">
            <span>Cleanse</span>
            <span>Repair</span>
            <span>Moisturize</span>
          </div>
        </div>
      </div>

      <p className="routine-note">
        ✨ No guessing. No trial & error. Just results.
      </p>
    </section>
  );
}
