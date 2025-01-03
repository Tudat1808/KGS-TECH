import React, { useState } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Option } = Select;

const Header = ({ home, company, business, blog }) => {
  const { t, i18n } = useTranslation();
  
  const [language, setLanguage] = useState('vi'); // Mặc định là Tiếng Việt
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái của menu hamburger
  
  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Thay đổi trạng thái của menu khi nhấp vào hamburger
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white w-full max-w-full overflow-x-hidden">
      <div className="hover:text-gray-400 flex items-center ml-12">
        <div>LOGO</div>
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
          <li className="hover:text-gray-400"> <Link to="/">home</Link> </li>
          <li className="hover:text-gray-400"><Link to="/company">company</Link></li>
          <li className="hover:text-gray-400"><Link to="/bussiness">bussiness</Link></li>
          <li className="hover:text-gray-400"><Link to="/blog">blog</Link></li>
        </ul>

        {/* Dropdown Select for Language */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Login on top and Language below on mobile */}
          <Select
            defaultValue="lo"
            className="text-sm sm:text-base"
          >
            <Option value="lo">Login</Option>
            <Option value="si">Signup</Option>
          </Select>

          <Select
            defaultValue="vi"
            onChange={handleLanguageChange}
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

