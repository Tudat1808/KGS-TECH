import Slider from "react-slick";
import { FaNewspaper, FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../App.css';

const Home = () => {
  const { t } = useTranslation(); // Hook để lấy hàm t() từ i18next

  const imagesAndContent = [
    {
      image: "https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg",
      content: t('mission_1')
    },
    {
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      content: t('mission_2')
    },
    {
      image: "https://nativespeaker.vn/uploaded/page_1072_1668137657_1668137676.jpg",
      content: t('mission_3')
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
        <div className="relative w-full h-[500px]">
          <img
            src="https://previews.123rf.com/images/peshkov/peshkov1807/peshkov180700247/104448752-connected-devices-internet-of-things-iot-at-abstract-background-3d-rendering.jpg"
            alt="Full Width Image"
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
            <div className="text-center max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                {t('homepage_title')}
              </h1>
              <p className="text-lg md:text-xl">
                {t('homepage_description')}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-full px-6 sm:px-12 md:px-20 lg:px-36 mt-12 mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gradient p-8 mt-6">
            {t('headlines')}
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
            <span className="text-primary">{t('company_name')}</span> {t('headlines_description')}
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 space-y-6">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 flex items-center">
            {t('mission_and_vision')}
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

        {/* Latest Blogs Section */}
        <div className="flex flex-col items-center p-8 space-y-6">
          <div className="flex items-center justify-center mb-6 space-x-3">
            <FaNewspaper size={30} className="text-gray-800" />
            <h2 className="text-3xl font-semibold text-gray-800">{t('latest_blogs')}</h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 w-full px-4 lg:px-64">
            {/* News Item 1 */}
            <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-500">
              <Link to="/blog">
                <img
                  src="https://emmareed.net/wp-content/uploads/2017/10/blog-2355684_1920.jpg"
                  alt="Latest News"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
                <div className="text-lg text-gray-700 mt-4 text-center lg:text-left">
                  <p>
                    {t('blog_1')}
                  </p>
                </div>
              </Link>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-500">
              <Link to="/blog">
                <img
                  src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
                  alt="Latest News"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
                <div className="text-lg text-gray-700 mt-4 text-center lg:text-left">
                  <p>
                    {t('blog_2')}
                  </p>
                </div>
              </Link>
            </div>

            {/* News Item 3 */}
            <div className="flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-500">
              <Link to="/blog">
                <img
                  src="https://eastsidewriters.com/wp-content/uploads/2021/06/featured-13.jpg"
                  alt="Latest News"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                />
                <div className="text-lg text-gray-700 mt-4 text-center lg:text-left">
                  <p>
                    {t('blog_3')}
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
