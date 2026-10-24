import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  RecycleIcon,
  LeafIcon,
  TrashBinIcon,
  ScanFrameIcon
} from '../components/CustomIcons';

export const ScanHistoryScreen = () => {
  const {
    goBack,
    navigateTo,
    scanHistory,
    setSelectedHistoryItem,
    hciMode
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const isGood = hciMode === 'good';

  // Filter items
  const filteredItems = scanHistory.filter(item => {
    // Search matching
    const matchesSearch = item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (isGood ? item.category : item.badCategory).toLowerCase().includes(searchQuery.toLowerCase());

    // Filter matching
    if (!matchesSearch) return false;
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Recyclable') {
      return item.isRecyclable === true;
    }
    if (activeFilter === 'Non-Recyclable') {
      return item.isRecyclable === false;
    }
    return true;
  });

  // Group by Today vs Yesterday
  const todayItems = filteredItems.filter(i => i.group === 'Today');
  const yesterdayItems = filteredItems.filter(i => i.group === 'Yesterday');
  const otherItems = filteredItems.filter(i => i.group !== 'Today' && i.group !== 'Yesterday');

  const renderBadge = (item) => {
    if (isGood) {
      if (item.category === 'Recyclable') {
        return (
          <div className="history-pill pill-recyclable">
            <RecycleIcon size={14} />
            <span>Recyclable</span>
          </div>
        );
      }
      if (item.category === 'Organic') {
        return (
          <div className="history-pill pill-organic">
            <LeafIcon size={14} />
            <span>Organic</span>
          </div>
        );
      }
      return (
        <div className="history-pill pill-non">
          <TrashBinIcon size={14} />
          <span>Non-Recyclable</span>
        </div>
      );
    } else {
      // Bad HCI uses cryptic Type A / Type B codes
      if (item.badCategory === 'Type A') {
        return (
          <div className="bad-history-pill bad-pill-a">
            <RecycleIcon size={14} />
            <span>Type A</span>
          </div>
        );
      }
      return (
        <div className="bad-history-pill bad-pill-b">
          <LeafIcon size={14} />
          <span>Type B</span>
        </div>
      );
    }
  };

  const renderItemCard = (item) => (
    <div
      key={item.id}
      className={`history-card-item ${!isGood ? 'bad-history-card' : ''}`}
      onClick={() => setSelectedHistoryItem(item)}
      role="button"
      tabIndex={0}
    >
      <img
        src={item.image}
        alt={item.item}
        className="history-thumb-img"
      />

      <div className="history-card-info">
        <h3 className="history-item-title">{item.item}</h3>
        {renderBadge(item)}
        <span className="history-item-date">{item.date}</span>
      </div>

      <div className="history-card-action">
        {isGood ? (
          /* Clear Chevron indicating drill-down affordance */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        ) : (
          /* Ambiguous three dots icon */
          <span className="bad-three-dots">•••</span>
        )}
      </div>
    </div>
  );

  return (
    <div className={`screen-container history-screen ${isGood ? 'good-screen' : 'bad-screen'}`}>
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

        <h1 className="header-title">Scan History</h1>

        <div style={{ width: 40 }} />
      </div>

      {/* Search Input */}
      <div className="history-search-wrap">
        <div className={`search-input-box ${!isGood ? 'bad-search-box' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="history-search-field"
            placeholder="Search scanned items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips */}
      <div className={`history-filter-chips-row ${!isGood ? 'bad-chips-row' : ''}`}>
        {['All', 'Recyclable', 'Non-Recyclable'].map(filter => (
          <button
            key={filter}
            type="button"
            className={`filter-chip ${activeFilter === filter ? 'active' : ''} ${!isGood ? 'bad-filter-chip' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Scrollable History List */}
      <div className="history-list-area">
        {filteredItems.length === 0 ? (
          <div className="history-empty-state">
            <p>No scanned items match your search.</p>
          </div>
        ) : (
          <>
            {todayItems.length > 0 && (
              <div className="history-group">
                <span className="group-heading">Today</span>
                <div className="history-cards-col">
                  {todayItems.map(renderItemCard)}
                </div>
              </div>
            )}

            {yesterdayItems.length > 0 && (
              <div className="history-group">
                <span className="group-heading">Yesterday</span>
                <div className="history-cards-col">
                  {yesterdayItems.map(renderItemCard)}
                </div>
              </div>
            )}

            {otherItems.length > 0 && (
              <div className="history-group">
                <span className="group-heading">Previous</span>
                <div className="history-cards-col">
                  {otherItems.map(renderItemCard)}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Sticky Action Button */}
      <div className="history-bottom-action">
        <button
          type="button"
          className="btn-primary history-scan-btn"
          onClick={() => navigateTo('scan')}
        >
          <ScanFrameIcon size={18} />
          <span>Scan Waste</span>
        </button>
      </div>
    </div>
  );
};
