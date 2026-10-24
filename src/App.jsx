import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { DemoToolbar } from './components/DemoToolbar';
import { PhoneFrame } from './components/PhoneFrame';
import { HciInspector } from './components/HciInspector';
import { FeedbackModal } from './components/FeedbackModal';

import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ScanWasteScreen } from './screens/ScanWasteScreen';
import { ReviewPhotoScreen } from './screens/ReviewPhotoScreen';
import { AnalyzingScreen } from './screens/AnalyzingScreen';
import { ResultScreen } from './screens/ResultScreen';
import { DisposalGuideScreen } from './screens/DisposalGuideScreen';
import { DisposalCompleteScreen } from './screens/DisposalCompleteScreen';
import { ScanHistoryScreen } from './screens/ScanHistoryScreen';

import './styles/global.css';
import './styles/phone.css';
import './styles/screens.css';
import './styles/toolbar.css';

const AppContent = () => {
  const { currentScreen } = useApp();

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen />;
      case 'home':
        return <HomeScreen />;
      case 'scan':
        return <ScanWasteScreen />;
      case 'review':
        return <ReviewPhotoScreen />;
      case 'analyzing':
        return <AnalyzingScreen />;
      case 'result':
        return <ResultScreen />;
      case 'guide':
        return <DisposalGuideScreen />;
      case 'complete':
        return <DisposalCompleteScreen />;
      case 'history':
        return <ScanHistoryScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="app-root">
      {/* Top Demo Toolbar with Mode Switcher & Quick Navigation */}
      <DemoToolbar />

      {/* Centered Mobile Phone Frame */}
      <PhoneFrame>
        {renderCurrentScreen()}
        <FeedbackModal />
      </PhoneFrame>

      {/* Academic HCI Evaluation Inspector Drawer */}
      <HciInspector />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
