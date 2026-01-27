import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Download: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section className="py-20 bg-white" id="download">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-gradient-to-br from-islamic-green to-primary-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                        </div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="inline-block mb-6"
                            >
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                    <FaHeart className="text-4xl" />
                                </div>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {t('download.title')}
                            </h2>

                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                {t('download.subtitle')}
                            </p>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <motion.a
                                    href="#"
                                    className="bg-white text-islamic-green px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaApple className="text-2xl" />
                                    <div className={isRtl ? 'text-right' : 'text-left'}>
                                        <div className="text-xs opacity-70">{t('hero.downloadLabel')}</div>
                                        <div className="text-lg font-bold">{t('hero.downloadAppStore')}</div>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="#"
                                    className="bg-white text-islamic-green px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGooglePlay className="text-2xl" />
                                    <div className={isRtl ? 'text-right' : 'text-left'}>
                                        <div className="text-xs opacity-70">{t('hero.downloadLabel')}</div>
                                        <div className="text-lg font-bold">{t('hero.downloadGooglePlay')}</div>
                                    </div>
                                </motion.a>
                            </div>

                            <p className="text-sm opacity-75">
                                {t('download.availability')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Download;
