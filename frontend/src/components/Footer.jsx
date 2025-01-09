import React from "react";
import { Link } from "react-router-dom";
import { FacebookFilled, LinkedinFilled, PhoneFilled, YoutubeFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-600 text-gray-300 py-8 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.aboutUs')}</h4>
          <p className="break-words">
            {t('footer.aboutText')}
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.aboutKGS')}</h4>
          <ul className="space-y-2">
            <li><Link to="/business#projects" className="hover:text-blue-400">{t('footer.products')}</Link></li>
            <li><Link to="/business#TopBusiness" className="hover:text-blue-400">{t('footer.services')}</Link></li>
            <li><Link to="/company#core" className="hover:text-blue-400">{t('footer.careers')}</Link></li>
            <li><Link to="/business#joinusnow" className="hover:text-blue-400">{t('footer.contactUs')}</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.contactUs')}</h4>
          <p>{t('footer.email')}: <a href="mailto:info@techcompany.com" className="hover:text-blue-400">info@kgstechcompany.com</a></p>
          <p>{t('footer.phone')}:
            <a href="tel: +0 (123) 456-789" className="hover:text-blue-400 pl-1">
              +0 (123) 456-789
            </a>
          </p>
          <p>{t('footer.address')}: 40 so 16 duong An Phu quan Thu Duc</p>
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
          © {new Date().getFullYear()} KGS-Tech Company. {t('footer.allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
