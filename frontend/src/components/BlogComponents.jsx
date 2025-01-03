import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const posts = [
  { id: 1, title: "Post 1", imageUrl: "https://emmareed.net/wp-content/uploads/2017/10/blog-2355684_1920.jpg", description: "This is a description of the first post.", date: "2025-01-01" },
  { id: 2, title: "Post 2", imageUrl: "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png", description: "This is a description of the second post.", date: "2025-01-02" },
  { id: 3, title: "Post 3", imageUrl: "https://mailrelay.com/wp-content/uploads/2017/04/video-tutoriales-sobre-email-marketing.jpg", description: "This is a description of the third post.", date: "2025-01-03" },
  { id: 4, title: "Post 4", imageUrl: "https://chonweb.vn/hsc_content/hsc_up_dinhkem/1625816574.png", description: "This is a description of the fourth post.", date: "2025-01-04" },
  { id: 5, title: "Post 5", imageUrl: "https://www.nameboy.com/wp-content/uploads/2021/02/Nameboy-Blog-graphics.png", description: "This is a description of the fifth post.", date: "2025-01-05" },
  { id: 6, title: "Post 6", imageUrl: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png", description: "This is a description of the sixth post.", date: "2025-01-06" },
  { id: 7, title: "Post 7", imageUrl: "https://www.beeblueg.com/images/bbg-blog/january-2020/whatisblog.png", description: "This is a description of the seventh post.", date: "2025-01-07" },
  { id: 8, title: "Post 8", imageUrl: "https://eastsidewriters.com/wp-content/uploads/2021/06/featured-13.jpg", description: "This is a description of the eighth post.", date: "2025-01-08" },
  { id: 9, title: "Post 9", imageUrl: "https://blogencounters.com/wp-content/uploads/2023/01/blogideas.jpg", description: "This is a description of the ninth post.", date: "2025-01-09" },
  { id: 10, title: "Post 10", imageUrl: "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png", description: "This is a description of the tenth post.", date: "2025-01-10" },
];

const BlogComponents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;  // 5 bài viết mỗi trang
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / postsPerPage)));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-8">Our Latest Blog</h1>

      {/* Grid: 1 cột cho di động, 2 cột cho tablet, 3 cột cho desktop */}
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
                alt={post.title}
                className={`w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-md mb-4 transition-all duration-500 ease-in-out transform ${isLarge ? 'h-96' : ''}`}
              />
              <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <Link to={`/posts/${post.id}`} className="text-blue-400 hover:text-blue-500 transition-all duration-300">Read More ...</Link>
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
          Previous
        </button>
        <span className="text-white">Page {currentPage} of {Math.ceil(posts.length / postsPerPage)}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogComponents;
