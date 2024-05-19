// src/App.js

import React, { useState } from 'react';
import './App.css';
import LightPollutionVisualizer from './components/LightPollutionVisualizer';
import LoadingScreen from './components/LoadingScreen';
import LightPollutionInfo from './components/LightPollutionInfo';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  if (!isLoaded) {
    return <LoadingScreen onLoaded={() => setIsLoaded(true)} />;
  }

  if (showInfo) {
    return <LightPollutionInfo onBack={() => setShowInfo(false)} />;
  }

  return <LightPollutionVisualizer onLearnMore={() => setShowInfo(true)} />;
}

export default App;
