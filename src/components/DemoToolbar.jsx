import React from 'react';
import { useApp } from '../context/AppContext';

export const DemoToolbar = () => {
  const {
    hciMode,
    setHciMode,
    currentScreen,
    navigateTo,
    resetDemoData,
    inspectorOpen,
    setInspectorOpen
  } = useApp();

  const screens = [
    { id: 'login', name: '1. Login' },
    { id: 'home', name: '2. Home Dashboard' },
    { id: 'scan', name: '3. Scan Waste' },
    { id: 'review', name: '4. Review Photo' },
    { id: 'analyzing', name: '5. Analyzing Waste' },
    { id: 'result', name: '6. Classification Result' },
    { id: 'guide', name: '7. Disposal Guide' },
    { id: 'complete', name: '8. Disposal Complete' },
    { id: 'history', name: '9. Scan History' },
  ];

  return (
    <header className="demo-toolbar">
      <div className="demo-toolbar-left">
        <div className="demo-brand">
          <span className="demo-brand-pill">HCI Prototype</span>
          <span className="demo-title">EcoSphere AI</span>
        </div>

        {/* Mode Switcher */}
        <div className="mode-toggle-group">
          <button
            type="button"
            className={`mode-btn mode-good ${hciMode === 'good' ? 'active' : ''}`}
            onClick={() => setHciMode('good')}
          >
            <span className="indicator-dot good-dot"></span>
            Good HCI Mode
          </button>
          <button
            type="button"
            className={`mode-btn mode-bad ${hciMode === 'bad' ? 'active' : ''}`}
            onClick={() => setHciMode('bad')}
          >
            <span className="indicator-dot bad-dot"></span>
            Bad HCI Mode
          </button>
        </div>
      </div>

      <div className="demo-toolbar-right">
        {/* Screen Jump Selector */}
        <div className="screen-selector-wrapper">
          <label htmlFor="screen-select" className="screen-label">Jump to Screen:</label>
          <select
            id="screen-select"
            className="screen-select"
            value={currentScreen}
            onChange={(e) => navigateTo(e.target.value)}
          >
            {screens.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {/* HCI Inspector Drawer Toggle */}
        <button
          type="button"
          className={`inspector-toggle-btn ${inspectorOpen ? 'active' : ''}`}
          onClick={() => setInspectorOpen(!inspectorOpen)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          HCI Inspector
        </button>

        {/* Reset State */}
        <button
          type="button"
          className="reset-btn"
          onClick={resetDemoData}
          title="Reset to initial state"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
          Reset
        </button>
      </div>
    </header>
  );
};
