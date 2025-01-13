import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const { Option } = Select;

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [i18n.language]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 bg-black text-white w-full p-4 flex items-center justify-between z-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Logo Centered for mobile */}
      <div className="text-center md:text-left flex-grow md:flex-none">
        <Link to="/" className="text-xl font-bold">{t('header.LOGO')}</Link>
      </div>

      {/* Language Selector on the right (Mobile) */}
      <div className="md:hidden">
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="bg-gray-700 text-white w-[90px]"
        >
          <Option value="en">EN</Option>
          <Option value="vi">VI</Option>
          <Option value="ja">JP</Option>
        </Select>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-black z-50 md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-start p-4">
          <li className={`p-2 ${isActive('/') ? 'text-blue-500 font-bold' : 'hover:text-gray-400'}`}>
            <Link to="/">{t('header.home')}</Link>
          </li>
          <li className={`p-2 ${isActive('/company') ? 'text-blue-500 font-bold' : 'hover:text-gray-400'}`}>
            <Link to="/company">{t('header.company')}</Link>
          </li>
          <li className={`p-2 ${isActive('/business') ? 'text-blue-500 font-bold' : 'hover:text-gray-400'}`}>
            <Link to="/business">{t('header.business')}</Link>
          </li>
          <li className={`p-2 ${isActive('/blog') ? 'text-blue-500 font-bold' : 'hover:text-gray-400'}`}>
            <Link to="/blog">{t('header.blog')}</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <ul className="flex gap-4">
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
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="bg-gray-700 text-white w-[90px]"
        >
          <Option value="en">English</Option>
          <Option value="vi">Tiếng Việt</Option>
          <Option value="ja">日本語</Option>
        </Select>
      </nav>
    </header>
  );
};

export default Header;
