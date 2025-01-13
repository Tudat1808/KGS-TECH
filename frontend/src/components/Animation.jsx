import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

const Animation = ({ children, aosEffect = 'fade-up', aosDuration = 1000, className = '' }) => {

  useEffect(() => {
    // Khởi tạo AOS khi component được mount
    AOS.init({ duration: aosDuration, once: true, offset: 200 });

    // Cleanup khi component unmount
    return () => {
      AOS.refresh();
    };
  }, [aosDuration]);

  return (
    <div data-aos={aosEffect} className={className}>
      {children}
    </div>
  );
};

export default Animation;
