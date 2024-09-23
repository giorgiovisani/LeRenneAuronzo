// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files for both languages
import enTranslation from './locales/eng.json';
import itTranslation from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      it: {
        translation: itTranslation
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback to English if translation is missing
    interpolation: {
      escapeValue: false // React already escapes strings, so disable it
    }
  });

export default i18n;
