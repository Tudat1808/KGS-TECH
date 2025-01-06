import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import TabTableComponent from '../components/TabTableComponent';
import MilestoneTracker from '../components/MilestoneTracker';
import CenteredImageGallery from '../components/CenteredImageGallery';
import { Link } from "react-router-dom";
import '../App.css';

const Company = () => {
    const { t } = useTranslation();
    const images = [
      "https://ivision.com/wp-content/uploads/2023/02/AdobeStock_229930631.jpeg",
    ];
    return (
      <>
        <Header />
        <div className="relative w-full">
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
          </div>

        <div className="px-6 py-2 mt-6"><Link to="/">Home</Link> -{'>'} Company</div>
  
        <div className="text-left max-w-full pl-6 sm:pl-12 md:pl-20 lg:pl-60">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Core Values
          </h1>
          <p className="text-lg md:text-xl">
            We uphold the highest standards of honesty and ethics in all that we do. Our actions reflect our commitment to being trustworthy and transparent. 
            <br />Embracing change and fostering creativity, we constantly strive to find new and better ways to deliver value to our stakeholders.
          </p>
          <hr className="mt-6 w-1/2 border-t-2 border-gray-300 opacity-50 mx-auto" />
        </div>

        <div className="space-y-12 mb-12">
          <TabTableComponent />
        </div>
        <MilestoneTracker />

        
          <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-center text-4xl md:text-4xl font-bold mb-8 text-gray-800">
              KGS-Tech Leaders
            </h1>
          </div>
          <CenteredImageGallery/>
          <ScrollToTopButton />
          <Footer />
        </div>
      </>
    );
  };

export default Company;
