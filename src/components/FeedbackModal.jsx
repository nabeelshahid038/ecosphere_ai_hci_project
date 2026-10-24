import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const FeedbackModal = () => {
  const {
    feedbackModalOpen,
    setFeedbackModalOpen,
    helpModalOpen,
    setHelpModalOpen,
    selectedHistoryItem,
    setSelectedHistoryItem,
    hciMode
  } = useApp();

  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [selectedCorrection, setSelectedCorrection] = useState('Glass Bottle');

  if (feedbackModalOpen) {
    return (
      <div className="modal-backdrop" onClick={() => setFeedbackModalOpen(false)}>
        <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="modal-indicator"></div>
          <h3 className="modal-title">Report Classification</h3>
          <p className="modal-desc">
            Did our AI misidentify your waste item? Help improve future classifications.
          </p>

          {feedbackSubmitted ? (
            <div className="modal-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#205c43" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <p>Thank you! Your feedback has been logged.</p>
              <button
                type="button"
                className="btn-primary mt-4"
                onClick={() => {
                  setFeedbackSubmitted(false);
                  setFeedbackModalOpen(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="modal-form">
              <label className="modal-label">What item was this actually?</label>
              <select
                className="modal-select"
                value={selectedCorrection}
                onChange={(e) => setSelectedCorrection(e.target.value)}
              >
                <option value="Glass Bottle">Glass Bottle</option>
                <option value="Aluminum Can">Aluminum Can</option>
                <option value="Cardboard Box">Cardboard Box</option>
                <option value="Biodegradable Plastic">Biodegradable Plastic</option>
                <option value="Non-Recyclable Mixed Waste">Non-Recyclable Mixed Waste</option>
              </select>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setFeedbackModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setFeedbackSubmitted(true)}
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (helpModalOpen) {
    return (
      <div className="modal-backdrop" onClick={() => setHelpModalOpen(false)}>
        <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="modal-indicator"></div>
          <h3 className="modal-title">Scanning Tips</h3>
          <ul className="help-tips-list">
            <li>
              <strong>Good Lighting:</strong> Ensure your object is well-lit without heavy shadows or glare.
            </li>
            <li>
              <strong>Single Item:</strong> Keep only one waste object centered in the frame.
            </li>
            <li>
              <strong>Clean Angle:</strong> Show recognizable parts like caps, recycling symbols, or labels.
            </li>
          </ul>
          <button
            type="button"
            className="btn-primary mt-4"
            onClick={() => setHelpModalOpen(false)}
          >
            Got it
          </button>
        </div>
      </div>
    );
  }

  if (selectedHistoryItem) {
    const isGood = hciMode === 'good';
    return (
      <div className="modal-backdrop" onClick={() => setSelectedHistoryItem(null)}>
        <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="modal-indicator"></div>
          <div className="history-detail-header">
            <img
              src={selectedHistoryItem.image}
              alt={selectedHistoryItem.item}
              className="history-detail-img"
            />
            <div>
              <h3 className="modal-title">{selectedHistoryItem.item}</h3>
              <span className={`status-pill ${selectedHistoryItem.isRecyclable ? 'pill-recyclable' : 'pill-non'}`}>
                {isGood ? selectedHistoryItem.category : selectedHistoryItem.badCategory}
              </span>
            </div>
          </div>

          <div className="history-detail-body">
            <div className="detail-row">
              <span className="detail-label">Scanned Date:</span>
              <span className="detail-val">{selectedHistoryItem.date}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Confidence:</span>
              <span className="detail-val">{selectedHistoryItem.confidence}%</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Points Awarded:</span>
              <span className="detail-val">+{selectedHistoryItem.points} EcoPoints</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Disposal Status:</span>
              <span className="detail-val text-green-700 font-semibold">Completed</span>
            </div>
          </div>

          <button
            type="button"
            className="btn-primary mt-4"
            onClick={() => setSelectedHistoryItem(null)}
          >
            Close Details
          </button>
        </div>
      </div>
    );
  }

  return null;
};
