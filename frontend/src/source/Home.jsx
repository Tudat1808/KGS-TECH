import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
        <Header />
        <div className="bg-cover bg-center h-96">
            <img
                src="https://vakilsearch.com/blog/wp-content/uploads/2022/05/section8-company-do-business.jpg"
                className="object-cover w-full h-screen"
            />
            <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
                <h2 className="text-white text-3xl font-semibold">IMG</h2>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Home;