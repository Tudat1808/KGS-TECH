import React, { useState } from 'react';
import { FaTrophy } from 'react-icons/fa'; // Import icon từ react-icons
import { useTranslation } from 'react-i18next'; // Import i18n hook

const TabTableComponent = () => {
  const { t } = useTranslation(); // Khởi tạo hook i18n
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      title: t('tabs.0.title'), // Dùng t() để lấy tiêu đề từ file JSON
      content: [
        t('tabs.0.content.0'),
        t('tabs.0.content.1'),
        t('tabs.0.content.2'),
      ]
    },
    {
      title: t('tabs.1.title'),
      content: [
        t('tabs.1.content.0'),
        t('tabs.1.content.1'),
        t('tabs.1.content.2'),
      ]
    },
    {
      title: t('tabs.2.title'),
      content: [
        t('tabs.2.content.0'),
        t('tabs.2.content.1'),
        t('tabs.2.content.2'),
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Tab Headers inside Table */}
      <table className="w-full border-collapse border border-gray-700 bg-gray-800 shadow-md rounded-lg">
        <thead>
          <tr>
            {tabs.map((tab, index) => (
              <th
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`px-6 py-3 cursor-pointer text-lg font-semibold text-center transition duration-300 ${
                  selectedTab === index
                    ? 'bg-blue-800 text-white transform scale-105 shadow-md'
                    : 'text-gray-400 hover:bg-blue-700 hover:text-white'
                }`}
              >
                {tab.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={tabs.length}
              className="px-4 py-6 bg-gray-900 text-center text-xl font-medium rounded-b-lg"
            >
              {/* Add Icon before Content */}
              {tabs[selectedTab].content.map((content, idx) => (
                <p
                  key={idx}
                  className="flex items-center mb-2 transition duration-300 ease-in-out transform text-gray-300 hover:text-white"
                >
                  {/* Use FaTrophy icon from react-icons */}
                  <FaTrophy className="w-6 h-6 text-blue-700 mr-3" />
                  {content}
                </p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabTableComponent;
