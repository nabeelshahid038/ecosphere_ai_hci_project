import React from 'react';
import { useApp } from '../context/AppContext';
import {
  RecycleIcon,
  BottleIcon,
  DropletIcon,
  TrashBinIcon,
  ScanFrameIcon
} from '../components/CustomIcons';

export const DisposalGuideScreen = () => {
  const {
    goBack,
    navigateTo,
    markAsDisposed,
    hciMode
  } = useApp();

  const isGood = hciMode === 'good';

  return (
    <div className={`screen-container guide-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
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

        <h1 className="header-title">Disposal Guide</h1>

        <div style={{ width: 40 }} />
      </div>

      <div className="guide-scroll-area">
        {/* Identified Item Card */}
        <div className="section-label">IDENTIFIED ITEM</div>
        <div className="identified-item-card">
          <img
            src="/assets/bottle-clean.png"
            alt="Plastic Bottle"
            className="identified-thumb"
          />
          <div className="identified-details">
            <h2 className="identified-name">Plastic Bottle</h2>
            <div className="identified-sub">
              <RecycleIcon size={15} />
              <span>Recyclable plastic</span>
            </div>
          </div>
        </div>

        {/* Instructions Card */}
        <div className="instructions-card">
          {isGood ? (
            /* GOOD HCI: Numbered Steps with Visual Icons */
            <>
              <h2 className="instructions-title">How to dispose of it</h2>

              <div className="guide-steps-list">
                {/* Step 1 */}
                <div className="guide-step-item">
                  <div className="step-num-circle">1</div>
                  <span className="step-text">Empty the bottle.</span>
                  <div className="step-icon">
                    <BottleIcon size={20} />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="guide-step-item">
                  <div className="step-num-circle">2</div>
                  <span className="step-text">Rinse it if needed.</span>
                  <div className="step-icon">
                    <DropletIcon size={20} />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="guide-step-item">
                  <div className="step-num-circle">3</div>
                  <span className="step-text">
                    Place it in the <strong>Plastic / Recycling Bin</strong>.
                  </span>
                  <div className="step-icon">
                    <TrashBinIcon size={20} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* BAD HCI: Unstructured dense paragraph wall of text */
            <>
              <h2 className="instructions-title">Processing Instructions</h2>
              <p className="bad-instructions-paragraph">
                Empty the bottle if necessary, rinse the container where applicable and place it in the appropriate disposal stream according to material type.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="guide-actions-wrap">
        {isGood ? (
          /* GOOD HCI ACTIONS */
          <>
            <button
              type="button"
              className="btn-primary guide-primary-btn"
              onClick={markAsDisposed}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Mark as Disposed</span>
            </button>

            <button
              type="button"
              className="btn-secondary guide-secondary-btn"
              onClick={() => navigateTo('scan')}
            >
              <ScanFrameIcon size={18} />
              <span>Scan Another Item</span>
            </button>
          </>
        ) : (
          /* BAD HCI ACTIONS: Competing solid green buttons */
          <>
            <button
              type="button"
              className="bad-competing-primary-btn"
              onClick={markAsDisposed}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Confirm</span>
            </button>

            <button
              type="button"
              className="bad-competing-primary-btn"
              onClick={() => navigateTo('scan')}
            >
              <ScanFrameIcon size={18} />
              <span>Scan Another Item</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
