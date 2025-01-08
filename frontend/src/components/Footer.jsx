import React from "react";
import { Link } from "react-router-dom";
import { FacebookFilled, LinkedinFilled, PhoneFilled, YoutubeFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 py-8 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
          <p className="break-words">
          At KGS-Tech, we believe that technology should be an enabler of change and growth. With a team of highly skilled professionals, we combine expertise with creativity to develop innovative solutions that drive success and add value. Our team is committed to delivering quality results and building long-term partnerships based on trust, integrity, and mutual growth.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">About KGS-Tech Groups</h4>
          <ul className="space-y-2">
            <li><Link to ="/business#projects" className="hover:text-blue-400">Products</Link></li>
            <li><Link to="/business#TopBusiness" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/company#core" className="hover:text-blue-400">Careers</Link></li>
            <li><Link to="/business#joinusnow" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p>Email: <a href="mailto:info@techcompany.com" className="hover:text-blue-400">info@kgstechcompany.com</a></p>
          <p>Phone:
            <a href="tel: +0 (123) 456-789" className="hover:text-blue-400 pl-1">
              +0 (123) 456-789
            </a>
          </p>
          <p>Address: 40 so 16 duong An Phu quan Thu Duc</p>
          <div className="flex space-x-4 mt-4 flex-wrap">
            <FacebookFilled className="text-xl hover:text-blue-400 cursor-pointer" />
            <LinkedinFilled className="text-xl hover:text-blue-400 cursor-pointer" />
            <PhoneFilled className="text-xl hover:text-blue-400 cursor-pointer" />
            <YoutubeFilled className="text-xl hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 px-4">
        <p className="text-sm text-center break-words">
          © {new Date().getFullYear()} KGS-Tech Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
