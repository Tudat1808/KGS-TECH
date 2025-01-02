import React, { useState } from 'react';
import { FaTrophy } from 'react-icons/fa'; // Import icon từ react-icons

const TabTableComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { title: 'Tab 1', content: ['Content 1.1', 'Content 1.2', 'Content 1.3'] },
    { title: 'Tab 2', content: ['Content 2.1', 'Content 2.2', 'Content 2.3'] },
    { title: 'Tab 3', content: ['Content 3.1', 'Content 3.2', 'Content 3.3'] },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Tab Headers inside Table */}
      <table className="w-full border-collapse border border-gray-700 bg-white shadow-md rounded-full">
        <thead>
          <tr className="bg-gray-800">
            {tabs.map((tab, index) => (
              <th
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`px-6 py-3 cursor-pointer text-lg font-semibold text-center transition duration-300 ${
                  selectedTab === index
                    ? 'bg-[#D2B48C] text-gray-800 transform scale-105'
                    : 'text-gray-300 hover:bg-[#D2B48C] hover:text-gray-800'
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
              className="px-4 py-6 bg-gray-50 text-center text-xl font-medium rounded-b-lg"
            >
              {/* Add Icon before Content */}
              {tabs[selectedTab].content.map((content, idx) => (
                <p key={idx} className="flex items-center mb-2 transition duration-300 ease-in-out transform">
                  {/* Use FaTrophy icon from react-icons */}
                  <FaTrophy className="w-6 h-6 text-[#D2B48C] mr-3" />
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
