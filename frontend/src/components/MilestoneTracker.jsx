import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const MilestoneProgress = () => {
  const { t } = useTranslation(); // Sử dụng hook useTranslation

  const milestones = [
    {
      title: t('milestones.start.title'),
      description: t('milestones.start.description'),
      date: t('milestones.start.date'),
      completed: true,
      image: 'https://www.shutterstock.com/image-photo/excited-company-boss-team-leader-600nw-1206996322.jpg',
    },
    {
      title: t('milestones.achievement1.title'),
      description: t('milestones.achievement1.description'),
      date: t('milestones.achievement1.date'),
      completed: true,
      image: 'https://thecheapaccountingway.co.uk/wp-content/uploads/2024/01/joyful-multiracial-business-team-at-work-in-modern-2023-11-27-05-01-17-utc-1024x700.jpg',
    },
    {
      title: t('milestones.achievement2.title'),
      description: t('milestones.achievement2.description'),
      date: t('milestones.achievement2.date'),
      completed: false,
      image: 'https://img.lovepik.com/photo/50771/5496.jpg_wh860.jpg',
    },
    {
      title: t('milestones.final.title'),
      description: t('milestones.final.description'),
      date: t('milestones.final.date'),
      completed: false,
      image: 'https://s7d9.scene7.com/is/image/roberthalfintl/how_to_create_a_healthy_workplace_environment:Large-1x?fmt=webp-alpha',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 py-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl text-center font-semibold mb-8">{t('milestoneTracker.title')}</h2>
        <div className="relative">
          {/* Đoạn thẳng (line) thể hiện tiến trình - chỉ hiện ở màn hình lớn */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>

          {/* Flex column to organize milestones */}
          <div className="flex flex-col items-center space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 w-full"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-300 ease-in-out ${
                    milestone.completed
                      ? 'border-gray-400 bg-gray-200 shadow-xl'
                      : 'border-gray-400 bg-gray-200 shadow-md'
                  } z-10 cursor-pointer`}
                >
                  <FaTrophy
                    className={`text-xl ${
                      milestone.completed ? 'text-gray-600' : 'text-gray-500'
                    }`}
                  />
                </div>

                <div className="flex flex-col items-start w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                  <p className="text-sm text-gray-500">{milestone.date}</p>
                  {milestone.completed && (
                    <p className="text-lg text-gray-600">{milestone.description}</p>
                  )}
                </div>

                <div className="w-full md:w-1/3">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneProgress;
