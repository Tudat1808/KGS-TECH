import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const LatestBlogs = ({ imagesNews }) => {
  const { t } = useTranslation();

  if (!imagesNews || imagesNews.length === 0) {
    return (
      <div className="flex flex-col items-center p-8 space-y-6">
        <div className="flex items-center justify-center mb-6 space-x-3">
          <FaNewspaper size={30} className="text-gray-800" />
          <h2 className="text-3xl font-semibold text-gray-800">{t('home.latest_blogs')}</h2>
        </div>
        <p className="text-gray-600">{t('home.noBlogs')}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full space-x-0">
          <h2 className="text-4xl font-bold text-black text-center w-full">{t('home.latest_blogs')}</h2>
      </div>


      <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 w-full lg:px-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-0 lg:p-6">
        {imagesNews.map((item, index) => (
            <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                  src={item.image}
                  alt={`News ${index + 1}`}
                  className="object-cover w-full h-[300px]"
              />
              <div className="p-2 lg:p-6 flex flex-col space-y-4">
                  <p className="text-gray-600 text-justify">{item.content}</p>
                  <div className="text-center mt-4">
                  <Link to={item.link}>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition button-page">
                      {t('home.homepage_ReadMore')}
                      </button>
                  </Link>
                  </div>
              </div>
            </div>
        ))}
        </div>
      </div>

  </div>
  );
};

export default LatestBlogs;
