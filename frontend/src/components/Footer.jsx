import React from "react";
import { Link } from "react-router-dom";
import { DiscordFilled, FacebookFilled, LinkedinFilled, PhoneFilled, YoutubeFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 w-full overflow-hidden" id="footer">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-2 md:px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-16">
        <div className="flex flex-col space-y-4 items-center mt-24 sm:mt-12 md:mt-24">
          <img src="https://i.imgur.com/NUSlL3a.png" alt="KGS-Tech Logo" className="h-48 mx-auto" />
        </div>

        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-white">{t('footer.aboutUs')}</h4>
          <p className="text-gray-400 leading-relaxed">
            {t('footer.aboutText')}
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-white">{t('footer.aboutKGS')}</h4>
          <ul className="space-y-2">
            <li><Link to="/business#projects" className="hover:text-blue-400">{t('footer.products')}</Link></li>
            <li><Link to="/business#TopBusiness" className="hover:text-blue-400">{t('footer.services')}</Link></li>
            <li><Link to="/company#core" className="hover:text-blue-400">{t('footer.careers')}</Link></li>
            <li><Link to="/business#joinusnow" className="hover:text-blue-400">{t('footer.contactUs')}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">{t('footer.news')}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">{t('footer.sysdev')}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">{t('footer.offshore')}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">{t('footer.foodmanagement')}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">{t('footer.realestatebrokerage')}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">{t('footer.recruitment')}</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-4 md:space-y-2 lg:space-y-4 w-full ">
          <h4 className="text-lg font-semibold text-white">{t('footer.contactUs')}</h4>
          <p>{t('footer.email')}: <a href="mailto:info@techcompany.com" className="hover:text-blue-400">info@kgstechcompany.com</a></p>
          <p>{t('footer.phone')}:
            <a href="tel:+0123456789" className="hover:text-blue-400 pl-1">+0 (123) 456-789</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <FacebookFilled className="text-xl hover:text-blue-400 cursor-pointer" />
            <LinkedinFilled className="text-xl hover:text-blue-400 cursor-pointer" />
            <PhoneFilled className="text-xl hover:text-blue-400 cursor-pointer" />
            <DiscordFilled className="text-xl hover:text-blue-400 cursor-pointer" />
          </div>

          {/* Map Section */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.149585702824!2d106.74995871533485!3d10.80532586164306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527327dbce0d1%3A0xeedd1dd9ff329d7a!2zNDAgxJDGsOG7nW5nIMSR4buVaSAgMTYgLCBBbiBQaMO6LCBUaOG7pyDEkMOgQ8OibiwgVGjhu6UgROG7q25nIFbhuq1uIE5hbQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
              width="120%"
              height="200"
              style={{ border: 0, width: "100%", height: "200px", maxWidth: "100%" }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
              className="rounded-lg shadow-md w-full lg:w-[120%]"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} KGS-Tech Company. {t('footer.allRightsReserved')}
        </p>
        <div className="mt-2 text-sm text-gray-400">
          <Link to="/terms-of-use" className="hover:text-blue-400">Term of use</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
