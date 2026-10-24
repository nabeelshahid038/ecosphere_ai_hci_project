import React from 'react';
import { useApp } from '../context/AppContext';
import { LeafIcon, RecycleIcon, ScanFrameIcon } from '../components/CustomIcons';

export const DisposalCompleteScreen = () => {
  const {
    goBack,
    navigateTo,
    hciMode
  } = useApp();

  const isGood = hciMode === 'good';

  return (
    <div className={`screen-container complete-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
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

      <div className="complete-scroll-area">
        {/* Big Success Feedback Card */}
        <div className="complete-card">
          <div className="success-icon-circle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 className="complete-title">
            {isGood ? 'Great job!' : 'Status Updated'}
          </h2>

          {isGood && (
            <p className="complete-subtitle">
              Item marked as disposed.
            </p>
          )}

          {/* EcoPoints badge: Good uses subtle pill, Bad uses solid overwhelming dark green */}
          <div className={isGood ? 'complete-points-pill' : 'bad-points-pill'}>
            <LeafIcon size={16} />
            <span>+10 EcoPoints earned</span>
          </div>
        </div>

        {/* Identified Item Card */}
        <div className="section-label">IDENTIFIED ITEM</div>
        <div className="identified-item-card">
          <img
            src="/assets/bottle-clean.png"
            alt="Plastic Bottle"
            className="identified-thumb"
          />
          <div className="identified-details">
            <h3 className="identified-name">Plastic Bottle</h3>
            <div className="identified-disposed-status">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#205c43" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Disposed</span>
            </div>
          </div>
          <div className="identified-end-icon">
            <RecycleIcon size={20} className="text-[#205c43]" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="complete-actions-wrap">
        <button
          type="button"
          className="btn-primary complete-primary-btn"
          onClick={() => navigateTo('scan')}
        >
          <ScanFrameIcon size={18} />
          <span>Scan Another Item</span>
        </button>

        <button
          type="button"
          className="btn-secondary complete-secondary-btn"
          onClick={() => navigateTo('home')}
        >
          Done
        </button>
      </div>
    </div>
  );
};
