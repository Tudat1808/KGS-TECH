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
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex gap-8">
      <ul className="flex gap-8">
        <li className="hover:text-gray-400">{home}</li>
        <li className="hover:text-gray-400">{company}</li>
        <li className="hover:text-gray-400">{business}</li>
        <li className="hover:text-gray-400">{blog}</li>
      </ul>
      </div>
      
      <div className="flex items-center gap-4">
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
