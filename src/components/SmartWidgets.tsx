import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCalendarAlt, FaMoon, FaPray } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SmartWidgets: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isRtl ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>

                    {/* Visual Side */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-emerald-200 blur-3xl opacity-30 rounded-full" />

                            {/* Widgets Grid */}
                            <div className="relative grid gap-6 w-full max-w-sm md:max-w-md mx-auto">
                                {/* Azan Widget */}
                                <motion.div
                                    initial={{ x: isRtl ? -50 : 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} w-2 h-full bg-emerald-500`} />
                                    <div className={`flex justify-between items-start mb-4 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className={isRtl ? 'text-right' : 'text-left'}>
                                            <h4 className="font-bold text-gray-900">{t('smartWidgets.azan.name')}</h4>
                                            <p className="text-sm text-gray-500">{t('smartWidgets.azan.location')}</p>
                                        </div>
                                        <FaPray className="text-emerald-500 text-xl" />
                                    </div>
                                    <div className={`text-4xl font-bold text-gray-900 mb-2 tabular-nums ${isRtl ? 'text-right' : 'text-left'}`}>
                                        {t('smartWidgets.azan.time')} <span className="text-base text-gray-400 font-normal">{t('smartWidgets.azan.period')}</span>
                                    </div>
                                    <p className={`text-xs text-emerald-600 font-bold tabular-nums ${isRtl ? 'text-right' : 'text-left'}`}>
                                        {t('smartWidgets.azan.remaining')}
                                    </p>
                                </motion.div>

                                {/* Date & Dhikr Widget */}
                                <motion.div
                                    initial={{ x: isRtl ? 50 : -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white relative overflow-hidden"
                                >
                                    <div className={`flex items-center gap-4 mb-4 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl">
                                            <FaCalendarAlt />
                                        </div>
                                        <div className={isRtl ? 'text-right' : 'text-left'}>
                                            <div className="font-bold text-lg">{t('smartWidgets.hijri.date')}</div>
                                            <div className="text-sm opacity-60">{t('smartWidgets.hijri.year')}</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-3 text-center text-sm">
                                        {t('smartWidgets.hijri.dhikr')}
                                    </div>
                                </motion.div>

                                {/* Notification Card */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className={`bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4 transform ${isRtl ? 'translate-x-8' : '-translate-x-8'} ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg">
                                        <FaBell />
                                    </div>
                                    <div className={isRtl ? 'text-right' : 'text-left'}>
                                        <div className="text-sm font-bold text-gray-900">{t('smartWidgets.notification.title')}</div>
                                        <div className="text-xs text-gray-500">{t('smartWidgets.notification.desc')}</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <motion.div
                        className={`flex-1 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('smartWidgets.title')}
                            <br />
                            <span className="text-emerald-500">{t('smartWidgets.subtitle')}</span>
                        </h2>

                        <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('smartWidgets.desc')}
                        </p>

                        <div className="space-y-6">
                            <div className={`flex items-start gap-4 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0 mt-1">
                                    <FaCalendarAlt />
                                </div>
                                <div className={isRtl ? 'text-right' : 'text-left'}>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('smartWidgets.feature1.title')}</h4>
                                    <p className="text-gray-600">{t('smartWidgets.feature1.desc')}</p>
                                </div>
                            </div>

                            <div className={`flex items-start gap-4 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl flex-shrink-0 mt-1">
                                    <FaMoon />
                                </div>
                                <div className={isRtl ? 'text-right' : 'text-left'}>
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('smartWidgets.feature2.title')}</h4>
                                    <p className="text-gray-600">{t('smartWidgets.feature2.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SmartWidgets;
