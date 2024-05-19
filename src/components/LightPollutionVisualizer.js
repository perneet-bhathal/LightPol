// src/LightPollutionVisualizer.js

import React, { useState, useEffect } from 'react';
import './LightPollutionVisualizer.css';
import image1 from './images/photo1.jpg';
import image2 from './images/photo2.jpg';
import image3 from './images/photo3.jpg';
import image4 from './images/photo4.webp';
import image5 from './images/photo5.jpg';
import image6 from './images/photo6.jpg';
import image7 from './images/photo7.jpg';
import image8 from './images/photo8.jpg';
import image9 from './images/photo9.webp';
import image10 from './images/photo10.webp';
import image11 from './images/photo11.jpg';
import image12 from './images/photo12.jpg';
import image13 from './images/photo13.webp';

const imagePaths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13
];

const descriptions = [
  "10 Million Years Ago",
  "1 Million Years Ago",
  "100 Thousands Years Ago",
  "10 Thousand Years Ago",
  "1 Thousand Years Ago",
  "500 years ago",
  "250 years ago",
  "100 years ago",
  "50 years ago",
  "25 years ago",
  "10 years ago",
  "5 years ago",
  "TODAY"
];

const LightPollutionVisualizer = ({ onLearnMore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' && currentImageIndex < imagePaths.length - 1) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      } else if (event.key === 'ArrowLeft' && currentImageIndex > 0) {
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex]);

  return (
    <div className="image-container">
      <img
        src={imagePaths[currentImageIndex]}
        alt={descriptions[currentImageIndex]}
      />
      <div className="description">
        {descriptions[currentImageIndex]}
      </div>
      {currentImageIndex === imagePaths.length - 1 && (
        <div className="buttons-container">
          <button className="learn-more-button" onClick={onLearnMore}>Learn More</button>
          <button className="reset-button" onClick={() => setCurrentImageIndex(0)}>Back to First Image</button>
        </div>
      )}
    </div>
  );
};

export default LightPollutionVisualizer;