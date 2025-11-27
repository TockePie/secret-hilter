import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translation.json'
import ua from './locales/ua/translation.json'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ua: {
        translation: ua
      }
    },
    supportedLngs: ['en', 'ua'],
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator']
    },
    react: { useSuspense: true }
  })
