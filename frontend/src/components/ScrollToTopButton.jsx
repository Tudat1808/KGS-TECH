import React, { useState } from 'react';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Hiển thị nút khi người dùng cuộn xuống
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lắng nghe sự kiện cuộn
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-white text-black rounded-full shadow-lg hover:bg-blue-600 transition ${visible ? 'block' : 'hidden'}`}
    >
      <UpOutlined />
    </button>
  );
};

export default ScrollToTopButton;
