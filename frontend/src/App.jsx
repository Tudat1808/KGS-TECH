import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './source/Home';
import Company from './source/Company';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bussiness from './source/Bussiness';
import Blog from './source/Blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/company" element={<Company />} /> 
        <Route path="/bussiness" element={<Bussiness />} /> 
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </Router>
  );
}

export default App;