import React, { useState } from "react";
import "../components/signup-responsive.css";
import { NavLink } from "react-router-dom";

export default function SignupCard({ onSignup }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validEmail = /\S+@\S+\.\S+/.test(email);
  const validPassword = password.length >= 8;
  const passwordsMatch = password === confirm && confirm.length > 0;
  const canSubmit = validEmail && validPassword && passwordsMatch && agree && fullname.trim().length > 1;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (canSubmit && onSignup) onSignup({ fullname, email, password });
  }

  return (
    <div className="sr-page">
      <div className="sr-card">
        {/* visual / left */}
        <div className="sr-visual" aria-hidden="true">
          <div className="sr-visual-inner">
            <div className="sr-mark" />
            <h2>Join Glam</h2>
            <p>Sign up to access member benefits and tools.</p>
          </div>
        </div>

        {/* form / right */}
        <div className="sr-form-wrap">
          <div className="sr-top-sub">Create account</div>
          <h1 className="sr-title">Sign up</h1>
          <p className="sr-sub">Create your account to get started.</p>

          <form className="sr-form" onSubmit={handleSubmit} noValidate>
            <label className="sr-label">Full name</label>
            <div className={`sr-field ${fullname.trim().length > 1 ? "valid" : ""}`}>
              <input value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Your full name" required />
            </div>

            <label className="sr-label">Email</label>
            <div className={`sr-field ${validEmail ? "valid" : ""}`}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
              {validEmail && <span className="sr-check">✓</span>}
            </div>

            <label className="sr-label">Password</label>
            <div className={`sr-field ${validPassword ? "valid" : ""}`}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" required />
              {validPassword && <span className="sr-check">✓</span>}
            </div>

            <label className="sr-label">Confirm password</label>
            <div className={`sr-field ${passwordsMatch ? "valid" : ""}`}>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Repeat password" required />
              {passwordsMatch && <span className="sr-check">✓</span>}
            </div>

            <label className="sr-tos">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span> I agree to the <a href="#terms">Terms & Privacy</a></span>
            </label>

            <button type="submit" className={`sr-btn-primary ${canSubmit ? "" : "sr-disabled"}`} disabled={!canSubmit && submitted === false ? false : !canSubmit}>
              Create account
            </button>

            <div className="sr-join">Already have an account? <NavLink to="/login">Login</NavLink></div>

            <div className="sr-or"><span>Or</span></div>

            <button type="button" className="sr-btn-social sr-google">Create with Google</button>
            <button type="button" className="sr-btn-social sr-fb">Create with Facebook</button>
          </form>
        </div>
      </div>
    </div>
  );
}
