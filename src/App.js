import React, { useState } from 'react';
import './App.css';
import LightPollutionVisualizer from './components/LightPollutionVisualizer';
import LoadingScreen from './components/LoadingScreen';
import LightPollutionInfo from './components/LightPollutionInfo';
import AnimalVisualizer from './components/AnimalVisualizer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showAnimalVisualizer, setShowAnimalVisualizer] = useState(false);

  if (!isLoaded) {
    return <LoadingScreen onLoaded={() => setIsLoaded(true)} />;
  }

  if (showAnimalVisualizer) {
    return <AnimalVisualizer onBack={() => setShowAnimalVisualizer(false)} />;
  }

  if (showInfo) {
    return <LightPollutionInfo 
             onBack={() => setShowInfo(false)} 
             onAnimalVisualizer={() => setShowAnimalVisualizer(true)} 
           />;
  }

  return <LightPollutionVisualizer onLearnMore={() => setShowInfo(true)} />;
}

export default App;
