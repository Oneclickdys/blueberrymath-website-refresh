import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import commonEN from './locales/en/common.json';
import authEN from './locales/en/auth.json';
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';

const resources = {
  en: {
    common: commonEN,
    auth: authEN,
    home: homeEN,
    about: aboutEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;