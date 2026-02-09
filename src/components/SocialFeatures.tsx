import React from 'react';
import { motion } from 'framer-motion';
import { FaShareAlt, FaPenFancy, FaImage, FaListUl } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ScreenShare from '../assets/Screenshot_2026_02_09_12_56_57_76_4bfa514ba3a89880002cd1121a611476.jpg';

const SocialFeatures: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        {t('socialFeatures.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('socialFeatures.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Feature 1: Share as Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-3xl p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="h-64 bg-gray-900 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center">
                            {/* Real App Screenshot Overlay */}
                            <img src={ScreenShare} alt="Share as Image Feature" className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-110 transition-transform duration-700" />

                            <div className="relative z-10 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm font-bold border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {t('socialFeatures.feature1.title')}
                            </div>

                            {/* Floating Tools */}
                            <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'} flex gap-2 z-20`}>
                                <div className="w-8 h-8 rounded-full bg-white text-gray-600 flex items-center justify-center shadow-lg"><FaImage size={14} /></div>
                                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg group-hover:animate-bounce"><FaShareAlt size={14} /></div>
                            </div>
                        </div>

                        <h3 className={`text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                            <span className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg"><FaShareAlt /></span>
                            {t('socialFeatures.feature1.title')}
                        </h3>
                        <p className={`text-gray-600 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('socialFeatures.feature1.desc')}
                        </p>
                    </motion.div>

                    {/* Feature 2: Custom Wird */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 rounded-3xl p-8 border border-gray-100 group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="h-64 bg-slate-200 rounded-2xl mb-8 relative overflow-hidden p-6">
                            <div className="bg-white rounded-xl shadow-lg h-full p-4 flex flex-col gap-3 overflow-hidden">
                                <div className={`flex justify-between items-center border-b pb-2 mb-2 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <span className="font-bold text-gray-800">{t('socialFeatures.feature2.title')}</span>
                                    <FaPenFancy className="text-gray-400" />
                                </div>
                                <div className={`flex items-center gap-3 bg-indigo-50 p-3 rounded-lg ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-6 h-6 rounded-full border-2 border-indigo-200 flex items-center justify-center text-xs text-indigo-600 font-bold">1</div>
                                    <span className={`text-sm font-medium ${isRtl ? 'text-right' : 'text-left'}`}>{t('socialFeatures.feature2.item1')}</span>
                                </div>
                                <div className={`flex items-center gap-3 bg-gray-50 p-3 rounded-lg opacity-60 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-6 h-6 rounded-full border-2 border-gray-200"></div>
                                    <span className={`text-sm font-medium ${isRtl ? 'text-right' : 'text-left'}`}>{t('socialFeatures.feature2.item2')}</span>
                                </div>
                                <div className="mt-auto flex justify-center">
                                    <div className="w-32 h-2 bg-gray-100 rounded-full"></div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                {t('socialFeatures.feature2.cta')}
                            </div>
                        </div>

                        <h3 className={`text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                            <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg"><FaListUl /></span>
                            {t('socialFeatures.feature2.mainTitle')}
                        </h3>
                        <p className={`text-gray-600 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('socialFeatures.feature2.mainDesc')}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SocialFeatures;
