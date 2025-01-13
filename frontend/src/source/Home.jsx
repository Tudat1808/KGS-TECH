import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FeaturedProjects from '../components/FeaturedProjects'; // Import FeaturedProjects
import '../App.css';
import StickyRightContact from '../components/StickyRightContact';
import 'animate.css';  // Import Animate.css
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import LatestBlogs from '../components/LatestBlogs';
import MissionVision from "../components/MissionVision";
import CustomerTestimonials from "../components/CustomerTestimonials";
import Animation from '../components/Animation';
import LoadingPage from '../components/LoadingPage'; // Đảm bảo import đúng

const Home = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true); // Thêm state để quản lý loading

  useEffect(() => {
    // Cấu hình AOS và các logic khác cần thiết
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease',
      once: true,
    });

    // Giả lập loading hoặc kiểm tra tải trang
    const timer = setTimeout(() => {
      setLoading(false); // Ẩn trang loading sau một khoảng thời gian
    }, 1500); // Thời gian đợi trước khi ẩn trang loading, giả sử là 3 giây

    return () => clearTimeout(timer); // Cleanup khi component unmount
  }, []);

  if (loading) {
    return <LoadingPage />; // Hiển thị trang loading nếu trang chưa sẵn sàng
  }

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
      <div>
          <StickyRightContact />
      </div>
      <div className="relative w-full">
        {/* Full width image background */}
        
        <div className="relative w-full h-[50vh]">
          <img
            src="https://i.gifer.com/J4o.gif"
            alt="Full Width Image"
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
            <div className="text-center max-w-xl px-4 md:px-0">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate__animated animate__fadeIn">
                {t('home.homepage_title')}
              </h1>
              <p className="text-lg md:text-xl animate__animated animate__fadeIn animate__delay-1s">
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
              className="h-[50vh] object-contain mx-auto animate__animated animate__fadeIn"
            />

            {/* Text Section */}
            <div className="text-left">
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
        <div>
          <Animation aosEffect="fade-up" aosDuration={1500}>
            <MissionVision imagesAndContent={imagesAndContent} />
          </Animation>
        </div>
          

        {/* Featured Projects Section */}
        <div>
          <Animation aosEffect="fade-up" aosDuration={1500}>
            <FeaturedProjects/>
          </Animation>
        </div>
        {/* Latest Blogs Section */}
        <div>
          <Animation aosEffect="fade-up" aosDuration={1500}>
            <LatestBlogs imagesNews={imagesNews} />
          </Animation>
        </div>
        {/* Customer Testimonials*/}
        <div>
          <Animation aosEffect="fade-in" aosDuration={1500}>
            <CustomerTestimonials/>
          </Animation>
        </div>
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Home;
