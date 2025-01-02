import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import { FaNewspaper } from 'react-icons/fa';
import '../App.css';

const Home = () => {
  const { t } = useTranslation();
  const imagesAndContent = [
    {
      image: "https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros."
    },
    {
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      image: "https://nativespeaker.vn/uploaded/page_1072_1668137657_1668137676.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros."
    }
  ];
  const settings = {
    dots: true,              // Hiển thị các chấm bên dưới slider
    infinite: true,          // Lặp lại vô hạn
    speed: 500,              // Tốc độ chuyển slide (ms)
    slidesToShow: 1,         // Số lượng slide hiển thị cùng lúc
    slidesToScroll: 1,       // Số slide cuộn mỗi lần
    autoplay: true,          // Tự động chuyển slide
    autoplaySpeed: 2000,     // Thời gian giữa các slide (ms)
  };

  const images = [
    "https://www.shutterstock.com/image-photo/male-mature-caucasian-ceo-businessman-600nw-2142010187.jpg",
    "https://data.si/en/wp-content/uploads/2018/05/business-address-slovenia-europe-800x445.jpg",
    "https://www.knobloch.co.nz/wp-content/uploads/2022/05/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1-1120x630-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext1 = () => {
    setCurrentIndex1((prevIndex1) => (prevIndex1 + 1) % imagesAndContent.length);
  };

  const goToPrev1 = () => {
    setCurrentIndex1((prevIndex1) =>
      prevIndex1 === 0 ? imagesAndContent.length - 1 : prevIndex1 - 1
    );
  };

  return (
    <>
      <Header />
      <div className="relative w-full h-[500px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-96 flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white px-4 py-2 rounded-full bg-black bg-opacity-50 shadow-lg hover:bg-opacity-75"
        >
          <LeftOutlined />
        </button>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white px-4 py-2 rounded-full bg-black bg-opacity-50 shadow-lg hover:bg-opacity-75"
        >
          <RightOutlined />
        </button>

        <h1 className="text-center text-4xl md:text-6xl font-extrabold p-8">
          KGS-Tech Headlines
        </h1>
        <div className="flex justify-center items-center">
          <div className="text-center max-w-xl text-lg text-gray-700">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis euismod, nisl
              ut tincidunt tempus, nisi elit venenatis eros, ut vehicula purus libero at odio. Aenean tempor orci euismod nunc convallis.
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
          <h1 className="text-center text-4xl md:text-4xl font-bold mb-8 text-gray-800">
            Mission and Vision
          </h1>

          <div className="w-full max-w-4xl">
            <Slider {...settings}>
              {imagesAndContent.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                  />
                  <div className="flex justify-center items-center mt-4 w-full">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        
        <div className="flex flex-col items-center p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Latest News</h2>
          <div>
            <FaNewspaper size={30} />
          </div>
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 lg:space-y-0 container">
            
            <div className="flex flex-col items-center space-y-4">
              <a href="/news" className="hover:text-blue-400">
                <img
                  src="https://img.freepik.com/premium-photo/diverse-group-business-professionals-cheering-with-arms-raised-front-modern-office-building_36682-315305.jpg"
                  alt="Latest News"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="text-lg text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a href="/news" className="hover:text-blue-400">
                <img
                  src="https://img.freepik.com/premium-photo/building-with-word-company-it_1115474-114806.jpg"
                  alt="Latest News"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="text-lg text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a href="/news" className="hover:text-blue-400">
                <img
                  src="https://www.sbsgroup.com.sg/wp-content/uploads/Register-Cleaning-Company-in-Singapore.jpg"
                  alt="Latest News"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="text-lg text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Home;
