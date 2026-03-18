import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCalendarAlt, FaMoon, FaPray } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SmartWidgets: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-lg">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black mb-4 text-slate-900 leading-[1.1]"
                    >
                        {t('smartWidgets.title')}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-emerald-500 mb-6 flex flex-col items-center"
                    >
                        {t('smartWidgets.subtitle')}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg leading-relaxed max-w-sm mx-auto"
                    >
                        {t('smartWidgets.desc')}
                    </motion.p>
                </div>

                <div className="flex flex-col gap-6 relative">
                    {/* Widget 1: Prayer Time */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 relative overflow-hidden ring-1 ring-slate-100"
                    >
                        <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 rounded-full" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xl">
                                <FaPray />
                            </div>
                            <div className="text-right">
                                <h4 className="font-black text-slate-900 text-lg">{t('smartWidgets.azan.name')}</h4>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('smartWidgets.azan.location')}</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-[5rem] font-black text-slate-900 leading-none mb-2 tabular-nums">
                                06:15
                            </div>
                            <div className="text-2xl font-bold text-slate-300">م</div>
                        </div>
                        <div className="text-center mt-4">
                            <span className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-black tracking-wide tabular-nums">
                                {t('smartWidgets.azan.remaining')}
                            </span>
                        </div>
                    </motion.div>

                    {/* Widget 2: Hijri & Dhikr (Dark Mode) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="text-4xl font-black text-white mb-1">15</div>
                            <div className="text-2xl font-black text-white mb-1">{t('smartWidgets.hijri.date')}</div>
                            <div className="text-xs text-slate-500 font-bold uppercase mb-4 tracking-tighter">1447 هجري</div>

                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 w-full mt-4">
                                <p className="text-white text-lg font-bold leading-relaxed">
                                    {t('smartWidgets.hijri.dhikr')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Widget 3: Notification */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white flex items-center gap-5 ring-1 ring-slate-100"
                    >
                        <div className="w-14 h-14 bg-indigo-500 rounded-3xl flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-500/20">
                            <FaBell />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-black text-slate-900 mb-1 leading-none">{t('smartWidgets.notification.title')}</h4>
                            <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                                {t('smartWidgets.notification.desc')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Widget Mini-Features */}
                    <div className="grid grid-cols-1 gap-8 mt-12 px-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shadow-inner">
                                <FaCalendarAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 leading-none mb-1">{t('smartWidgets.feature1.title')}</h4>
                                <p className="text-xs text-slate-500 leading-normal">{t('smartWidgets.feature1.desc')}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center text-xl shadow-inner">
                                <FaMoon />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 leading-none mb-1">{t('smartWidgets.feature2.title')}</h4>
                                <p className="text-xs text-slate-500 leading-normal">{t('smartWidgets.feature2.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartWidgets;
