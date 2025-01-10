import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaDiscord } from 'react-icons/fa'; // Import icon từ react-icons
import '../App.css';

const StickyRightContact = () => {
  const [isVisible, setIsVisible] = useState(true); // Mặc định là visible

  useEffect(() => {
    // Hàm kiểm tra vị trí cuộn
    const handleScroll = () => {
      const footer = document.getElementById('footer'); // Lấy phần tử footer
      const footerRect = footer.getBoundingClientRect(); // Vị trí của footer
      if (footerRect.top <= window.innerHeight) {
        setIsVisible(false); // Ẩn các nút khi cuộn đến footer
      } else {
        setIsVisible(true); // Hiển thị các nút khi không cuộn đến footer
      }
    };

    // Đặt sự kiện cuộn khi component được mount
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Zalo Icon */}
        <a 
          href="https://zalo.me/your-zalo-id" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-icon bg-green-500 hover:bg-green-600"
        >
          <FaWhatsapp className="text-white w-8 h-8" />
        </a>
        
        {/* Mail Icon */}
        <a 
          href="mailto:your-email@example.com" 
          className="contact-icon bg-blue-500 hover:bg-blue-600"
        >
          <FaEnvelope className="text-white w-8 h-8" />
        </a>
        
        {/* Discord Icon */}
        <a 
          href="https://discord.gg/your-discord-link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-icon bg-indigo-600 hover:bg-indigo-700"
        >
          <FaDiscord className="text-white w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default StickyRightContact;
