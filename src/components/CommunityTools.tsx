import React from 'react';
import { motion } from 'framer-motion';
import { FaMosque, FaBroadcastTower, FaMapMarkedAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CommunityTools: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <section className="py-24 bg-[#0B101B] text-white overflow-hidden relative">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16 relative">
                    {/* Background Stroke Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03]">
                        <span className="text-9xl font-black text-white stroke-white stroke-1 whitespace-nowrap" style={{ WebkitTextStroke: '1px white', fill: 'transparent' }}>
                            Community
                        </span>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
                            {t('communityTools.title')}
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
                            {t('communityTools.subtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-8 max-w-md mx-auto relative px-4">
                    {/* Feature 1: Mosque Finder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#111827]/60 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-emerald-400 text-2xl mb-10 shadow-lg">
                            <FaMapMarkedAlt />
                        </div>
                        
                        <h3 className="text-3xl font-black mb-4 leading-none">{t('communityTools.mosque.title')}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-bold mb-4 pr-8">
                            {t('communityTools.mosque.desc')}
                        </p>
                        
                        <div className={`absolute -bottom-6 ${isRtl ? '-left-2' : '-right-2'} w-52 bg-[#1A2333] rounded-3xl p-4 shadow-2xl border border-white/10 flex items-center justify-between z-20 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
                                <span className="text-xs font-black text-white">{t('communityTools.mosque.name')}</span>
                                <span className="text-[10px] text-slate-400 font-bold">{t('communityTools.mosque.distance')}</span>
                            </div>
                            <div className="w-10 h-10 rounded-2xl bg-[#00C17C] flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                <FaMosque size={18} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Live Radio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#111827]/60 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-rose-500/80 text-2xl mb-10 shadow-lg">
                            <FaBroadcastTower />
                        </div>
                        
                        <h3 className="text-3xl font-black mb-6 leading-none">{t('communityTools.radio.title')}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-bold mb-8">
                            {t('communityTools.radio.desc')}
                        </p>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-[#FF1E56] to-[#FF3E76] text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-black text-lg shadow-xl shadow-rose-500/20"
                        >
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
                            {t('communityTools.radio.live')}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CommunityTools;
