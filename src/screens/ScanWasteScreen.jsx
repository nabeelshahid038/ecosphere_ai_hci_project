import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';

export const ScanWasteScreen = () => {
  const {
    goBack,
    handleImageSelect,
    selectedImage,
    setHelpModalOpen,
    hciMode
  } = useApp();

  const fileInputRef = useRef(null);
  const isGood = hciMode === 'good';

  const handleCapture = () => {
    // If user already has an image or uses the default crushed bottle
    handleImageSelect(selectedImage || '/assets/bottle-crushed.png');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  return (
    <div className={`screen-container scan-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
      {/* Top Header */}
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

        <h1 className="header-title">Scan Waste</h1>

        <button
          type="button"
          className="header-help-btn"
          onClick={() => setHelpModalOpen(true)}
          aria-label="Scanning help"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </button>
      </div>

      {/* Primary Instruction */}
      <div className="scan-instruction-wrap">
        {isGood ? (
          <h2 className="scan-instruction-text">
            Place one waste item<br />inside the frame.
          </h2>
        ) : (
          <h2 className="bad-scan-instruction-text">
            Position object properly
          </h2>
        )}
      </div>

      {/* Camera Viewfinder Box */}
      <div className={`scan-viewfinder-box ${!isGood ? 'bad-viewfinder' : ''}`}>
        <img
          src={selectedImage || '/assets/bottle-crushed.png'}
          alt="Waste Item Preview"
          className="viewfinder-img"
        />

        {/* Viewfinder Target Frame Overlays */}
        <div className={`viewfinder-overlay ${!isGood ? 'bad-overlay' : ''}`}>
          <div className="corner-bracket top-left"></div>
          <div className="corner-bracket top-right"></div>
          <div className="corner-bracket bottom-left"></div>
          <div className="corner-bracket bottom-right"></div>
        </div>
      </div>

      {/* Helper Guidance Text */}
      <p className={`scan-helper-text ${!isGood ? 'bad-contrast-helper' : ''}`}>
        Use good lighting and keep the item clearly visible.
      </p>

      {/* Status Indicator */}
      <div className="scan-status-row">
        <span className="status-indicator-dot"></span>
        <span className="scan-status-label">
          {isGood ? 'Ready to scan' : 'System Ready'}
        </span>
      </div>

      {/* Capture Shutter Button */}
      <div className="shutter-control-wrap">
        <button
          type="button"
          className={`shutter-btn ${!isGood ? 'bad-shutter-btn' : ''}`}
          onClick={handleCapture}
          aria-label="Capture photo"
        >
          <div className="shutter-inner">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </div>
        </button>
      </div>

      {/* Upload Photo Secondary Action */}
      <div className="upload-photo-wrap">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden-file-input"
          onChange={handleFileUpload}
        />
        <button
          type="button"
          className={`upload-photo-btn ${!isGood ? 'bad-upload-btn' : ''}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          Upload Photo
        </button>
      </div>
    </div>
  );
};
