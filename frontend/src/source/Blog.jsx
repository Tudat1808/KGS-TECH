import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import BlogComponents from '../components/BlogComponents';
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../App.css';
import StickyRightContact from '../components/StickyRightContact';
import Animation from '../components/Animation';
import LoadingPage from '../components/LoadingPage'; // Make sure this is correctly imported

const Blog = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [loading, setLoading] = useState(true); // Initialize the loading state to true

    useEffect(() => {
        if (location.hash) {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        
        // Simulate a loading process, for example, fetching data or waiting for assets to load
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 3 seconds or after your data is fetched
        }, 1500);

        return () => clearTimeout(timer); // Cleanup the timer
    }, [location]);

    if (loading) {
        return <LoadingPage />; // Display the loading page while loading is true
    }
    
    return (
      <>
        <Header />
        <div className="relative w-full">
          {/* Hero Image */}
          <div className="relative w-full h-[500px]">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png"
              alt="Full Width Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-6 sm:px-12 lg:px-72">
            <Animation aosEffect="fade-in" aosDuration={1500}>
              <div className="text-center sm:text-left max-w-xl mx-auto sm:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">
                  {t("blog.heroTitle")}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-shadow-md">
                  {t("blog.heroDescription")}
                </p>
              </div>
            </Animation>
            </div>
          </div>

          <div>
            <StickyRightContact/>
          </div>

          {/* Blog Introduction */}
          <div className="text-left max-w-full px-6 sm:px-12 md:px-20 lg:px-96 mt-12 mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
                {t("blog.introTitle")}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              {t("blog.introDescription")}
            </p>
            {/* Call to Action */}
            <div className="text-center mt-8">
                <Link to="/blog#Blogs" className="inline-block py-2 px-6 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                    {t("blog.exploreArticles")}
                </Link>
            </div>
          </div>

          {/* Blog Components */}
          <Animation aosEffect="zoom-in" aosDuration={1500}>
          <div id="Blogs" className="my-12">
            <BlogComponents />
          </div>
          </Animation>

          {/* Scroll to Top Button */}
          <ScrollToTopButton />

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  };

export default Blog;
