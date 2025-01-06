import React from "react";
import { FacebookFilled, LinkedinFilled, PhoneFilled, YoutubeFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 py-8 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
          <p className="break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">About KGS-Tech Groups</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">Products</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
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
