// Animation.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

const Animation = ({ children, aosEffect = 'fade-up', aosDuration = 1000, className = '' }) => {
  
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({ duration: aosDuration, once: true });
  }, [aosDuration]);

  return (
    <div data-aos={aosEffect} className={className}>
      {children}
    </div>
  );
};

export default Animation;
