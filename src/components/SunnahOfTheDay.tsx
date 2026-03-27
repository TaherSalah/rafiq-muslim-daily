import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaShareAlt, FaHandSparkles } from 'react-icons/fa';

const SunnahOfTheDay: React.FC = () => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    
    // Fallback items if translation is missing
    const items = t('sunnah.items', { returnObjects: true }) as string[] || [
        "السواك عند الوضوء والصلاة",
        "البدء باليمين في اللبس والنعل",
        "دعاء الخروج من المنزل",
        "صلاة الضحى (صلاة الأوابين)"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 10000); // Change every 10 seconds
        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <section className="py-12 px-4">
            <motion.div 
                className="max-w-md mx-auto glass rounded-3xl p-8 border-t-4 border-t-emerald-500 shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                {/* Decorative background element */}
                <div className="absolute top-[-20px] right-[-20px] text-emerald-500/10 text-8xl rotate-12 pointer-events-none">
                    <FaHandSparkles />
                </div>

                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        {t('sunnah.title')}
                    </div>

                    <h2 className="text-2xl font-black text-slate-800">
                        {t('sunnah.subtitle')}
                    </h2>

                    <div className="min-h-[100px] flex items-center justify-center w-full">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl font-bold text-slate-700 leading-relaxed italic"
                            >
                                "{items[index]}"
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const text = `"${items[index]}" - ${t('sunnah.title')} (${t('footer.appName')})`;
                            if (navigator.share) {
                                navigator.share({
                                    title: t('sunnah.title'),
                                    text: text,
                                    url: window.location.href,
                                }).catch(() => {});
                            } else {
                                navigator.clipboard.writeText(`${text}\n${window.location.href}`);
                                alert(t('i18n.language') === 'ar' ? 'تم النسخ!' : 'Copied!');
                            }
                        }}
                        className="mt-4 flex items-center gap-2 bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-slate-700 transition-colors"
                    >
                        <FaShareAlt className="text-xs" />
                        {t('sunnah.share')}
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default SunnahOfTheDay;
