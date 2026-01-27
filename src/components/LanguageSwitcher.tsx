import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-[999] px-4 py-2 rounded-full bg-islamic-green text-white shadow-2xl flex items-center gap-2 hover:bg-islamic-green/90 transition-all duration-300 border-2 border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <span className="text-xl">🌐</span>
            <span className="font-bold uppercase tracking-wider text-sm">
                {i18n.language === 'ar' ? 'EN' : 'العربية'}
            </span>
        </motion.button>
    );
};

export default LanguageSwitcher;
