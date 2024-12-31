import React, { useState } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const Header = ({ home, company, business, blog }) => {
  const { t, i18n } = useTranslation();
  
  const [language, setLanguage] = useState('vi'); // Mặc định là Tiếng Việt
  
  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value); 
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="hover:text-gray-400 flex items-center ml-12">
        <div>LOGO</div>
      </div>
      
      <div className="flex items-center gap-12">
      <ul className="flex gap-8">
        <li className="hover:text-gray-400">Home</li>
        <li className="hover:text-gray-400">Company</li>
        <li className="hover:text-gray-400">Business</li>
        <li className="hover:text-gray-400">Blog</li>
      </ul>
        <Select
          defaultValue="vi"
          style={{ width: 120 }}
          onChange={handleLanguageChange}
          className="bg-gray-700 text-white"
        >
          <Option value="vi">Tiếng Việt</Option>
          <Option value="en">English</Option>
          <Option value="ja">日本語</Option>
        </Select>
      </div>
    </header>
  );
}   ;

export default Header;
