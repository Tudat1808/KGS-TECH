import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './locales/vi.json';
import ja from './locales/ja.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      ja: { translation: ja },
      en: { translation: en },
    },
    lng: 'vi',  // Ngôn ngữ mặc định
    fallbackLng: 'vi',  // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false,  // Không cần escape trong React
    },
  });

export default i18n;