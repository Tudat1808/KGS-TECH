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
import Management from './source/Management/Management';
import EditImages_Blogs from './source/Management/EditImages_Blogs';
import Company_Info from './source/Management/Company_Info';
import Employee from './source/Management/Employee';

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
          <Route path="/management" element={<Management />} />
          <Route path="/management/editimages_blogs" element={<EditImages_Blogs/>} />
          <Route path="/management/company_info" element={<Company_Info/>} />
          <Route path="/management/employee" element={<Employee/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;