import React from 'react';
import { motion } from 'framer-motion';
import { FaQuran, FaUsers, FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const GroupKhatma: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const benefits = t('groupKhatma.benefits', { returnObjects: true }) as string[];

    return (
        <section className="py-20 bg-slate-50/50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center gap-12">
                    {/* Visual Card Side */}
                    <motion.div
                        className="w-full max-w-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden border border-white/10">
                            {/* Wave Pattern Background */}
                            <div className="absolute inset-0 opacity-10">
                                <svg viewBox="0 0 400 400" className="w-full h-full">
                                    <path d="M0,200 C100,100 300,300 400,200 L400,400 L0,400 Z" fill="white" />
                                </svg>
                            </div>

                            <div className="relative z-10 text-center">
                                <h3 className="text-xl font-bold mb-8 text-indigo-100">{t('groupKhatma.cardTitle')}</h3>

                                {/* Progress Circle with Glow */}
                                <div className="w-44 h-44 mx-auto mb-10 relative flex items-center justify-center">
                                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl" />
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 256 256">
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="110"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="10"
                                        />
                                        <motion.circle
                                            cx="128"
                                            cy="128"
                                            r="110"
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="12"
                                            strokeDasharray={2 * Math.PI * 110}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 110 }}
                                            whileInView={{ strokeDashoffset: 2 * Math.PI * 110 * (1 - 0.75) }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-5xl font-black text-white">75%</div>
                                        <div className="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-widest">{t('groupKhatma.progressLabel')}</div>
                                    </div>
                                </div>

                                {/* Stats Grid Cards */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center text-indigo-300 mb-2">
                                            <FaQuran size={14} />
                                        </div>
                                        <div className="text-2xl font-black">450</div>
                                        <div className="text-[10px] font-bold text-indigo-200 uppercase">{t('groupKhatma.remainingJuz')}</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 mb-2">
                                            <FaUsers size={14} />
                                        </div>
                                        <div className="text-2xl font-black">1,420</div>
                                        <div className="text-[10px] font-bold text-emerald-200 uppercase">{t('groupKhatma.participants')}</div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-xl text-lg shadow-emerald-900/40"
                                >
                                    {t('groupKhatma.cta')}
                                    {isRtl ? <FaArrowLeft /> : <FaArrowRight />}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="text-center w-full px-4 mt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/50 text-indigo-600 rounded-full font-black text-xs mb-6 shadow-sm border border-indigo-200/50"
                        >
                            <FaUsers size={12} />
                            <span>{t('groupKhatma.tag')}</span>
                        </motion.div>

                        <h2 className="text-3xl sm:text-4xl font-black mb-6 text-slate-900 leading-tight">
                            {t('groupKhatma.title')}<br />
                            <span className="text-indigo-600">{t('groupKhatma.titleHighlight')}</span>
                        </h2>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xs mx-auto">
                            {t('groupKhatma.description')}
                        </p>

                        <div className="flex flex-col gap-4 max-w-xs mx-auto">
                            {Array.isArray(benefits) && benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-slate-100 group hover:border-indigo-200 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <FaCheck size={12} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GroupKhatma;
