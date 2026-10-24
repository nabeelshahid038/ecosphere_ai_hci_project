import React from 'react';
import { useApp } from '../context/AppContext';
import { ScanFrameIcon } from './CustomIcons';

export const BottomNav = ({ active = 'home' }) => {
  const { navigateTo, hciMode } = useApp();

  const isGood = hciMode === 'good';

  return (
    <nav className={`bottom-navigation ${isGood ? 'nav-good' : 'nav-bad'}`}>
      {/* Home tab */}
      <button
        type="button"
        className={`nav-tab ${active === 'home' ? 'active' : ''}`}
        onClick={() => navigateTo('home')}
      >
        <div className="nav-icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="nav-label">Home</span>
      </button>

      {/* Scan tab */}
      <button
        type="button"
        className={`nav-tab ${active === 'scan' ? 'active' : ''}`}
        onClick={() => navigateTo('scan')}
      >
        <div className="nav-icon-wrapper">
          <ScanFrameIcon size={22} />
        </div>
        <span className="nav-label">Scan</span>
      </button>

      {/* History tab */}
      <button
        type="button"
        className={`nav-tab ${active === 'history' ? 'active' : ''}`}
        onClick={() => navigateTo('history')}
      >
        <div className="nav-icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <span className="nav-label">History</span>
      </button>

      {/* Profile tab */}
      <button
        type="button"
        className={`nav-tab ${active === 'profile' ? 'active' : ''}`}
        onClick={() => {
          // Keep active or toggle login
          navigateTo('home');
        }}
      >
        <div className="nav-icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span className="nav-label">Profile</span>
      </button>
    </nav>
  );
};
