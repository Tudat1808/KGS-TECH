import React, { useState } from 'react';
import Slider from "react-slick";
import { FaNewspaper, FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../App.css';

const Home = () => {
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
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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


  return (
    <>
      <Header />
      <div className="relative w-full">
        <div className="relative w-full h-[500px]">
        <img
          src="https://previews.123rf.com/images/peshkov/peshkov1807/peshkov180700247/104448752-connected-devices-internet-of-things-iot-at-abstract-background-3d-rendering.jpg"
          alt="Full Width Image"
          className="object-cover w-full h-full"
        />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
            <div className="text-center max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                KGS-Tech Company's Homepage
              </h1>
              <p className="text-lg md:text-xl">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
              </p>
            </div>
          </div>
        </div>
        
        <h1 className="text-center text-4xl md:text-6xl font-extrabold p-8">
            KGS-Tech Headlines
          </h1>
          <div className="flex justify-center items-center text-center p-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </div>

        {/* Mission and Vision Section */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
          <h1 className="text-center text-4xl md:text-4xl font-bold mb-8 text-gray-800">
            <FaEye className="inline-block mr-2"/>Mission and Vision
          </h1>

          <div className="w-full max-w-4xl">
            <Slider {...settings}>
              {imagesAndContent.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-[500px] rounded-lg shadow-lg"
                  />
                  <div className="flex justify-center items-center mt-4 w-full">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="flex flex-col items-center p-8">
          <div className="flex items-center justify-center mb-4">
            <FaNewspaper size={30} className="text-gray-800 mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800">Latest News</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 w-full lg:px-64">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/blog">
                <img
                  src="https://img.freepik.com/premium-photo/diverse-group-business-professionals-cheering-with-arms-raised-front-modern-office-building_36682-315305.jpg"
                  alt="Latest News"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
                <div className="text-lg text-gray-700 mt-4 text-center lg:text-left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Link to="/blog">
                <img
                  src="https://img.freepik.com/premium-photo/building-with-word-company-it_1115474-114806.jpg"
                  alt="Latest News"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
                <div className="text-lg text-gray-700 mt-4 text-center lg:text-left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Link to="/blog">
                <img
                  src="https://www.sbsgroup.com.sg/wp-content/uploads/Register-Cleaning-Company-in-Singapore.jpg"
                  alt="Latest News"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
                <div className="text-lg text-gray-700 mt-4 text-center lg:text-left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                  </p>
                </div>
              </Link>
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
