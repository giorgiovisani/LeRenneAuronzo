// src/config/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from '../locales/eng.json';
import it from '../locales/it.json';
import attractionsEn from '../locales/attractions_eng.json';
import attractionsIt from '../locales/attractions_it.json';

const resources = {
  en: {
    translation: eng,
    attractions: attractionsEn
  },
  it: {
    translation: it,
    attractions: attractionsIt
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'it', // default language
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
