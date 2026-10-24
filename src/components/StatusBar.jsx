import React from 'react';

export const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-time">9:41</div>
      <div className="status-icons">
        {/* Cellular signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="8" width="2.5" height="3" rx="0.7" />
          <rect x="4.5" y="5.5" width="2.5" height="5.5" rx="0.7" />
          <rect x="9" y="3" width="2.5" height="8" rx="0.7" />
          <rect x="13.5" y="0" width="2.5" height="11" rx="0.7" />
        </svg>
        {/* Wi-Fi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
          <path d="M7.5 10.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
          <path d="M4.1 6.5a4.8 4.8 0 0 1 6.8 0 .8.8 0 0 0 1.1-1.1 6.4 6.4 0 0 0-9 0 .8.8 0 1 0 1.1 1.1z" />
          <path d="M1.3 3.7a8.8 8.8 0 0 1 12.4 0 .8.8 0 0 0 1.1-1.1A10.4 10.4 0 0 0 .2 2.6a.8.8 0 0 0 1.1 1.1z" />
        </svg>
        {/* Battery */}
        <div className="battery-icon">
          <div className="battery-level" />
        </div>
      </div>
    </div>
  );
};
