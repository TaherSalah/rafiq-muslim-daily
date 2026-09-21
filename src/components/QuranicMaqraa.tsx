import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUserAlt, FaUsers, FaGraduationCap, FaCompass, FaAngleRight } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const QuranicMaqraa: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [isExploring, setIsExploring] = useState(false);

    return (
        <section className="py-16 px-4 bg-[#0a0a0a] relative overflow-hidden" id="quranic-maqraa">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div className="max-w-md mx-auto relative z-10">
                <div className="text-center mb-10">
                    <span className="bg-emerald-900/40 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-emerald-500/20">
                        {t('quranicMaqraa.badge')}
                    </span>
                    <h2 className="text-3xl font-black text-white mt-4 mb-3">
                        {t('quranicMaqraa.title')}
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        {t('quranicMaqraa.desc')}
                    </p>
                </div>

                <div className="bg-black rounded-[2.5rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-[5px] border-[#1c1c1e] relative overflow-hidden h-[600px] flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
                    <AnimatePresence mode="wait">
                        {!isExploring ? (
                            <motion.div 
                                key="main"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                className="flex flex-col h-full"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between text-emerald-500 mb-6 px-2 pt-2">
                                    <FaArrowRightFromBracket className={`text-xl text-red-500/80 cursor-pointer ${!isRtl && 'rotate-180'}`} />
                                    <h3 className="text-lg font-bold">{t('quranicMaqraa.badge')}</h3>
                                    <FaAngleRight className={`text-xl ${!isRtl && 'rotate-180'} cursor-pointer text-white`} />
                                </div>

                                {/* Welcome Card */}
                                <div className="bg-[#1c1c1e] p-6 rounded-[2rem] mb-6 flex justify-between items-center shadow-lg">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-white font-bold text-lg">{t('quranicMaqraa.welcome')}</h4>
                                        <span className="bg-emerald-900/40 text-emerald-500 text-[10px] px-3 py-1 rounded-full font-bold w-fit border border-emerald-500/20">
                                            {t('quranicMaqraa.student')}
                                        </span>
                                    </div>
                                    <div className="w-14 h-14 bg-emerald-900/20 text-emerald-500 rounded-full flex items-center justify-center text-2xl border border-emerald-500/10">
                                        <FaUserAlt />
                                    </div>
                                </div>

                                {/* Active Circle */}
                                <div className="bg-[#1c1c1e] p-5 rounded-[1.5rem] mb-4 flex justify-between items-center border border-[#2c2c2e] shadow-lg">
                                    <div className="w-8 flex justify-center text-red-500/80 text-[10px] font-bold bg-red-500/10 px-2 py-1 rounded">
                                        {t('quranicMaqraa.circles.all.tag')}
                                    </div>
                                    <div className="flex-1 text-center">
                                        <h5 className="text-white font-bold text-base">{t('quranicMaqraa.circles.all.title')}</h5>
                                        <p className="text-slate-400 text-[10px] flex items-center justify-center gap-1 mt-1 font-bold">
                                            <span className="w-3 h-2 rounded-[2px] border-[1.5px] border-slate-400"></span> {t('quranicMaqraa.circles.all.subtitle')}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-emerald-900/40 text-emerald-500 rounded-xl flex items-center justify-center text-xl">
                                        <FaUsers />
                                    </div>
                                </div>

                                {/* Bottom Button */}
                                <div className="mt-auto pb-2 px-4">
                                    <button 
                                        onClick={() => setIsExploring(true)}
                                        className="w-full bg-emerald-600 hover:bg-emerald-500 transition-colors text-black font-black py-4 rounded-full flex items-center justify-between px-6 gap-2 text-[15px]"
                                    >
                                        <div className="w-5"></div>
                                        {t('quranicMaqraa.explore')}
                                        <FaCompass className="text-lg" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="explore"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="flex flex-col h-full"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between text-emerald-500 mb-6 px-2 pt-2 border-b border-[#1c1c1e] pb-4">
                                    <div className="w-6"></div>
                                    <h3 className="text-lg font-bold">{t('quranicMaqraa.explore')}</h3>
                                    <button onClick={() => setIsExploring(false)}>
                                        <FaAngleRight className={`text-xl ${!isRtl && 'rotate-180'} cursor-pointer text-white`} />
                                    </button>
                                </div>

                                {/* Cards */}
                                <div className="overflow-y-auto custom-scrollbar pr-1 pb-4 space-y-4">
                                    {/* Circle 1 */}
                                    <div className="bg-[#1c1c1e] p-5 rounded-[1.5rem] border border-[#2c2c2e]">
                                        <div className="flex justify-between items-start mb-4">
                                            <button className="bg-slate-700/50 text-slate-400 text-[11px] px-4 py-1.5 rounded-full font-bold cursor-default">
                                                {t('quranicMaqraa.circles.all.status')}
                                            </button>
                                            <div className="flex items-center gap-3">
                                                <h4 className="text-white font-bold">{t('quranicMaqraa.circles.all.title')}</h4>
                                                <FaGraduationCap className="text-emerald-500 text-2xl" />
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs leading-relaxed" style={{ direction: isRtl ? 'rtl' : 'ltr', textAlign: isRtl ? 'right' : 'left' }}>
                                            {t('quranicMaqraa.circles.all.desc')}
                                        </p>
                                    </div>

                                    {/* Circle 2 */}
                                    <div className="bg-[#1c1c1e] p-5 rounded-[1.5rem] border border-[#2c2c2e]">
                                        <div className="flex justify-between items-start mb-4">
                                            <button className="bg-emerald-600 text-black text-[11px] px-5 py-1.5 rounded-full font-bold">
                                                {t('quranicMaqraa.circles.men.status')}
                                            </button>
                                            <div className="flex flex-col items-end gap-1">
                                                <div className="flex items-center gap-3">
                                                    <h4 className="text-white font-bold">{t('quranicMaqraa.circles.men.title')}</h4>
                                                    <FaGraduationCap className="text-emerald-500 text-2xl" />
                                                </div>
                                                <span className="text-[10px] text-blue-400 font-bold">{t('quranicMaqraa.circles.men.tag')} 👨</span>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs leading-relaxed" style={{ direction: isRtl ? 'rtl' : 'ltr', textAlign: isRtl ? 'right' : 'left' }}>
                                            {t('quranicMaqraa.circles.men.desc')}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default QuranicMaqraa;
