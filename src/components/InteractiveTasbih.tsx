import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFingerprint, FaBolt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const InteractiveTasbih: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [count, setCount] = useState(0);

    const handleTap = () => {
        setCount(prev => prev + 1);
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    return (
        <section className="py-24 bg-[#0B101B] text-white relative overflow-hidden">
            {/* Yellow Sticker - Responsive positioning */}
            <div className={`absolute top-20 ${isRtl ? 'right-4' : 'left-4'} z-20`}>
                <div className="bg-yellow-500 text-gray-900 font-extrabold px-8 py-3 rounded-full shadow-2xl transform rotate-[15deg] border-4 border-[#0B101B] text-base lg:text-lg whitespace-nowrap">
                    {t('interactiveTasbih.tryBadge')}
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-12">

                    {/* Text Side */}
                    <motion.div
                        className={`flex-1 ${isRtl ? 'text-right' : 'text-left'} max-w-xl w-full relative z-10`}
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <FaBolt size={10} />
                            {t('interactiveTasbih.subtitle')}
                        </div>

                        <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
                            {t('interactiveTasbih.title')}
                        </h2>

                        <p className="text-base text-slate-400 mb-12 leading-relaxed font-medium">
                            {t('interactiveTasbih.desc')}
                        </p>
                    </motion.div>

                    {/* Interactive Mockup Side */}
                    <div className="flex-1 w-full max-w-[360px]">
                        <div className="glass-dark rounded-[3rem] p-3 shadow-2xl shadow-emerald-500/10">
                            <div className="bg-[#0B101B] rounded-[2.5rem] p-6 h-[550px] flex flex-col items-center justify-between border border-white/5 relative overflow-hidden">

                                {/* Top Stats */}
                                <div className="w-full grid grid-cols-2 gap-3 z-10">
                                    <div className="bg-slate-900/80 rounded-2xl p-3 border border-white/5 text-center">
                                        <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest mb-1">{t('interactiveTasbih.target')}</div>
                                        <div className="text-lg font-black text-emerald-500">33 / {count % 33}</div>
                                    </div>
                                    <div className="bg-slate-900/80 rounded-2xl p-3 border border-white/5 text-center">
                                        <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest mb-1">الدورة</div>
                                        <div className="text-lg font-black text-emerald-500">{Math.floor(count / 33)}</div>
                                    </div>
                                </div>

                                {/* Central Counter Ring */}
                                <div className="relative w-48 h-48 flex items-center justify-center">
                                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 256 256">
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="110"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="transparent"
                                            className="text-slate-800"
                                        />
                                        <motion.circle
                                            cx="128"
                                            cy="128"
                                            r="110"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="transparent"
                                            strokeDasharray={2 * Math.PI * 110}
                                            animate={{ strokeDashoffset: (2 * Math.PI * 110) * (1 - (count % 33) / 33) }}
                                            className="text-emerald-500"
                                        />
                                    </svg>
                                    <div className="text-center">
                                        <motion.div
                                            key={count}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-5xl font-black"
                                        >
                                            {count % 33}
                                        </motion.div>
                                        <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mt-2">
                                            {t('interactiveTasbih.subhanAllah')}
                                        </div>
                                    </div>
                                </div>

                                {/* Interaction Area */}
                                <div className="w-full flex flex-col items-center gap-4 pb-4">
                                    <div className="text-center">
                                        <motion.div 
                                            animate={{ 
                                                scale: [1, 1.05, 1],
                                                textShadow: ["0 0 0px #10b981", "0 0 10px #10b981", "0 0 0px #10b981"]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-xl font-black text-white mb-2 underline decoration-emerald-500/50 decoration-4 underline-offset-8"
                                        >
                                            اضغط هنا للتجربة!
                                        </motion.div>
                                        <div className="text-[10px] font-bold text-slate-500">
                                            {t('interactiveTasbih.tryIt')}
                                        </div>
                                    </div>

                                    <motion.button
                                        whileTap={{ scale: 0.8, rotate: [0, -5, 5, 0] }}
                                        onClick={handleTap}
                                        className="w-20 h-20 rounded-full bg-emerald-500 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                                        <FaFingerprint className="text-3xl text-white drop-shadow-lg" />
                                        <motion.div
                                            className="absolute inset-0 bg-white"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={count > 0 ? { scale: [0, 1.5], opacity: [0.5, 0] } : {}}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>
                                </div>

                                {/* Decorative Background Elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTasbih;
