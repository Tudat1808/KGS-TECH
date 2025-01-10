import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import Animation from '../components/Animation';

// Thêm các cài đặt cho Slider (nếu có)
const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,  // Dừng autoplay khi hover chuột
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1200, // Large Screen
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  

const MissionVision = ({ imagesAndContent }) => {
  const { t } = useTranslation();

  if (!imagesAndContent || imagesAndContent.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 space-y-6">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800">
          {t('home.mission_and_vision')}
        </h1>
        <p className="text-gray-600">{t('home.noContentAvailable')}</p>
      </div>
    );
  }

  return (
    <><Animation aosEffect="fade-up" aosDuration={1500}>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 space-y-6">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 flex items-center">
            {t('home.mission_and_vision')}
          </h1>

          <div className="w-full max-w-4xl">
            <Slider {...settings}>
              {imagesAndContent.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-[500px] rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                  <div className="flex justify-center items-center mt-4 w-full px-6">
                    <p className="text-gray-800">{item.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
    </Animation>
    </>
  );
};

export default MissionVision;
