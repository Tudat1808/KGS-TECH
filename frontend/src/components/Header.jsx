import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const { Option } = Select;

const Header = () => {
  const { t, i18n } = useTranslation(); // Sử dụng i18n để thay đổi ngôn ngữ
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const [menuOpen, setMenuOpen] = useState(false);

  // Hàm để thay đổi ngôn ngữ
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value); // Thay đổi ngôn ngữ khi người dùng chọn
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Set lại ngôn ngữ hiện tại khi component mount hoặc khi i18n.language thay đổi
  useEffect(() => {
    setMenuOpen(false); // Đóng menu khi đổi ngôn ngữ
  }, [i18n.language]);

  // Hàm kiểm tra nếu đường dẫn hiện tại trùng với link của menu
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky-header flex justify-between items-center p-4 bg-black text-white w-full max-w-full overflow-x-hidden">
      <div className="hover:text-gray-400 flex items-center ml-12 mr-4">
        {/* LOGO */}
        <div><Link to="/">{t('header.LOGO')}</Link></div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Menu chính */}
      <div className={`flex items-center gap-8 w-full justify-end ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <ul className="flex gap-8 md:flex-row flex-col justify-end">
          <li className={`hover:text-gray-400 ${isActive('/') ? 'text-blue-500 font-bold' : ''}`}>
            <Link to="/">{t('header.home')}</Link>
          </li>
          <li className={`hover:text-gray-400 ${isActive('/company') ? 'text-blue-500 font-bold' : ''}`}>
            <Link to="/company">{t('header.company')}</Link>
          </li>
          <li className={`hover:text-gray-400 ${isActive('/business') ? 'text-blue-500 font-bold' : ''}`}>
            <Link to="/business">{t('header.business')}</Link>
          </li>
          <li className={`hover:text-gray-400 ${isActive('/blog') ? 'text-blue-500 font-bold' : ''}`}>
            <Link to="/blog">{t('header.blog')}</Link>
          </li>
        </ul>

        {/* Dropdown Select for Language */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Login và Signup trên mobile */}
          <Select
            defaultValue="lo"
            className="text-sm sm:text-base"
          >
            <Option value="lo">{t('header.login')}</Option>
            <Option value="si">{t('header.signup')}</Option>
          </Select>

          {/* Dropdown ngôn ngữ */}
          <Select
            value={i18n.language} // Sử dụng giá trị ngôn ngữ hiện tại từ i18n
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
