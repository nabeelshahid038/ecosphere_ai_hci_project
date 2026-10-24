import React from 'react';
import { StatusBar } from './StatusBar';

export const PhoneFrame = ({ children }) => {
  return (
    <div className="phone-wrapper">
      <div className="phone-container">
        {/* Dynamic Island / Notch */}
        <div className="phone-island"></div>

        {/* Screen Viewport */}
        <div className="phone-screen">
          <StatusBar />
          
          <main className="phone-content">
            {children}
          </main>

          {/* iOS Home Indicator */}
          <div className="home-indicator-container">
            <div className="home-indicator-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
