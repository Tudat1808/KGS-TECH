import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../App.css';

const Blog1 = () => {
    const { t } = useTranslation();
    const currentDate = new Date().toLocaleDateString(); // Để lấy ngày hiện tại
    const author = "John Doe"; // Thay đổi theo tên tác giả của bạn
  
    return (
      <>
        <Header />
        <div className="relative w-full">
          <div className="text-left max-w-full pl-6 sm:pl-12 md:pl-20 lg:pl-60 lg:pr-60 mt-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
                Welcome to KGS-Tech Company's Blog
            </h1>
            <div className="text-sm text-gray-600 mb-4">
              <span>By {author}</span> | <span>{currentDate}</span>
            </div>
            {/* Thêm ảnh ở đây */}
            <img 
              src="https://img.freepik.com/free-psd/travel-world-horizontal-banner-template_23-2148849955.jpg?t=st=1736309648~exp=1736313248~hmac=95f617e3a8a9b4eb8b5556fdc5619bb7e9b00247494fb516c53df9d0f38e8e7a&w=1380" 
              alt="Blog Header Image" 
              className="w-full h-auto mb-6 rounded-lg shadow-lg" 
            />
            <p className="text-lg md:text-xl mb-6 px-6 sm:px-12 lg:px-64 leading-relaxed text-gray-800">
                <span className="font-semibold">Traveling</span> is one of the most enriching experiences one can have. It's more than just visiting new places; it's about immersing yourself in different cultures, connecting with people, and creating memories that will last a lifetime. But not all adventures need to involve crowded tourist destinations. There are countless hidden gems across the world that are waiting to be explored by those willing to go off the beaten path.

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">The Hidden Gems of Travel</h2>
                One of the most beautiful aspects of travel is discovering places that aren't typically featured in guidebooks. From secluded beaches in Southeast Asia to serene mountain villages in Europe, there are countless destinations where you can experience true peace and tranquility, far away from the crowds.

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">Off-the-Beaten-Path Adventures</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Philippines:</strong> A remote island known to only a handful of locals, offering pristine beaches, crystal-clear waters, and lush landscapes.</li>
                    <li><strong>Swiss Alps:</strong> A hidden village accessible only by hiking through beautiful forests, offering breathtaking views and a warm local community.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">Why Hidden Gems Matter</h2>
                <p>
                    While these hidden gems might require a bit more effort to find, they offer something truly special: a chance to experience the world in a more intimate and meaningful way. So next time you plan your travels, consider looking beyond the popular destinations and explore the lesser-known spots that might surprise you.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">Top Destinations to Explore</h2>
                <ol className="list-decimal pl-6 text-gray-700">
                    <li><strong>Indonesia:</strong> Quiet beaches with crystal-clear waters perfect for relaxation and exploration.</li>
                    <li><strong>Peru:</strong> Remote mountain villages offering ancient culture and stunning landscapes.</li>
                    <li><strong>Scandinavia:</strong> Off-grid escapes surrounded by nature, ideal for those seeking peace and solitude.</li>
                </ol>

                <p>
                    Whether it's a quiet beach in Indonesia, a remote village in the mountains of Peru, or an off-grid escape in the Scandinavian countryside, the world is full of hidden treasures waiting to be discovered. Travel has the power to transform us, and sometimes the most transformative experiences happen in the places least expected.
                </p>
            </p>
          </div>
          <ScrollToTopButton />
          <Footer />
        </div>
      </>
    );
};

export default Blog1;
