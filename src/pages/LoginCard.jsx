// src/components/LoginResponsive.jsx
import React, { useState } from "react";
import "../components/login-card.css";
import { NavLink } from "react-router-dom";

/**
 * Responsive login:
 * - Desktop: two-column "book" layout (visual left, form right)
 * - Mobile: stacked layout following your Figma mobile (no phone shell)
 *
 * Place images used by the visual (optional) in /public/images and update CSS background if needed.
 */

export default function LoginCard({ onLogin }) {
  const [email, setEmail] = useState("cody.fisher45@example.com");
  const [password, setPassword] = useState("56772809hjs");
  const [submitted, setSubmitted] = useState(false);

  const validEmail = /\S+@\S+\.\S+/.test(email);
  const validPassword = password.length >= 6;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (validEmail && validPassword && onLogin) onLogin({ email, password });
  }

  return (
    <div className="lr-page">
      <div className="lr-card">
        {/* LEFT VISUAL - visible on desktop, hidden on mobile */}
        <div className="lr-visual" aria-hidden="true">
          <div className="lr-visual-inner">
            {/* optional: replace with image tag if you prefer */}
            <div className="lr-visual-circle" />
            <h2>Welcome back</h2>
            <p>Secure access to your dashboard</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lr-form-wrap">
          <div className="lr-top-sub">Login - Success</div>

          <h1 className="lr-title">Login to your account</h1>
          <p className="lr-sub">It’s great to see you again.</p>

          <form onSubmit={handleSubmit} className="lr-form" noValidate>
            <label className="lr-label" htmlFor="lr-email">Email</label>
            <div className={`lr-field ${validEmail ? "valid" : ""}`}>
              <input
                id="lr-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {validEmail && <span className="lr-check">✓</span>}
            </div>

            <label className="lr-label" htmlFor="lr-pass">Password</label>
            <div className={`lr-field ${validPassword ? "valid" : ""}`}>
              <input
                id="lr-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {validPassword && <span className="lr-check">✓</span>}
            </div>

            <a className="lr-forgot" href="#reset">Reset your password</a>

            <button className="lr-btn-primary" type="submit">Login</button>

            <div className="lr-join">Don’t have an account? <NavLink to="/signup">Join</NavLink></div>

            <div className="lr-or"><span>Or</span></div>

            <button type="button" className="lr-btn-social lr-google">Login with Google</button>
            <button type="button" className="lr-btn-social lr-fb">Login with Facebook</button>
          </form>
        </div>
      </div>
    </div>
  );
}
