import React from 'react';
import { motion } from 'framer-motion';
import { FaQuran, FaUsers, FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ScreenKhatma from '../assets/9.jpg';

const GroupKhatma: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const benefits = t('groupKhatma.benefits', { returnObjects: true }) as string[];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className={`flex flex-col ${isRtl ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>

                    {/* Visual Side */}
                    <motion.div
                        className="flex-1 w-full relative"
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Real App Screenshot Phone */}
                        <motion.div
                            className={`absolute z-20 ${isRtl ? '-right-4 md:-right-12' : '-left-4 md:-left-12'} -bottom-12 w-48 md:w-56 hidden md:block`}
                            initial={{ y: 20 }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="relative aspect-[9/19] border-4 border-gray-900 rounded-[2rem] bg-gray-900 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-lg z-20"></div>
                                <img src={ScreenKhatma} alt="Group Khatma System" className="w-full h-full object-cover object-top" />
                            </div>
                        </motion.div>

                        <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-bold mb-8">{t('groupKhatma.cardTitle')}</h3>

                                {/* Progress Circle */}
                                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 relative flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 256 256">
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="120"
                                            fill="transparent"
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="12"
                                        />
                                        <motion.circle
                                            cx="128"
                                            cy="128"
                                            r="120"
                                            fill="transparent"
                                            stroke="#4ade80"
                                            strokeWidth="12"
                                            strokeDasharray={2 * Math.PI * 120}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
                                            whileInView={{ strokeDashoffset: 2 * Math.PI * 120 * (1 - 0.75) }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-5xl font-bold font-mono">75%</div>
                                        <div className="text-sm opacity-80 mt-2">{t('groupKhatma.progressLabel')}</div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <FaUsers className="text-xl mb-2 mx-auto text-blue-300" />
                                        <div className="text-2xl font-bold">1,420</div>
                                        <div className="text-xs opacity-70">{t('groupKhatma.participants')}</div>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <FaQuran className="text-xl mb-2 mx-auto text-emerald-300" />
                                        <div className="text-2xl font-bold">450</div>
                                        <div className="text-xs opacity-70">{t('groupKhatma.remainingJuz')}</div>
                                    </div>
                                </div>

                                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                                    {t('groupKhatma.cta')}
                                    {isRtl ? (
                                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                    ) : (
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className={`flex-1 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold text-sm mb-6">
                            <FaUsers />
                            <span>{t('groupKhatma.tag')}</span>
                        </div>

                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('groupKhatma.title')}<br />
                            <span className="text-indigo-600">{t('groupKhatma.titleHighlight')}</span>
                        </h2>

                        <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('groupKhatma.description')}
                        </p>

                        <div className="space-y-4">
                            {Array.isArray(benefits) && benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-3 text-lg text-gray-700 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <FaCheck className="text-xs" />
                                    </div>
                                    <span className={isRtl ? 'text-right' : 'text-left'}>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GroupKhatma;
