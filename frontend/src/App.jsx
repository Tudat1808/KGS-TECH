import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './source/Home';
import Company from './source/Company';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Business from './source/Business';
import Blog from './source/Blog';
import Blog1 from './source/Blog1';
import Layout from './components/Layout';
import Admin from './source/Admin';
import Management_CompanyInfo from './source/Management/Management_Companyinfo';
import EditImages_Blogs from './source/Management/EditImages_Blogs';
import Employee from './source/Management/Employee';
import Test from './source/Management/Test';
import HomePage from './source/Management/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path="/company" element={<Company />} /> 
          <Route path="/business" element={<Business />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/management/editimages_blogs" element={<EditImages_Blogs/>} />
          <Route path="/management/management_companyinfo" element={<Management_CompanyInfo/>} />
          <Route path="/management/employee" element={<Employee/>} />
          <Route path="/management/test" element={<Test/>} />
          <Route path="/management/homepage" element={<HomePage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;