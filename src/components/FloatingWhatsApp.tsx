import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FloatingWhatsApp: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className={`fixed bottom-24 ${isRtl ? 'left-6' : 'right-6'} z-50 flex flex-col items-center gap-2`}
        >
            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="glass px-3 py-1.5 rounded-xl shadow-xl text-[10px] font-black text-emerald-800 border-emerald-500/20 whitespace-nowrap"
            >
                {t('premium.support.whatsapp')}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/201094529752"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Pulse Effect */}
                <motion.div
                    className="absolute inset-0 bg-emerald-500 rounded-full"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 border-2 border-white/20">
                    <FaWhatsapp size={28} />
                </div>
            </motion.a>
        </motion.div>
    );
};

export default FloatingWhatsApp;
