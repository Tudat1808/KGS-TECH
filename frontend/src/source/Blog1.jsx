import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../App.css';
import StickyRightContact from '../components/StickyRightContact';

const Blog1 = () => {
  const { t } = useTranslation();
  const currentDate = new Date().toLocaleDateString(); // Để lấy ngày hiện tại
  const author = t('blog1.author'); // Sử dụng i18n cho tác giả
  
  return (
    <>
      <Header />
      <div className="relative w-full">
        <div className="text-left max-w-full pl-6 sm:pl-12 md:pl-20 lg:pl-60 lg:pr-60 mt-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
            {t('blog1.welcomeTitle')}
          </h1>
          <div className="text-sm text-gray-600 mb-4">
            <span>{t('blog1.by')} {author}</span> | <span>{currentDate}</span>
          </div>
          <div>
            <StickyRightContact/>
          </div>
          {/* Thêm ảnh ở đây */}
          <img 
            src="https://img.freepik.com/free-psd/travel-world-horizontal-banner-template_23-2148849955.jpg?t=st=1736309648~exp=1736313248~hmac=95f617e3a8a9b4eb8b5556fdc5619bb7e9b00247494fb516c53df9d0f38e8e7a&w=1380" 
            alt="Blog Header Image" 
            className="w-full h-auto mb-6 rounded-lg shadow-lg" 
          />
          <p className="text-lg md:text-xl mb-6 px-6 sm:px-12 lg:px-64 leading-relaxed text-gray-800">
            <span className="font-semibold">{t('blog1.traveling')}</span> {t('blog1.travelingDescription')}
            <h2 className="text-2xl font-semibold text-blue-600 mt-6">{t('blog1.hiddenGemsTitle')}</h2>
            {t('blog1.hiddenGemsDescription')}
            <h2 className="text-2xl font-semibold text-blue-600 mt-6">{t('blog1.offBeatenPathTitle')}</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>{t('blog1.philippines')}:</strong> {t('blog1.philippinesDescription')}</li>
              <li><strong>{t('blog1.swissAlps')}:</strong> {t('blog1.swissAlpsDescription')}</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mt-6">{t('blog1.whyGemsMatterTitle')}</h2>
            <p>{t('blog1.whyGemsMatterDescription')}</p>
            <h2 className="text-2xl font-semibold text-blue-600 mt-6">{t('blog1.topDestinationsTitle')}</h2>
            <ol className="list-decimal pl-6 text-gray-700">
              <li><strong>{t('blog1.indonesia')}:</strong> {t('blog1.indonesiaDescription')}</li>
              <li><strong>{t('blog1.peru')}:</strong> {t('blog1.peruDescription')}</li>
              <li><strong>{t('blog1.scandinavia')}:</strong> {t('blog1.scandinaviaDescription')}</li>
            </ol>
            <p>{t('blog1.finalMessage')}</p>
          </p>
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Blog1;
