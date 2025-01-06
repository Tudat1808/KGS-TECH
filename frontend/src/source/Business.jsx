import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import OurProjects from '../components/OurProjects';
import Benefits from '../components/Benefits';
import ContactUs from '../components/ContactUs';
import { Link } from "react-router-dom";
import '../App.css';

const Business = () => {
    const { t } = useTranslation();

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
        <div className="relative w-full">
          <div className="relative w-full h-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1683141136472-bd21514555a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBsZWFkZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Full Width Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 text-white px-6 sm:px-12 lg:px-72">
              <div className="text-center sm:text-left max-w-xl mx-auto sm:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
                  KGS-Tech Business
                </h1>
                <p className="text-base sm:text-lg md:text-xl">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros.
                </p>
              </div>
            </div>
          </div>

        <div className="px-6 py-2 mt-6"><Link to="/">Home</Link> -{'>'} Business</div>
  
        <div className="text-left max-w-4xl mx-auto px-6 sm:px-12 md:px-20 mt-12">
          {/* Tiêu đề */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 text-center">
            Company's Partnership
          </h1>

          {/* Nội dung chính */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
            <p className="text-lg md:text-xl text-gray-800 mb-6">
              <span className="font-semibold text-brown-600">Partnerships</span> are vital to our success, allowing for mutual growth and innovation.
            </p>

            {/* Bảng nổi bật các điểm quan trọng */}
            <table className="min-w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-200">Key Aspect</th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 hover:bg-gray-100 transition-all duration-300">
                  <td className="px-6 py-4 text-sm text-gray-700"><strong>Shared Vision</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700">Long-term commitment and shared goals.</td>
                </tr>
                <tr className="border-t border-gray-200 hover:bg-gray-100 transition-all duration-300">
                  <td className="px-6 py-4 text-sm text-gray-700"><strong>Innovation</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700">Combining expertise for creative solutions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <OurProjects/>
        <Benefits/>
        <ContactUs/>
        <ScrollToTopButton />
        <Footer />
        </div>
      </>
    );
  };

export default Business;
