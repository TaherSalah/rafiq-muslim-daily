import React from 'react';
import { motion } from 'framer-motion';
import { FaShareAlt, FaPenFancy, FaImage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ScreenShare from '../assets/Screenshot_2026_02_09_12_56_57_76_4bfa514ba3a89880002cd1121a611476.jpg';

const SocialFeatures: React.FC = () => {
    const { t } = useTranslation();

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

                <div className="flex flex-col gap-10 max-w-sm mx-auto">
                    {/* Feature 1: Custom Wird */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col min-h-[580px]"
                    >
                        <div className="h-72 bg-slate-200/50 rounded-3xl mb-8 relative overflow-hidden p-6 flex items-center justify-center">
                            <motion.div
                                className="bg-white rounded-3xl shadow-2xl w-full h-full p-6 flex flex-col gap-4 border border-white"
                                initial={{ y: 20 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-center pb-2 border-b border-slate-100">
                                    <div className="text-sm font-black text-slate-800 tracking-tight">ورد الشفاء اليومي</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100">
                                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-indigo-600 border border-indigo-200">1</div>
                                        <span className="text-xs font-bold text-slate-700">سورة الفاتحة</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100 opacity-60">
                                        <div className="w-6 h-6 rounded-full border border-slate-200 bg-white" />
                                        <span className="text-xs font-bold text-slate-400">آية الكرسي</span>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4 flex justify-center">
                                    <div className="w-12 h-1 bg-slate-100 rounded-full" />
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg">
                                    <FaPenFancy />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">
                                    {t('socialFeatures.feature2.mainTitle')}
                                </h3>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {t('socialFeatures.feature2.mainDesc')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature 2: Share as Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col min-h-[580px]"
                    >
                        <div className="h-72 bg-slate-200/50 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center group">
                            <img
                                src={ScreenShare}
                                alt="Share Feature"
                                className="w-44 h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Social Icons */}
                            <motion.div
                                className={`absolute bottom-8 right-12 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-indigo-600 z-10 border border-slate-100`}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaShareAlt size={18} />
                            </motion.div>
                            <motion.div
                                className={`absolute bottom-20 right-8 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center text-slate-600 z-10 border border-slate-100`}
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            >
                                <FaImage size={15} />
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg">
                                    <FaShareAlt />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">
                                    {t('socialFeatures.feature1.title')}
                                </h3>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {t('socialFeatures.feature1.desc')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialFeatures;
