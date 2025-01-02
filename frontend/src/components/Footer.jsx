import React from "react";
import { FacebookFilled, LinkedinFilled, PhoneFilled, YoutubeFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">About KGS-Tech Groups</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">Products</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p>Email: <a href="mailto:info@techcompany.com" className="hover:text-blue-400">info@kgstechcompany.com</a></p>
          <p>Phone: +0 (123) 456-789</p>
          <p>Address: 40 so 16 duong An Phu quan Thu Duc</p>
          <p className="space-x-6">
            <FacebookFilled />
            <LinkedinFilled />
            <PhoneFilled />
            <YoutubeFilled />
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-left text-sm pl-12">
          © {new Date().getFullYear()} KGS-Tech Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;