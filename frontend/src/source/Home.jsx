import React from 'react';
import Slider from "react-slick";
import { FaNewspaper } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FeaturedProjects from '../components/FeaturedProjects'; // Import FeaturedProjects
import '../App.css';

const Home = () => {
  const { t } = useTranslation(); // Hook để lấy hàm t() từ i18next

  const imagesAndContent = [
    {
      image: "https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg",
      content: t('home.mission_1')
    },
    {
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      content: t('home.mission_2')
    },
    {
      image: "https://nativespeaker.vn/uploaded/page_1072_1668137657_1668137676.jpg",
      content: t('home.mission_3')
    }
  ];
  const imagesNews = [
    {
      image: "https://emmareed.net/wp-content/uploads/2017/10/blog-2355684_1920.jpg",
      content: t('home.news_1'),
      link: "/blog1"  // Đường dẫn riêng cho bài viết
    },
    {
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
      content: t('home.news_2'),
      link: "/news/2"  // Đường dẫn riêng cho bài viết
    },
    {
      image: "https://eastsidewriters.com/wp-content/uploads/2021/06/featured-13.jpg",
      content: t('home.news_3'),
      link: "/news/3"  // Đường dẫn riêng cho bài viết
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
        {/* Full width image background */}
        <div className="relative w-full h-[50vh]">
          <img
            src="https://i.gifer.com/J4o.gif"
            alt="Full Width Image"
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
            <div className="text-center max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                {t('home.homepage_title')}
              </h1>
              <p className="text-lg md:text-xl">
                {t('home.homepage_description')}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-full px-6 sm:px-12 md:px-20 lg:px-96 mt-12 mb-12">
          {/* Image and Text Section */}
          <div className="flex flex-col space-y-6">
            {/* Image Section */}
            <img
              src="https://marketplace.canva.com/EAGBcATYJ7Y/1/0/1600w/canva-white-colorful-illustrative-mind-map-brainstorm-oy01T9imIrQ.jpg" // Thay URL hình ảnh của bạn
              alt="Headline Image"
              className="h-[50vh] object-contain mx-auto" // Điều chỉnh kích thước ảnh và căn giữa
            />

            {/* Text Section */}
            <div className="text-left"> {/* Căn chữ về bên trái */}
              <h1 className="text-3xl md:text-5xl font-extrabold text-gradient mb-6">
                {t('home.headlines')}
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                <span className="text-primary">{t('home.company_name')}</span> {t('home.headlines_description')}
              </p>
            </div>
          </div>
        </div>



        {/* Mission and Vision Section */}
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

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Latest Blogs Section */}
        <div className="flex flex-col items-center p-8 space-y-6">
          <div className="flex items-center justify-center mb-6 space-x-3">
            <FaNewspaper size={30} className="text-gray-800" />
            <h2 className="text-3xl font-semibold text-gray-800">{t('home.latest_blogs')}</h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 w-full px-4 lg:px-64">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              {imagesNews.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <img
                    src={item.image}
                    alt={`News ${index + 1}`}
                    className="object-cover w-full h-[300px]"
                  />

                  {/* Content Section */}
                  <div className="p-6 flex flex-col space-y-4">
                    <p className="text-gray-600 text-justify">
                      {item.content}
                    </p>
                    <div className="text-center mt-4">
                      <Link to={item.link}>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                          {t('home.homepage_ReadMore')}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
