import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HCI_SCREEN_ANALYSIS } from '../data/mockData';

export const HciInspector = () => {
  const { currentScreen, hciMode, inspectorOpen, setInspectorOpen } = useApp();
  const [showScreenshot, setShowScreenshot] = useState(false);

  if (!inspectorOpen) return null;

  const analysis = HCI_SCREEN_ANALYSIS[currentScreen] || {
    screenName: currentScreen,
    goodHci: [],
    badHci: []
  };

  const getReferenceImageName = (screen, mode) => {
    const isGood = mode === 'good';
    switch (screen) {
      case 'login':
        return isGood ? 'Login Screen.png' : 'Login Screen bad HCI.png';
      case 'home':
        return isGood ? 'EcoSphere AI - Home.png' : 'EcoSphere AI - Home (Bad HCI).png';
      case 'scan':
        return isGood ? 'EcoSphere AI - Scan Waste.png' : 'EcoSphere AI - Scan Waste (Bad HCI).png';
      case 'review':
        return isGood ? 'Review photo.png' : 'Review photo - bad HCI.png';
      case 'analyzing':
        return isGood ? 'Analyzing Waste.png' : 'Analyzing Waste - Bad HCI.png';
      case 'result':
        return isGood ? 'Classification result.png' : 'Classification result bad HCI.png';
      case 'guide':
        return isGood ? 'Disposal guide.png' : 'Disposal guide - BAD HCI.png';
      case 'complete':
        return isGood ? 'Disposal complete.png' : 'Disposal complete - BAD HCI.png';
      case 'history':
        return isGood ? 'Scan History - Populated.png' : 'Scan History - Bad HCI.png';
      default:
        return null;
    }
  };

  const refImage = getReferenceImageName(currentScreen, hciMode);
  const refPath = refImage ? `/reference/${hciMode}/${refImage}` : null;

  return (
    <aside className="hci-inspector-drawer">
      <div className="inspector-header">
        <div>
          <span className="inspector-badge">HCI Design Analysis</span>
          <h2 className="inspector-title">{analysis.screenName}</h2>
        </div>
        <button
          type="button"
          className="inspector-close-btn"
          onClick={() => setInspectorOpen(false)}
          aria-label="Close Inspector"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="inspector-content">
        <div className="current-mode-indicator">
          Currently Viewing: <strong className={hciMode === 'good' ? 'text-good' : 'text-bad'}>
            {hciMode === 'good' ? 'Good HCI Mode' : 'Bad HCI Mode'}
          </strong>
        </div>

        {/* Reference Screenshot toggle */}
        {refPath && (
          <div className="ref-toggle-section">
            <button
              type="button"
              className="ref-toggle-btn"
              onClick={() => setShowScreenshot(!showScreenshot)}
            >
              {showScreenshot ? 'Hide Reference Screenshot' : 'View Original Reference Screenshot'}
            </button>
            {showScreenshot && (
              <div className="ref-image-container">
                <img src={refPath} alt="Reference Screenshot" className="ref-image" />
                <span className="ref-caption">Original reference for {analysis.screenName} ({hciMode.toUpperCase()} HCI)</span>
              </div>
            )}
          </div>
        )}

        {/* Good HCI Section */}
        <section className="hci-section good-section">
          <div className="section-title-wrap">
            <span className="indicator-dot good-dot"></span>
            <h3>Good HCI Principles Applied</h3>
          </div>
          <ul className="principles-list">
            {analysis.goodHci.map((item, idx) => (
              <li key={idx} className="principle-item">
                <strong className="principle-name">{item.principle}:</strong>
                <p className="principle-detail">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bad HCI Section */}
        <section className="hci-section bad-section">
          <div className="section-title-wrap">
            <span className="indicator-dot bad-dot"></span>
            <h3>Bad HCI Design Violations</h3>
          </div>
          <ul className="principles-list">
            {analysis.badHci.map((item, idx) => (
              <li key={idx} className="principle-item">
                <strong className="principle-name">{item.principle}:</strong>
                <p className="principle-detail">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Nielsen-Norman Heuristic Reference Note */}
        <div className="heuristic-note">
          <p>
            <strong>University Evaluator Note:</strong> Both modes share identical state and underlying functionality. The difference is purely in the presentation layer and cognitive affordances.
          </p>
        </div>
      </div>
    </aside>
  );
};
