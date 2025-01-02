import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import TabTableComponent from '../components/TabTableComponent';
import MilestoneTracker from '../components/MilestoneTracker';
import Slider from "react-slick";
import '../App.css';

const Company = () => {
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
      autoplaySpeed: 2000,    // Thời gian giữa các slide (ms)
    };
    const images = [
      "https://ivision.com/wp-content/uploads/2023/02/AdobeStock_229930631.jpeg",
    ];

    const [currentIndex1, setCurrentIndex1] = useState(0);
    
  
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
        <img
          src="https://ivision.com/wp-content/uploads/2023/02/AdobeStock_229930631.jpeg" // Thay đổi URL ảnh ở đây
          alt="Full Width Image"
          className="object-cover w-full h-full"
        />
        {/* Nội dung phía trên ảnh */}
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
          <div className="text-center max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              KGS-Tech Company
            </h1>
            <p className="text-lg md:text-xl">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
            </p>
          </div>
        </div>
        <div>Navigation bar Here Ex: Home : About KGS-Tech Group</div>
  
        <div className="text-left max-w-full pl-6 sm:pl-12 md:pl-20 lg:pl-60">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                Core Values
            </h1>
            <p className="text-lg md:text-xl">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br></br>Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
            </p>
        </div>
        <TabTableComponent/>
        <MilestoneTracker/>
        
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

export default Company;
