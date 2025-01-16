import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import commonEN from './locales/en/common.json';
import authEN from './locales/en/auth.json';
import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import activitiesEN from './locales/en/activities.json';
import eventsEN from './locales/en/events.json';
import implementationEN from './locales/en/implementation.json';

import commonES from './locales/es/common.json';
import authES from './locales/es/auth.json';
import homeES from './locales/es/home.json';
import aboutES from './locales/es/about.json';
import activitiesES from './locales/es/activities.json';
import eventsES from './locales/es/events.json';
import implementationES from './locales/es/implementation.json';

import commonPT from './locales/pt/common.json';
import authPT from './locales/pt/auth.json';
import homePT from './locales/pt/home.json';
import aboutPT from './locales/pt/about.json';
import activitiesPT from './locales/pt/activities.json';
import eventsPT from './locales/pt/events.json';
import implementationPT from './locales/pt/implementation.json';

const resources = {
  en: {
    common: commonEN,
    auth: authEN,
    home: homeEN,
    about: aboutEN,
    activities: activitiesEN,
    events: eventsEN,
    implementation: implementationEN,
  },
  es: {
    common: commonES,
    auth: authES,
    home: homeES,
    about: aboutES,
    activities: activitiesES,
    events: eventsES,
    implementation: implementationES,
  },
  pt: {
    common: commonPT,
    auth: authPT,
    home: homePT,
    about: aboutPT,
    activities: activitiesPT,
    events: eventsPT,
    implementation: implementationPT,
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