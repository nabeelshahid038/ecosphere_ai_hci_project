import React from 'react';
import { useApp } from '../context/AppContext';
import { RecycleIcon, ScanFrameIcon } from '../components/CustomIcons';

export const ResultScreen = () => {
  const {
    goBack,
    navigateTo,
    classificationResult,
    setFeedbackModalOpen,
    hciMode
  } = useApp();

  const isGood = hciMode === 'good';

  return (
    <div className={`screen-container result-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
      {/* Header */}
      <div className="screen-header">
        <button
          type="button"
          className="header-back-btn"
          onClick={goBack}
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <h1 className="header-title">Classification Result</h1>

        <div style={{ width: 40 }} />
      </div>

      {/* Captured Image on Ground */}
      <div className="result-image-card">
        <img
          src="/assets/bottle-ground.png"
          alt="Identified waste item"
          className="result-img"
        />
        <div className="captured-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span>Captured item</span>
        </div>
      </div>

      {/* Main Identification Title */}
      <h2 className="result-main-title">
        {isGood ? classificationResult.item : classificationResult.technicalClass}
      </h2>

      {/* Badges Row */}
      <div className="result-badges-row">
        {isGood ? (
          <>
            <div className="recyclable-badge">
              <RecycleIcon size={16} />
              <span>Recyclable</span>
            </div>
            <span className="confidence-text">{classificationResult.confidence}% confidence</span>
          </>
        ) : (
          <>
            <div className="bad-status-badge">
              <span className="bad-info-circle">i</span>
              <span>Material Status: Positive</span>
            </div>
            <span className="bad-confidence-text">93% confidenc</span>
          </>
        )}
      </div>

      {/* Disposal Recommendation Card */}
      <div className="disposal-rec-card">
        <span className="rec-card-header">
          {isGood ? 'Dispose in:' : 'Recommended stream:'}
        </span>

        <div className="rec-stream-row">
          <div className="rec-icon-circle">
            <RecycleIcon size={20} />
          </div>
          <span className="rec-stream-name">
            {isGood ? classificationResult.bin : classificationResult.badBin}
          </span>
        </div>

        <div className="rec-card-divider"></div>

        <div className="rec-guidance-row">
          <div className="rec-info-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p className="rec-guidance-text">{classificationResult.guidance}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="result-actions-wrap">
        {isGood ? (
          /* GOOD HCI BUTTONS */
          <>
            <button
              type="button"
              className="btn-primary result-primary-btn"
              onClick={() => navigateTo('guide')}
            >
              <span>View Disposal Guide</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button
              type="button"
              className="btn-secondary result-secondary-btn"
              onClick={() => navigateTo('scan')}
            >
              <ScanFrameIcon size={18} />
              <span>Scan Another Item</span>
            </button>
          </>
        ) : (
          /* BAD HCI BUTTONS: Both ghost buttons with ambiguous info icons! */
          <>
            <button
              type="button"
              className="bad-ghost-btn"
              onClick={() => navigateTo('guide')}
            >
              <span>View Disposal Guide</span>
              <span className="bad-ghost-info">i</span>
            </button>

            <button
              type="button"
              className="bad-ghost-btn"
              onClick={() => navigateTo('scan')}
            >
              <span className="bad-ghost-info">i</span>
              <span>Scan Another Item</span>
            </button>
          </>
        )}

        {/* Result Incorrect Link */}
        <button
          type="button"
          className="result-incorrect-link"
          onClick={() => setFeedbackModalOpen(true)}
        >
          Result Incorrect?
        </button>
      </div>
    </div>
  );
};
