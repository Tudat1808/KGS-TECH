import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import BlogComponents from '../components/BlogComponents';
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import '../App.css';

const Blog = () => {
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
          {/* Hero Image */}
          <div className="relative w-full h-[500px]">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png"
              alt="Full Width Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-6 sm:px-12 lg:px-72">
              <div className="text-center sm:text-left max-w-xl mx-auto sm:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">
                  KGS-Tech Blogs
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-shadow-md">
                  Welcome to the official blog of KGS-Tech Company, where innovation meets excellence. In this space, we share our insights, ideas, and the latest updates about the tech industry, our company, and how we’re shaping the future of technology.
                </p>
              </div>
            </div>
          </div>

          {/* Blog Introduction */}
          <div className="text-left max-w-full pl-6 sm:pl-12 md:pl-20 lg:pl-60 lg:pr-60 mt-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
                Welcome to KGS-Tech Company's Blog
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              The world of technology moves fast, and it’s crucial for both businesses and individuals to keep up. <br />
              By sharing our experiences, insights, and updates on this platform, we hope to create a space where our readers can learn, grow, 
              and stay informed about the latest developments in tech. 
              We believe in the power of collaboration and knowledge sharing, and this blog is just one of the ways we foster that spirit.
            </p>
            {/* Call to Action */}
            <div className="text-center mt-8">
                <Link to="/blog#Blogs" className="inline-block py-2 px-6 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                    Explore More Articles
                </Link>
            </div>
          </div>

          {/* Blog Components */}
          <div id="Blogs" className="my-12">
            <BlogComponents />
          </div>

          {/* Scroll to Top Button */}
          <ScrollToTopButton />

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  };

export default Blog;
