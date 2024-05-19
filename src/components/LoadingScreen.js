// src/LoadingScreen.js

import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import logo from './images/bulb.webp'; // Import your image

const LoadingScreen = ({ onLoaded }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          onLoaded();
          return prev;
        }
      });
    }, 30); // Adjust this for faster/slower loading

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="loading-container">
      <img src={logo} alt="Loading" className="loading-logo" />
      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{ width: `${loadingPercentage}%` }}
        ></div>
      </div>
      <div className="loading-text">{loadingPercentage}%</div>
    </div>
  );
};

export default LoadingScreen;
