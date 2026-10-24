import React from 'react';
import { useApp } from '../context/AppContext';
import { EcoSphereLogo, LeafIcon, SproutIcon } from '../components/CustomIcons';
import { BottomNav } from '../components/BottomNav';

export const HomeScreen = () => {
  const {
    currentUser,
    stats,
    navigateTo,
    hciMode
  } = useApp();

  const isGood = hciMode === 'good';
  const userName = currentUser?.name || 'Jamie';

  return (
    <div className={`screen-container home-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
      <div className="home-scroll-area">
        {/* Top Header */}
        <div className="home-top-bar">
          <div className="home-brand">
            <EcoSphereLogo size={32} />
            <span className="brand-name">EcoSphere AI</span>
          </div>

          <button
            type="button"
            className="home-profile-avatar"
            onClick={() => navigateTo('login')}
            title="User Profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>

        {/* Greeting Section */}
        <div className="home-greeting-section">
          <h1 className="home-greeting-title">Good evening, {userName}</h1>
          <p className="home-greeting-sub">What would you like to recycle today?</p>
        </div>

        {/* Primary Action Card */}
        <div
          className={`home-primary-card ${!isGood ? 'bad-primary-card' : ''}`}
          onClick={() => navigateTo('scan')}
          role="button"
          tabIndex={0}
        >
          <div className="primary-card-top">
            <div className="camera-icon-squircle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
            <div className="card-arrow-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          <h2 className="primary-card-title">
            {isGood ? 'Scan Waste' : 'Process Waste'}
          </h2>
          <p className="primary-card-desc">
            Take a photo to identify and dispose of waste correctly.
          </p>
        </div>

        {/* 3 Secondary Action Cards */}
        <div className="home-quick-actions-grid">
          {/* Card 1: Scan History */}
          <div
            className={`quick-card ${!isGood ? 'bad-quick-bordered' : ''}`}
            onClick={() => navigateTo('history')}
            role="button"
            tabIndex={0}
          >
            <div className="quick-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="quick-label">Scan History</span>
          </div>

          {/* Card 2: EcoPoints (BAD HCI intentionally turns this into competing solid green) */}
          <div
            className={`quick-card ${!isGood ? 'bad-quick-competing' : ''}`}
            onClick={() => alert(`You have ${stats.ecoPoints} EcoPoints earned through eco-conscious recycling!`)}
            role="button"
            tabIndex={0}
          >
            <div className="quick-icon">
              <LeafIcon size={22} />
            </div>
            <span className="quick-label">EcoPoints</span>
          </div>

          {/* Card 3: Disposal Guide */}
          <div
            className={`quick-card ${!isGood ? 'bad-quick-bordered' : ''}`}
            onClick={() => navigateTo('guide')}
            role="button"
            tabIndex={0}
          >
            <div className="quick-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <span className="quick-label">Disposal Guide</span>
          </div>
        </div>

        {/* Impact Section */}
        <div className="eco-impact-card">
          <div className="impact-card-header">
            <span className="impact-title">Your Eco Impact</span>
            <span className="impact-sprout-icon">
              <SproutIcon size={20} />
            </span>
          </div>

          <div className="impact-stats-row">
            <div className="stat-col">
              <span className="stat-value">{stats.itemsScanned}</span>
              <span className="stat-label">Items scanned</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-col">
              <span className="stat-value">{stats.itemsRecycled}</span>
              <span className="stat-label">Items recycled</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-col">
              <span className="stat-value">{stats.ecoPoints}</span>
              <span className="stat-label">Points earned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav active="home" />
    </div>
  );
};
