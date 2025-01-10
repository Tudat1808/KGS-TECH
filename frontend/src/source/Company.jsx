import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import TabTableComponent from '../components/TabTableComponent';
import MilestoneTracker from '../components/MilestoneTracker';
import CenteredImageGallery from '../components/CenteredImageGallery';
import { Link, useLocation } from "react-router-dom";
import '../App.css';
import StickyRightContact from '../components/StickyRightContact';
import 'animate.css';  // Import Animate.css
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const Company = () => {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <div className="relative w-full">
                <div className="relative w-full h-[500px]">
                    <img
                        src="https://ivision.com/wp-content/uploads/2023/02/AdobeStock_229930631.jpeg"
                        alt="Full Width Image"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
                        <div className="text-center max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                                {t('company.title')}
                            </h1>
                            <p className="text-lg md:text-xl">
                                {t('company.description')}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <StickyRightContact/>
                </div>

                <div className="text-left max-w-full px-6 sm:px-12 md:px-20 lg:px-96 mt-12 mb-12" id="core">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        {t('company.core_values.title')}
                    </h1>
                    <p className="text-lg md:text-xl">
                        {t('company.core_values.paragraph1')}
                        <br />
                        {t('company.core_values.paragraph2')}
                    </p>
                    <hr className="mt-6 w-1/2 border-t-2 border-gray-300 opacity-50 mx-auto" />
                </div>

                <div className="space-y-12 mb-12">
                    <TabTableComponent />
                </div>
                <div className="">
                    <MilestoneTracker />
                </div>
                

                <div className="flex flex-col items-center justify-center p-8">
                    <h1 className="text-center text-4xl md:text-4xl font-bold mb-8 text-gray-800">
                        {t('company.leaders')}
                    </h1>
                </div>
                <CenteredImageGallery />
                <ScrollToTopButton />
                <Footer />
            </div>
        </>
    );
};

export default Company;
