import React from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaShieldAlt, FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FamilySection: React.FC = () => {
    const { t } = useTranslation();

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

                <div className="flex flex-col gap-10 max-w-sm mx-auto">
                    {/* Feature 1: Roqya & Offline Mode */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-cyan-50/50 rounded-[2.5rem] p-10 border border-cyan-100 overflow-hidden group min-h-[480px] flex flex-col"
                    >
                        {/* Background Shield Icon */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none`}>
                            <FaShieldAlt className="text-[20rem] text-cyan-600" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center h-full">
                            <div className="w-16 h-16 rounded-3xl bg-cyan-100/80 text-cyan-600 flex items-center justify-center text-3xl mb-8 shadow-sm backdrop-blur-sm border border-white/50">
                                <FaShieldAlt />
                            </div>

                            <h3 className="text-3xl font-black mb-6 text-slate-900 leading-tight">
                                {t('familySection.roqya.title')}
                            </h3>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10 px-2 font-medium">
                                {t('familySection.roqya.desc')}
                            </p>

                            {/* Custom Play Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-auto w-full bg-white/80 backdrop-blur-md rounded-2xl py-4 flex items-center justify-center gap-3 border border-white shadow-lg text-cyan-700 font-black"
                            >
                                <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs pl-0.5 shadow-md shadow-cyan-600/20">
                                    <FaPlay size={10} />
                                </div>
                                <span className="text-base">رقية التحصين</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Feature 2: Kids Corner */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative bg-orange-50/50 rounded-[2.5rem] p-10 border border-orange-100 overflow-hidden group min-h-[480px] flex flex-col"
                    >
                        {/* Background Person Icon */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none`}>
                            <FaChild className="text-[20rem] text-orange-600" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center h-full">
                            <div className="w-16 h-16 rounded-3xl bg-orange-100/80 text-orange-600 flex items-center justify-center shadow-sm backdrop-blur-sm border border-white/50">
                                <span className="text-3xl">🧘‍♂️</span>
                            </div>

                            <h3 className="text-3xl font-black mb-4 text-slate-900 leading-tight mt-6">
                                {t('familySection.kids.title')}
                            </h3>

                            <div className="text-teal-500 text-3xl mb-6">⚡</div>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10 px-2 font-medium">
                                {t('familySection.kids.desc')}
                            </p>

                            {/* Visual Representation of Kids UI */}
                            <div className="mt-auto w-full bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-white shadow-lg flex justify-center items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                                    🦁
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                                    🕌
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                                    🤲
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
