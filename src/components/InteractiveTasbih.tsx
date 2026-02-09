import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFingerprint, FaRedo, FaBolt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ScreenTasbih from '../assets/Screenshot_2026_02_09_12_55_43_19_4bfa514ba3a89880002cd1121a611476.jpg';

const InteractiveTasbih: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [count, setCount] = useState(0);
    const [cycle, setCycle] = useState(0);
    const [activeBead, setActiveBead] = useState(-1);

    const TOTAL_BEADS = 33;

    const handleTap = () => {
        const nextCount = count + 1;
        if (nextCount > TOTAL_BEADS) {
            setCount(1);
            setCycle(prev => prev + 1);
            setActiveBead(0);
        } else {
            setCount(nextCount);
            setActiveBead(nextCount - 1);
        }

        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    const handleReset = () => {
        setCount(0);
        setCycle(0);
        setActiveBead(-1);
    };

    const handleFastTasbih = () => {
        // Fast increment effect
        let i = 0;
        const interval = setInterval(() => {
            handleTap();
            i++;
            if (i >= 10) clearInterval(interval);
        }, 100);
    };

    // Calculate bead positions in a circle
    const beads = Array.from({ length: TOTAL_BEADS });
    const radius = 120; // Radius of the circle

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-900" />

            <div className="container mx-auto px-4 relative z-10">
                <div className={`flex flex-col ${isRtl ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-16`}>

                    {/* Text Side */}
                    <motion.div
                        className={`flex-1 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} max-w-xl`}
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <FaBolt className="text-xs" />
                            {t('interactiveTasbih.subtitle')}
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {t('interactiveTasbih.title')}
                        </h2>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            {t('interactiveTasbih.desc')}
                        </p>

                        <div className={`flex flex-wrap gap-6 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                            <div className="flex items-center gap-4 group">
                                <div className="relative w-20 h-40 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl group-hover:border-emerald-500/50 transition-colors duration-500">
                                    <img src={ScreenTasbih} alt="Real App Tasbih" className="w-full h-full object-cover object-top" />
                                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className={`text-sm ${isRtl ? 'text-right' : 'text-left'}`}>
                                    <p className="font-bold text-white mb-1">{t('communityTools.tryBadge')}</p>
                                    <p className="text-gray-500">{t('interactiveTasbih.tryIt')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Demo Side */}
                    <div className="flex-1 flex justify-center w-full max-w-md">
                        <div className="relative w-full">
                            {/* Device Mockup */}
                            <div className="bg-gray-800 rounded-[3.5rem] p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-gray-700/50 backdrop-blur-xl">
                                <div className="bg-[#0f172a] rounded-[2.8rem] p-6 h-[600px] flex flex-col items-center justify-between relative overflow-hidden">

                                    {/* App Header Simulation */}
                                    <div className="w-full flex justify-between items-center mb-8 px-2">
                                        <div className="bg-slate-800/50 rounded-xl p-3 flex-1 mr-2 text-center border border-white/5">
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{t('interactiveTasbih.target')}</div>
                                            <div className="text-emerald-400 font-bold">33 / {count}</div>
                                        </div>
                                        <div className="bg-slate-800/50 rounded-xl p-3 flex-1 ml-2 text-center border border-white/5">
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">الدورة</div>
                                            <div className="text-emerald-400 font-bold">{cycle}</div>
                                        </div>
                                    </div>

                                    {/* Circular Sibha Container */}
                                    <div className="relative w-72 h-72 flex items-center justify-center">
                                        {/* Beads Circle */}
                                        <div className="absolute inset-0 border border-emerald-500/10 rounded-full scale-110" />

                                        {beads.map((_, i) => {
                                            const angle = (i / TOTAL_BEADS) * 2 * Math.PI - Math.PI / 2;
                                            const x = Math.cos(angle) * radius;
                                            const y = Math.sin(angle) * radius;
                                            const isActive = i < count;
                                            const isCurrent = i === activeBead;

                                            return (
                                                <motion.div
                                                    key={i}
                                                    className={`absolute w-4 h-4 rounded-full border-2 ${isActive
                                                        ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]'
                                                        : 'bg-slate-800 border-slate-700'
                                                        }`}
                                                    style={{ x, y }}
                                                    animate={{
                                                        scale: isCurrent ? [1, 1.4, 1] : 1,
                                                        opacity: 1
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            );
                                        })}

                                        {/* Central Counter */}
                                        <div className="text-center z-10">
                                            <motion.div
                                                key={count}
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                className="text-6xl font-bold font-mono text-white"
                                            >
                                                {count}
                                            </motion.div>
                                            <div className="text-emerald-500 text-xs font-bold mt-2 uppercase tracking-widest">
                                                {t('interactiveTasbih.subhanAllah')}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interaction Controls */}
                                    <div className="w-full flex flex-col items-center gap-6 mt-12 pb-4">
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            onClick={handleTap}
                                            className="w-24 h-24 rounded-full bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                                            <FaFingerprint className="text-4xl text-white drop-shadow-lg" />
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileTap={{ scale: 4, opacity: [0.5, 0], transition: { duration: 0.5 } }}
                                            />
                                        </motion.button>

                                        <div className="flex justify-between w-full px-4 gap-4">
                                            <button
                                                onClick={handleReset}
                                                className="flex-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-500 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold text-sm"
                                            >
                                                <FaRedo className="text-xs" />
                                                {t('interactiveTasbih.reset')}
                                            </button>
                                            <button
                                                onClick={handleFastTasbih}
                                                className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-500 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all font-bold text-sm"
                                            >
                                                <FaBolt className="text-xs" />
                                                {t('interactiveTasbih.fastTasbih')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`absolute -top-6 ${isRtl ? '-right-6' : '-left-6'} bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full shadow-2xl z-30 transform ${isRtl ? 'rotate-12' : '-rotate-12'} border-2 border-white/20`}
                            >
                                {t('interactiveTasbih.tryBadge')}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTasbih;
