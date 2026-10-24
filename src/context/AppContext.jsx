import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_STATS,
  INITIAL_SCAN_HISTORY,
  DEMO_CLASSIFICATION_RESULT
} from '../data/mockData';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // HCI Mode: 'good' or 'bad'
  const [hciMode, setHciModeState] = useState(() => {
    const saved = localStorage.getItem('ecosphere_hci_mode');
    return saved || 'good';
  });

  // Navigation Screen State
  const [currentScreen, setCurrentScreen] = useState('login');
  const [navHistory, setNavHistory] = useState(['login']);

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('ecosphere_logged_in') === 'true';
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('ecosphere_user');
    return saved ? JSON.parse(saved) : { name: 'Jamie', email: 'jamie@example.com' };
  });

  // Captured / Uploaded Image
  const [selectedImage, setSelectedImage] = useState('/assets/bottle-crushed.png');
  const [imageQuality, setImageQuality] = useState('Good');

  // Eco Points and Impact Stats
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('ecosphere_stats');
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  // Scan History
  const [scanHistory, setScanHistory] = useState(() => {
    const saved = localStorage.getItem('ecosphere_history');
    return saved ? JSON.parse(saved) : INITIAL_SCAN_HISTORY;
  });

  // Analysis State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(1); // 1: upload, 2: identify, 3: result

  // Classification Result
  const [classificationResult, setClassificationResult] = useState(DEMO_CLASSIFICATION_RESULT);

  // Modals & Inspecting
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('ecosphere_hci_mode', hciMode);
  }, [hciMode]);

  useEffect(() => {
    localStorage.setItem('ecosphere_logged_in', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('ecosphere_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('ecosphere_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem('ecosphere_history', JSON.stringify(scanHistory));
  }, [scanHistory]);

  // Set HCI mode
  const setHciMode = (mode) => {
    setHciModeState(mode);
  };

  // Safe Navigation
  const navigateTo = (screen, replace = false) => {
    if (replace) {
      setNavHistory(prev => [...prev.slice(0, -1), screen]);
    } else {
      setNavHistory(prev => [...prev, screen]);
    }
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (navHistory.length > 1) {
      const newHistory = [...navHistory];
      newHistory.pop();
      const prevScreen = newHistory[newHistory.length - 1];
      setNavHistory(newHistory);
      setCurrentScreen(prevScreen);
    } else {
      // Default fallback
      setCurrentScreen('home');
      setNavHistory(['home']);
    }
  };

  // Authentication Handlers
  const login = (email) => {
    const user = { name: email ? email.split('@')[0] : 'Jamie', email: email || 'jamie@example.com' };
    setCurrentUser(user);
    setIsLoggedIn(true);
    navigateTo('home');
  };

  const continueAsGuest = () => {
    const user = { name: 'Guest', email: '' };
    setCurrentUser(user);
    setIsLoggedIn(false);
    navigateTo('home');
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigateTo('login');
  };

  // Image Selection (Upload or Default)
  const handleImageSelect = (fileOrUrl) => {
    if (typeof fileOrUrl === 'string') {
      setSelectedImage(fileOrUrl);
    } else if (fileOrUrl instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(fileOrUrl);
    }
    setImageQuality(hciMode === 'good' ? 'Good' : '72%');
    navigateTo('review');
  };

  // Simulated AI Waste Classification
  // Note: AI classification is simulated because this prototype evaluates
  // HCI and interaction design rather than machine-learning accuracy.
  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep(1);
    navigateTo('analyzing');

    // Simulate Step 1 -> Step 2
    setTimeout(() => {
      setAnalysisStep(2);
    }, 1000);

    // Simulate Step 2 -> Step 3
    setTimeout(() => {
      setAnalysisStep(3);
    }, 2000);

    // Completion -> Navigate to Result
    setTimeout(() => {
      setIsAnalyzing(false);
      setClassificationResult({
        ...DEMO_CLASSIFICATION_RESULT,
        image: selectedImage || '/assets/bottle-ground.png'
      });
      navigateTo('result');
    }, 2800);
  };

  // Disposal Completion Handler
  const markAsDisposed = () => {
    // Add 10 EcoPoints and update metrics
    setStats(prev => ({
      itemsScanned: prev.itemsScanned + 1,
      itemsRecycled: prev.itemsRecycled + 1,
      ecoPoints: prev.ecoPoints + 10
    }));

    // Add new record to Scan History
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateStr = `Oct ${now.getDate()}, 2026 · ${timeStr}`;

    const newRecord = {
      id: Date.now(),
      item: classificationResult.item || "Plastic Bottle",
      category: classificationResult.recyclable ? "Recyclable" : "Non-Recyclable",
      badCategory: "Type A",
      date: dateStr,
      group: "Today",
      image: selectedImage || "/assets/bottle-clean.png",
      confidence: classificationResult.confidence || 93,
      points: 10,
      disposed: true,
      isRecyclable: classificationResult.recyclable
    };

    setScanHistory(prev => [newRecord, ...prev]);
    navigateTo('complete');
  };

  // Reset demo back to clean initial state
  const resetDemoData = () => {
    localStorage.removeItem('ecosphere_stats');
    localStorage.removeItem('ecosphere_history');
    localStorage.removeItem('ecosphere_logged_in');
    setStats(INITIAL_STATS);
    setScanHistory(INITIAL_SCAN_HISTORY);
    setSelectedImage('/assets/bottle-crushed.png');
    setCurrentScreen('login');
    setNavHistory(['login']);
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        hciMode,
        setHciMode,
        currentScreen,
        setCurrentScreen,
        navHistory,
        navigateTo,
        goBack,
        currentUser,
        isLoggedIn,
        login,
        continueAsGuest,
        logout,
        selectedImage,
        setSelectedImage,
        imageQuality,
        handleImageSelect,
        stats,
        scanHistory,
        setScanHistory,
        isAnalyzing,
        analysisStep,
        startAnalysis,
        classificationResult,
        markAsDisposed,
        resetDemoData,
        inspectorOpen,
        setInspectorOpen,
        selectedHistoryItem,
        setSelectedHistoryItem,
        feedbackModalOpen,
        setFeedbackModalOpen,
        helpModalOpen,
        setHelpModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
