import React from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaShieldAlt, FaCloudDownloadAlt, FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FamilySection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                        {t('familySection.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        {t('familySection.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Feature 1: Kids Corner */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-100 overflow-hidden group"
                    >
                        <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} p-8 opacity-10`}>
                            <FaChild className="text-9xl text-orange-400" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl mb-6 shadow-sm">
                                <FaChild />
                            </div>

                            <h3 className={`text-3xl font-bold mb-4 text-gray-900 ${isRtl ? 'text-right' : 'text-left'}`}>
                                {t('familySection.kids.title')} <span className="text-2xl">⚡</span>
                            </h3>

                            <p className={`text-gray-600 text-lg leading-relaxed mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                                {t('familySection.kids.desc')}
                            </p>

                            {/* Visual Representation of Kids UI */}
                            <div className="mt-auto bg-white rounded-xl p-4 shadow-lg border border-orange-100 transform group-hover:scale-105 transition-transform duration-500">
                                <div className={`flex gap-4 overflow-hidden ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="flex-shrink-0 w-24 h-32 bg-yellow-100 rounded-lg flex flex-col items-center justify-center p-2 text-center">
                                        <span className="text-2xl mb-2">🦁</span>
                                        <span className="text-xs font-bold text-yellow-700">{t('familySection.kids.card1')}</span>
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-32 bg-blue-100 rounded-lg flex flex-col items-center justify-center p-2 text-center">
                                        <span className="text-2xl mb-2">🕌</span>
                                        <span className="text-xs font-bold text-blue-700">{t('familySection.kids.card2')}</span>
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-32 bg-green-100 rounded-lg flex flex-col items-center justify-center p-2 text-center">
                                        <span className="text-2xl mb-2">🤲</span>
                                        <span className="text-xs font-bold text-green-700">{t('familySection.kids.card3')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Roqya & Offline Mode */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 border border-teal-100 overflow-hidden group"
                    >
                        <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} p-8 opacity-10`}>
                            <FaShieldAlt className="text-9xl text-teal-400" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-2xl mb-6 shadow-sm">
                                <FaShieldAlt />
                            </div>

                            <h3 className={`text-3xl font-bold mb-4 text-gray-900 ${isRtl ? 'text-right' : 'text-left'}`}>
                                {t('familySection.roqya.title')}
                            </h3>

                            <p className={`text-gray-600 text-lg leading-relaxed mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                                {t('familySection.roqya.desc')}
                            </p>

                            {/* Offline Mode Highlight */}
                            <div className="mt-auto bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-teal-100 flex items-center justify-between">
                                <div className={`flex items-center gap-3 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center ${isRtl ? 'pl-1' : 'pr-1'}`}>
                                        <FaPlay size={14} className={isRtl ? '' : 'rotate-180'} />
                                    </div>
                                    <div className={isRtl ? 'text-right' : 'text-left'}>
                                        <div className="font-bold text-gray-900">{t('familySection.roqya.trackTitle')}</div>
                                        <div className="text-xs text-gray-500">{t('familySection.roqya.trackReciter')}</div>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <FaCloudDownloadAlt />
                                    <span>{t('familySection.roqya.offlineMode')}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FamilySection;
