import React from "react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const benefit = [
    {
      img: "https://jobsgo.vn/blog/wp-content/uploads/2023/11/business-la-gi.jpg",
      title: t('benefits.careerGrowth.title'),
      description: t('benefits.careerGrowth.description'),
    },
    {
      img: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/06/Business-la-gi.jpg",
      title: t('benefits.workLifeBalance.title'),
      description: t('benefits.workLifeBalance.description'),
    },
    {
      img: "https://gspotgentics.com/wp-content/uploads/2024/12/adobestock_283754344_fc964e6df5b54d89b4da70e2c74ea83d.jpg",
      title: t('benefits.salaryCompensation.title'),
      description: t('benefits.salaryCompensation.description'),
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-72">
      <div className="text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {t('benefits.title')}
        </h2>
      </div>
      <div className="mt-10 space-y-10">
        {benefit.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-start bg-gray-100 p-6 rounded-lg shadow-md`}
          >
            <div className="flex justify-center mb-4 md:mb-0 md:w-1/3">
              <img
                src={item.img}
                alt={item.title}
                className="w-64 h-64 object-cover"
              />
            </div>
            <div className="md:w-2/3 text-left md:pl-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
