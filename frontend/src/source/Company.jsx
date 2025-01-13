import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import TabTableComponent from '../components/TabTableComponent';
import MilestoneTracker from '../components/MilestoneTracker';
import CenteredImageGallery from '../components/CenteredImageGallery';
import StickyRightContact from '../components/StickyRightContact';
import 'animate.css';  // Import Animate.css
import Animation from '../components/Animation';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import { useLocation } from 'react-router-dom'; // Import useLocation để nhận diện khi chuyển trang
import LoadingPage from '../components/LoadingPage'; // Import trang loading

const Company = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [loading, setLoading] = useState(true);  // State để quản lý việc hiển thị loading

  // Khởi tạo AOS mỗi khi trang được load hoặc chuyển đổi
  useEffect(() => {
    // Hàm khởi tạo AOS sau khi nội dung đã sẵn sàng
    const initializeAOS = () => {
      AOS.init({
        duration: 1000, // Thời gian cho hiệu ứng animation
        once: true, // Chạy animation chỉ 1 lần duy nhất
        offset: 200, // Kích hoạt animation khi phần tử gần vào viewport
      });
      AOS.refresh(); // Refresh AOS khi có thay đổi
    };

    // Giả lập việc tải trang với setTimeout
    const timer = setTimeout(() => {
      setLoading(false);  // Đặt loading = false sau khi 3 giây (hoặc thời gian tải bạn muốn)
      initializeAOS();  // Khởi tạo AOS sau khi trang chính đã sẵn sàng
    }, 1000); // Thời gian chờ (1.5 giây)

    // Cleanup timeout khi component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [location]); // Phụ thuộc vào location để AOS refresh khi chuyển trang

  // Nếu trang đang tải, hiển thị trang loading
  if (loading) {
    return <LoadingPage />;  // Hiển thị trang loading nếu trang chính chưa tải xong
  }

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
            <div className="absolute inset-0 flex justify-start items-center bg-black bg-opacity-50 text-white">
                <Animation aosEffect="fade-up" aosDuration={1500}>
                    <div className="text-left max-w-4xl md:pl-96 px-4 md:pr-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            {t('company.title')}
                        </h1>
                        <p className="text-lg md:text-xl">
                            {t('company.description')}
                        </p>
                    </div>
                </Animation>
            </div>

        </div>

        <div>
          <StickyRightContact />
        </div>

        <div className="text-left max-w-full px-6 sm:px-12 md:px-20 lg:px-96 mt-12 mb-12" id="core">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t('company.core_values.title')}
          </h1>
          <p className="text-lg md:text-xl">
            {t('company.core_values.paragraph1')}
            <br />
            {t('company.core_values.paragraph2')}
          </p>
          <hr className="mt-6 w-1/2 border-t-2 border-gray-300 opacity-50 mx-auto" />
        </div>

        <Animation aosEffect="fade-up" aosDuration={1500}>
          <div className="space-y-12 mb-12">
            <TabTableComponent />
          </div>
        </Animation>

        <Animation aosEffect="fade-up" aosDuration={1500}>
          <div className="">
            <MilestoneTracker />
          </div>
        </Animation>

        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="text-center text-4xl md:text-4xl font-bold mb-8 text-gray-800">
            {t('company.leaders')}
          </h1>
        </div>

        <Animation aosEffect="fade-up" aosDuration={1500}>
          <div>
            <CenteredImageGallery />
          </div>
        </Animation>

        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Company;
