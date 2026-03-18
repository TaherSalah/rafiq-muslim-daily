import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslations from './locales/ar.json';
import enTranslations from './locales/en.json';
import premiumAr from './locales/premium_ar.json';
import premiumEn from './locales/premium_en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ar: {
                translation: { ...arTranslations, ...premiumAr },
            },
            en: {
                translation: { ...enTranslations, ...premiumEn },
            },
        },
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
