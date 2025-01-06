import React, { useState } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Option } = Select;

const Header = () => {
  const { t, i18n } = useTranslation(); // Sử dụng i18n để thay đổi ngôn ngữ

  const [language, setLanguage] = useState('vi'); // Mặc định là Tiếng Việt
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái của menu hamburger

  // Hàm để thay đổi ngôn ngữ
  const handleLanguageChange = (value) => {
    setLanguage(value); // Cập nhật trạng thái language
    i18n.changeLanguage(value); // Thay đổi ngôn ngữ của ứng dụng
  };

  // Hàm để mở hoặc đóng menu hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Thay đổi trạng thái của menu khi nhấp vào hamburger
  };

  return (
    <header className="sticky-header flex justify-between items-center p-4 bg-black text-white w-full max-w-full overflow-x-hidden">
      <div className="hover:text-gray-400 flex items-center ml-12 mr-4">
        {/* LOGO */}
        <div>{t('logo')}</div>
      </div>

      {/* Menu Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Menu chính */}
      <div className={`flex items-center gap-8 w-full justify-end ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <ul className="flex gap-8 md:flex-row flex-col justify-end">
          <li className="hover:text-gray-400"><Link to="/">{t('Home')}</Link></li>
          <li className="hover:text-gray-400"><Link to="/company">{t('Company')}</Link></li>
          <li className="hover:text-gray-400"><Link to="/business">{t('Business')}</Link></li>
          <li className="hover:text-gray-400"><Link to="/blog">{t('Blog')}</Link></li>
        </ul>

        {/* Dropdown Select for Language */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Login và Signup trên mobile */}
          <Select
            defaultValue="lo"
            className="text-sm sm:text-base"
          >
            <Option value="lo">{t('login')}</Option>
            <Option value="si">{t('signup')}</Option>
          </Select>

          {/* Dropdown ngôn ngữ */}
          <Select
            value={language} // Truyền giá trị của ngôn ngữ hiện tại
            onChange={handleLanguageChange} // Gọi hàm khi thay đổi ngôn ngữ
            className="bg-gray-700 text-white text-sm sm:text-base"
          >
            <Option value="vi">Tiếng Việt</Option>
            <Option value="en">English</Option>
            <Option value="ja">日本語</Option>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
