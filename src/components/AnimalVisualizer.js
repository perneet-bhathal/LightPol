// AnimalVisualizer.js

import React, { useState, useEffect } from 'react';
import './LightPollutionVisualizer.css'; // You can use the same CSS file for styling

import animal1 from './images/animal1.jpg';
import animal2 from './images/animal2.webp';
import animal3 from './images/animal3.png';
import animal4 from './images/animal4.png';
import animal5 from './images/animal5.png';

const animalImages = [
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
];

const descriptions = [
    "Deer",
    "Turtle",
    "Owl",
    "Birds",
    "Turtle"
];

const AnimalVisualizer = ({ onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' && currentImageIndex < animalImages.length - 1) {
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
        src={animalImages[currentImageIndex]}
        alt={descriptions[currentImageIndex]}
      />
      <div className="description">
        {descriptions[currentImageIndex]}
      </div>
      <button className="back-button" onClick={onBack}>Back to Information</button>
    </div>
  );
};

export default AnimalVisualizer;
