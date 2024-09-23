
export type TranslationKeys = 'homepage.title' | 'homepage.poetic_sentence' | 'homepage.author'; // Add all your keys here

import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    // custom key type
    defaultNamespace: 'translation';
    resources: {
      translation: {
        [key in TranslationKeys]: string;
      };
    };
  }
}