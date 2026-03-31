import React from "react";

/**
 * items: [{ icon: FaCamera, label: 'camera', onClick: () => {} }, ...]
 */
const IconPill = ({ items = [] }) => {
  return (
    <div className="hero-pill">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <button
            key={i}
            className="pill-btn"
            onClick={it.onClick}
            aria-label={it.label || `pill-btn-${i}`}
            title={it.label}
            type="button"
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export default IconPill;
