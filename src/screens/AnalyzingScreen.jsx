import React from 'react';
import { useApp } from '../context/AppContext';
import { RecycleIcon } from '../components/CustomIcons';

export const AnalyzingScreen = () => {
  const {
    goBack,
    analysisStep,
    hciMode
  } = useApp();

  const isGood = hciMode === 'good';

  return (
    <div className={`screen-container analyzing-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
      {/* Header */}
      <div className="screen-header">
        <button
          type="button"
          className="header-back-btn"
          onClick={goBack}
          aria-label="Cancel analysis"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <h1 className="header-title">Analyzing Waste</h1>

        <div style={{ width: 40 }} />
      </div>

      {/* Captured Image Banner */}
      <div className="analyzing-banner-card">
        <img
          src="/assets/analyzing-banner.png"
          alt="Captured Scene"
          className="analyzing-banner-img"
        />
        <div className="captured-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Captured image</span>
        </div>
      </div>

      {/* Center Spinner Area */}
      <div className="analyzing-spinner-wrap">
        {isGood ? (
          /* Good Spinner */
          <div className="good-spinner-outer">
            <div className="good-spinner-glow"></div>
            <div className="good-spinner-icon">
              <RecycleIcon size={22} className="spin-slow" />
            </div>
          </div>
        ) : (
          /* Bad Spinner with misleading 'x' */
          <div className="bad-spinner-outer">
            <div className="bad-spinner-ring">
              <span className="bad-dots-icon">•••</span>
            </div>
            <span className="bad-ambiguous-x" title="Ambiguous cancel indicator">×</span>
          </div>
        )}

        <h2 className="analyzing-title">
          {isGood ? 'Analyzing your waste...' : 'Executing inference pipeline...'}
        </h2>
        <p className="analyzing-subtitle">
          {isGood ? 'This usually takes a few seconds.' : 'Stage 2/4'}
        </p>
      </div>

      {/* Progress Timeline Card */}
      <div className="progress-timeline-card">
        <div className="progress-card-header">
          <span className="progress-card-title">ANALYSIS PROGRESS</span>
          {!isGood && <span className="bad-sys-active">sys: active</span>}
        </div>

        <div className="timeline-steps">
          {/* Step 1 */}
          <div className="timeline-step done">
            <div className="step-indicator">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="step-content">
              <span className="step-name">
                {isGood ? 'Uploading Image' : 'Stage 1'}
              </span>
              {!isGood && <span className="step-tag-done">done</span>}
            </div>
          </div>

          <div className="step-connector done"></div>

          {/* Step 2 */}
          <div className={`timeline-step ${analysisStep >= 2 ? 'active' : 'pending'}`}>
            <div className="step-indicator">
              <div className="step-active-dot"></div>
            </div>
            <div className="step-content">
              <span className={`step-name ${!isGood ? 'bad-step-name' : ''}`}>
                {isGood ? 'Identifying Material' : 'Processing tensor'}
              </span>
              {isGood ? (
                <span className="step-tag-active">In progress</span>
              ) : (
                <span className="step-tag-model">Model running</span>
              )}
            </div>
          </div>

          <div className={`step-connector ${analysisStep >= 3 ? 'done' : 'pending'}`}></div>

          {/* Step 3 */}
          <div className={`timeline-step ${analysisStep >= 3 ? 'active' : 'pending'}`}>
            <div className="step-indicator">
              <div className="step-pending-circle"></div>
            </div>
            <div className="step-content">
              <span className={`step-name ${!isGood ? 'bad-pending-name' : ''}`}>
                {isGood ? 'Preparing Result' : 'Output pending'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Keep App Open Banner */}
      <div className="app-open-banner">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
        <span className="app-open-text">
          Please keep the app open while analysis is in progress.
        </span>
      </div>
    </div>
  );
};
