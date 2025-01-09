import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogComponents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const { t, i18n } = useTranslation(); // lấy i18n để xác định ngôn ngữ hiện tại

  const posts = [
    { id: 1, titleKey: t("blog.post1Title"), descriptionKey: t("blog.post1Description"), imageUrl: "https://emmareed.net/wp-content/uploads/2017/10/blog-2355684_1920.jpg", date: "2025-01-01" },
    { id: 2, titleKey: t("blog.post2Title"), descriptionKey: t("blog.post2Description"), imageUrl: "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png", date: "2025-01-02" },
    { id: 3, titleKey: t("blog.post3Title"), descriptionKey: t("blog.post3Description"), imageUrl: "https://mailrelay.com/wp-content/uploads/2017/04/video-tutoriales-sobre-email-marketing.jpg", date: "2025-01-03" },
    { id: 4, titleKey: t("blog.post4Title"), descriptionKey: t("blog.post4Description"), imageUrl: "https://chonweb.vn/hsc_content/hsc_up_dinhkem/1625816574.png", date: "2025-01-04" },
    { id: 5, titleKey: t("blog.post5Title"), descriptionKey: t("blog.post5Description"), imageUrl: "https://www.nameboy.com/wp-content/uploads/2021/02/Nameboy-Blog-graphics.png", date: "2025-01-05" },
    { id: 6, titleKey: t("blog.post6Title"), descriptionKey: t("blog.post6Description"), imageUrl: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png", date: "2025-01-06" },
    { id: 7, titleKey: t("blog.post7Title"), descriptionKey: t("blog.post7Description"), imageUrl: "https://www.beeblueg.com/images/bbg-blog/january-2020/whatisblog.png", date: "2025-01-07" },
    { id: 8, titleKey: t("blog.post8Title"), descriptionKey: t("blog.post8Description"), imageUrl: "https://eastsidewriters.com/wp-content/uploads/2021/06/featured-13.jpg", date: "2025-01-08" },
    { id: 9, titleKey: t("blog.post9Title"), descriptionKey: t("blog.post9Description"), imageUrl: "https://blogencounters.com/wp-content/uploads/2023/01/blogideas.jpg", date: "2025-01-09" },
    { id: 10, titleKey: t("blog.post10Title"), descriptionKey: t("blog.post10Description"), imageUrl: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png", date: "2025-01-10" }
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / postsPerPage)));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Định nghĩa hàm hiển thị ngày tháng theo locale hiện tại
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(i18n.language);  // sử dụng i18n.language để lấy locale hiện tại
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-8">{t('blog.title')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {currentPosts.map((post, index) => {
          const isLarge = index === 0;
          return (
            <div
              key={post.id}
              className={`bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 mb-4 ${isLarge ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <img
                src={post.imageUrl}
                alt={t(post.titleKey)}  // Dịch tiêu đề
                className={`w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-md mb-4 transition-all duration-500 ease-in-out transform ${isLarge ? 'h-96' : ''}`}
              />
              <h2 className="text-2xl font-semibold text-white mb-2">{t(post.titleKey)}</h2>  {/* Dịch tiêu đề */}
              <p className="text-gray-300 mb-4">{t(post.descriptionKey)}</p>  {/* Dịch mô tả */}
              <p className="text-gray-500 text-sm mb-4">{formatDate(post.date)}</p>  {/* Dịch ngày tháng */}
              <Link to={`/blog1`} className="text-blue-400 hover:text-blue-500 transition-all duration-300">{t('blog.readMore')}</Link>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          {t('blog.previous')}
        </button>
        <span className="text-white">{t('blog.page')} {currentPage} {t('blog.of')} {Math.ceil(posts.length / postsPerPage)}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          {t('blog.next')}
        </button>
      </div>
    </div>
  );
};

export default BlogComponents;
