import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface AudioTrack {
    title: string;
    reciter: string;
}

const AudioShowcase: React.FC = () => {
    const { t } = useTranslation();
    const [activeId, setActiveId] = useState<number | null>(null);

    const trackTranslations = t('audioShowcase.tracks', { returnObjects: true }) as AudioTrack[];

    const tracks = [
        { id: 1, duration: "01:10" },
        { id: 2, duration: "03:45" },
        { id: 3, duration: "02:30" },
        { id: 4, duration: "04:12" }
    ];

    const togglePlay = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="py-20 bg-[#0B101B] text-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-black mb-4 leading-tight">
                        {t('audioShowcase.title')}
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xs mx-auto">
                        {t('audioShowcase.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                    {Array.isArray(trackTranslations) && tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => togglePlay(track.id)}
                            className={`p-5 rounded-[2rem] border transition-all duration-500 cursor-pointer relative group ${
                                activeId === track.id
                                    ? 'bg-slate-800/80 border-emerald-500 shadow-2xl shadow-emerald-500/10'
                                    : 'bg-slate-900/40 border-white/5 hover:border-white/10'
                            }`}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-black text-slate-500 tabular-nums">{track.duration}</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        activeId === track.id ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-800 text-slate-400'
                                    }`}>
                                        {activeId === track.id ? <FaPause size={12} /> : <FaPlay className="ml-0.5" size={12} />}
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-black text-white mb-1 line-clamp-1">
                                        {trackTranslations[index]?.title}
                                    </h3>
                                    <p className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                                        <FaMusic size={8} />
                                        {trackTranslations[index]?.reciter}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xs text-slate-600 font-bold uppercase tracking-tighter">
                        {t('audioShowcase.moreSounds')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AudioShowcase;
