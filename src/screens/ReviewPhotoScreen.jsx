import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SparkleIcon } from '../components/CustomIcons';

export const ReviewPhotoScreen = () => {
  const {
    goBack,
    selectedImage,
    startAnalysis,
    handleImageSelect,
    hciMode
  } = useApp();

  const fileInputRef = useRef(null);
  const isGood = hciMode === 'good';

  return (
    <div className={`screen-container review-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
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

        <h1 className="header-title">Review Photo</h1>

        {/* Empty placeholder to center title */}
        <div style={{ width: 40 }} />
      </div>

      {/* Captured Image Card */}
      <div className="review-image-card">
        <img
          src={selectedImage || '/assets/bottle-crushed.png'}
          alt="Captured Waste"
          className="review-img"
        />
      </div>

      {/* Review Instruction */}
      <p className={`review-instruction ${!isGood ? 'bad-review-instruction' : ''}`}>
        {isGood
          ? 'Make sure the waste item is clear and fully visible.'
          : 'Check image before processing.'}
      </p>

      {/* Quality Badge */}
      <div className="quality-badge-wrap">
        <div className="quality-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="9 12 12 15 16 10"></polyline>
          </svg>
          <span>{isGood ? 'Image quality: Good' : 'Quality Status: 72%'}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="review-actions-wrap">
        {/* Primary Action */}
        <button
          type="button"
          className="btn-primary review-primary-btn"
          onClick={startAnalysis}
        >
          <SparkleIcon size={18} />
          {isGood ? 'Analyze Waste' : 'Proceed'}
        </button>

        {/* Secondary Action: In Bad HCI, Retake Photo is ALSO solid dark green! */}
        <button
          type="button"
          className={isGood ? 'btn-secondary review-secondary-btn' : 'bad-competing-secondary-btn'}
          onClick={goBack}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          Retake Photo
        </button>

        {/* Tertiary action: Choose Another Photo */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden-file-input"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleImageSelect(f);
          }}
        />
        <button
          type="button"
          className={isGood ? 'text-link-green choose-another-btn' : 'bad-faint-link choose-another-btn'}
          onClick={() => fileInputRef.current?.click()}
        >
          Choose Another Photo
        </button>
      </div>
    </div>
  );
};
