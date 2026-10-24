import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EcoSphereLogo } from '../components/CustomIcons';

export const LoginScreen = () => {
  const { login, continueAsGuest, hciMode } = useApp();
  const isGood = hciMode === 'good';

  const [email, setEmail] = useState('jamie@example.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showBadAuthError, setShowBadAuthError] = useState(true);

  // Validation
  const isEmailValid = email && email.includes('@') && email.includes('.');
  const isPasswordValid = password && password.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (isGood) {
      if (isEmailValid && isPasswordValid) {
        login(email);
      }
    } else {
      // In Bad HCI, clicking either Access or Create Access logs in after displaying the quirk
      login(email || 'jamie@example.com');
    }
  };

  return (
    <div className={`screen-container login-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
      {/* Bad HCI: Top Gamification Banner */}
      {!isGood && (
        <div className="bad-gamification-banner">
          <span className="bad-badge-circle">500</span>
          <span className="bad-banner-text">
            Earn 500 EcoPoints when you log in today. <button type="button" className="bad-banner-link">Claim now</button>
          </span>
        </div>
      )}

      {/* Brand Header */}
      <div className="login-brand-header">
        <EcoSphereLogo size={32} />
        <span className="brand-name">EcoSphere AI</span>
      </div>

      {/* Main Title & Subtitle */}
      <div className="login-title-section">
        <h1 className="login-title">Sort Waste Smarter</h1>
        <p className="login-subtitle">
          Scan your waste, identify its type, and learn the right way to dispose of it.
        </p>
      </div>

      {/* Illustration */}
      <div className={`login-illustration-wrap ${!isGood ? 'bad-framed' : ''}`}>
        <img
          src="/assets/login-illustration.png"
          alt="EcoSphere scan illustration"
          className="login-illustration"
        />
      </div>

      {/* Bad HCI: Second distracting badge banner */}
      {!isGood && (
        <div className="bad-badges-banner">
          <span className="bad-badge-circle-teal">12</span>
          <span className="bad-banner-text">
            12 badges unlocked this month. <button type="button" className="bad-banner-link">View streak</button>
          </span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="login-form" noValidate>
        {isGood ? (
          /* GOOD HCI FORM */
          <>
            <div className="form-group">
              <label htmlFor="email-input" className="form-label">
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                className={`form-input ${submitted && !isEmailValid ? 'input-error' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jamie@example.com"
              />
              {submitted && !isEmailValid && (
                <p className="error-message">Please enter a valid email address.</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password-input" className="form-label">
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  className={`form-input ${submitted && !isPasswordValid ? 'input-error' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? (
                      <>
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1="2" y1="2" x2="22" y2="22" />
                      </>
                    ) : (
                      <>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
              {submitted && !isPasswordValid && (
                <p className="error-message">Please enter your password.</p>
              )}
            </div>

            <button type="submit" className="btn-primary login-btn">
              Log In
            </button>

            <button
              type="button"
              className="text-link forgot-link"
              onClick={() => alert('Password reset instructions would be sent to your email in production.')}
            >
              Forgot Password?
            </button>

            <button
              type="button"
              className="btn-secondary create-btn"
              onClick={() => login(email || 'newuser@example.com')}
            >
              Create Account
            </button>

            <button
              type="button"
              className="text-link-muted guest-link"
              onClick={continueAsGuest}
            >
              Continue as Guest
            </button>
          </>
        ) : (
          /* BAD HCI FORM */
          <>
            <div className="bad-input-container">
              <div className="bad-input-row">
                <input
                  type="text"
                  className="bad-input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                />
                <button type="button" className="bad-inline-btn" onClick={() => {}}>
                  OK
                </button>
              </div>
              <span className="bad-sub-hint">Use the address tied to your rewards profile.</span>
            </div>

            <div className="bad-input-container">
              <div className="bad-input-row">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="bad-input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="bad-inline-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  S...
                </button>
              </div>
              <span className="bad-sub-hint">Use the same password from the web app.</span>
            </div>

            {/* Bad HCI: Technical Error Banner */}
            {showBadAuthError && (
              <div className="bad-error-banner">
                <span className="bad-error-icon">!</span>
                <span className="bad-error-text">Error 401 · Authentication Failed</span>
              </div>
            )}

            {/* Bad HCI: Competing Identical Primary Buttons */}
            <button type="submit" className="bad-competing-btn">
              Access <span className="bad-subnum">1</span>
            </button>

            <button
              type="button"
              className="bad-competing-btn"
              onClick={() => login(email)}
            >
              Create Access <span className="bad-subnum">2</span>
            </button>

            <div className="bad-links-row">
              <span className="bad-link-item" onClick={() => {}}>Forgot Password?</span>
              <span className="bad-link-or">or</span>
              <span className="bad-link-item" onClick={() => {}}>Reset</span>
            </div>

            <button
              type="button"
              className="bad-guest-link"
              onClick={continueAsGuest}
            >
              Continue as Guest (no rewards)
            </button>

            <p className="bad-disclaimer-text">
              By logging in, you agree to the updated Terms of Service and Privacy Policy. You may also receive promotional waste tips.
            </p>

            <div className="bad-ecotip-banner">
              <strong>EcoTip</strong> Scan 5 items this week to unlock the EcoPro badge.
            </div>
          </>
        )}
      </form>
    </div>
  );
};
