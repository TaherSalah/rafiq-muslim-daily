import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBookOpen, FaSun, FaMoon, FaCheck, FaChevronDown, FaChevronUp, FaCalendarAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const WorshipTracker: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState('today');
    const [isPrayersOpen, setIsPrayersOpen] = useState(true);
    const isRtl = i18n.language === 'ar';

    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

    return (
        <section className="py-16 px-4 bg-slate-50 relative overflow-hidden" id="worship-tracker">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-md mx-auto relative z-10">
                <div className="text-center mb-10">
                    <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                        {t('worshipTracker.badge')}
                    </span>
                    <h2 className="text-3xl font-black text-slate-800 mt-4 mb-3">
                        {t('worshipTracker.title')}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        {t('worshipTracker.desc')}
                    </p>
                </div>

                <div className="bg-[#1c1c1e] rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-800 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
                    {/* App Header */}
                    <div className="flex items-center justify-between text-emerald-500 mb-6 px-2">
                        <FaAngleRight className={`text-xl ${!isRtl && 'rotate-180'}`} />
                        <h3 className="text-lg font-bold">{t('worshipTracker.report')}</h3>
                        <div className="w-5"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-slate-700 mb-6">
                        {['year', 'month', 'week', 'today'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 pb-2 text-sm font-bold transition-colors ${activeTab === tab ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                {t(`worshipTracker.tabs.${tab}`)}
                            </button>
                        ))}
                    </div>

                    {/* Date Picker (Mock) */}
                    <div className="flex items-center justify-between bg-[#2c2c2e] rounded-2xl p-3 mb-6">
                        <button className="w-8 h-8 rounded-full bg-[#3c3c3e] flex items-center justify-center text-slate-400">
                            <FaAngleRight className={!isRtl ? 'rotate-180' : ''} />
                        </button>
                        <div className="text-center">
                            <div className="text-emerald-400 font-bold">{isRtl ? 'الاثنين' : 'Monday'}</div>
                            <div className="text-xs text-slate-400">{isRtl ? '21 سبتمبر 2026' : '21 September 2026'}</div>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                                <FaCalendarAlt className="text-sm" />
                            </button>
                            <button className="w-8 h-8 rounded-full bg-[#3c3c3e] flex items-center justify-center text-slate-400">
                                <FaAngleLeft className={!isRtl ? 'rotate-180' : ''} />
                            </button>
                        </div>
                    </div>

                    {/* Report Cards */}
                    <div className="space-y-3">
                        {/* Quran Card */}
                        <div className="bg-[#2c2c2e] p-4 rounded-2xl flex flex-col items-center text-center">
                            <h4 className="text-white font-bold mb-1">{t('worshipTracker.quran.missed')}</h4>
                            <p className="text-slate-400 text-xs flex items-center gap-2 justify-center w-full">
                                {t('worshipTracker.quran.action')} <FaBookOpen />
                            </p>
                        </div>

                        {/* Morning Adhkar Card */}
                        <div className="bg-[#2c2c2e] p-4 rounded-2xl flex flex-col items-center text-center">
                            <h4 className="text-white font-bold mb-1">{t('worshipTracker.morningAdhkar.missed')}</h4>
                            <p className="text-slate-400 text-xs flex items-center gap-2 justify-center w-full">
                                {t('worshipTracker.morningAdhkar.action')} <FaSun className="text-yellow-500" />
                            </p>
                        </div>

                        {/* Evening Adhkar Card */}
                        <div className="bg-[#2c2c2e] p-4 rounded-2xl flex flex-col items-center text-center">
                            <h4 className="text-white font-bold mb-1 flex items-center gap-2 justify-center w-full">
                                {t('worshipTracker.eveningAdhkar.done')} <FaMoon className="text-blue-400" />
                            </h4>
                            <p className="text-slate-400 text-xs flex items-center gap-2 justify-center w-full">
                                {t('worshipTracker.eveningAdhkar.action')} <FaCheck className="text-emerald-500" />
                            </p>
                        </div>

                        {/* Expandable Section */}
                        <div className="bg-[#2c2c2e] rounded-2xl overflow-hidden mt-4">
                            <button 
                                onClick={() => setIsPrayersOpen(!isPrayersOpen)}
                                className="w-full p-4 flex items-center justify-between text-emerald-400 font-bold"
                            >
                                {t('worshipTracker.prayers')}
                                {isPrayersOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            <AnimatePresence>
                                {isPrayersOpen && (
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="px-4 pb-4 overflow-hidden"
                                    >
                                        <div className="grid grid-cols-5 gap-2 text-[10px] text-slate-400 text-center mb-3 border-b border-slate-700 pb-2">
                                            <div className="text-right">{isRtl ? 'الصلاة' : 'Prayer'}</div>
                                            <div>{t('worshipTracker.prayerTable.mosque')}</div>
                                            <div>{t('worshipTracker.prayerTable.congregation')}</div>
                                            <div>{t('worshipTracker.prayerTable.onTime')}</div>
                                            <div>{t('worshipTracker.prayerTable.makeup')}</div>
                                        </div>
                                        {prayers.map((prayer) => (
                                            <div key={prayer} className="grid grid-cols-5 gap-2 items-center mb-3">
                                                <div className="text-white text-xs font-bold text-right">{t(`hero.prayers.${prayer}`)}</div>
                                                <div className="flex justify-center"><div className={`w-5 h-5 rounded border ${prayer === 'fajr' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-600 bg-[#1c1c1e]'} flex items-center justify-center`}>{prayer === 'fajr' && <FaCheck className="text-white text-[10px]" />}</div></div>
                                                <div className="flex justify-center"><div className={`w-5 h-5 rounded border ${prayer === 'fajr' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-600 bg-[#1c1c1e]'} flex items-center justify-center`}>{prayer === 'fajr' && <FaCheck className="text-white text-[10px]" />}</div></div>
                                                <div className="flex justify-center"><div className={`w-5 h-5 rounded border ${['fajr', 'dhuhr', 'asr', 'maghrib'].includes(prayer) ? 'border-emerald-500 bg-emerald-500' : 'border-slate-600 bg-[#1c1c1e]'} flex items-center justify-center`}>{['fajr', 'dhuhr', 'asr', 'maghrib'].includes(prayer) && <FaCheck className="text-white text-[10px]" />}</div></div>
                                                <div className="flex justify-center"><div className="w-5 h-5 rounded border border-slate-600 bg-[#1c1c1e]"></div></div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        
                        <div className="bg-[#2c2c2e] p-4 rounded-2xl flex items-center justify-between">
                            <h4 className="text-slate-300 font-bold text-sm">{t('worshipTracker.sunnah')}</h4>
                            <FaChevronDown className="text-slate-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorshipTracker;
