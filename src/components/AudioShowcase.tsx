import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaMusic, FaMosque } from 'react-icons/fa';

interface AudioTrack {
    id: number;
    title: string;
    reciter: string;
    type: 'quran' | 'azan';
    duration: string;
}

const tracks: AudioTrack[] = [
    { id: 1, title: "أذان الفجر", reciter: "عبدالباسط عبدالصمد", type: "azan", duration: "03:45" },
    { id: 2, title: "سورة الفاتحة", reciter: "مشاري العفاسي", type: "quran", duration: "01:10" },
    { id: 3, title: "أذان مكة المكرمة", reciter: "علي ملا", type: "azan", duration: "04:12" },
    { id: 4, title: "آية الكرسي", reciter: "ماهر المعيقلي", type: "quran", duration: "02:30" }
];

const AudioShowcase: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const togglePlay = (id: number) => {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    };

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        عذوبة الصوت والروحانية
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        استمع إلى أجمل أصوات المؤذنين والقراء بجودة عالية
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer group ${activeId === track.id
                                    ? 'bg-indigo-600/20 border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                                }`}
                            onClick={() => togglePlay(track.id)}
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${activeId === track.id ? 'bg-indigo-500 text-white scale-110' : 'bg-white/10 text-gray-300 group-hover:bg-white/20'
                                }`}>
                                {activeId === track.id ? <FaPause /> : <FaPlay className="ml-1" />}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className={`font-bold text-lg ${activeId === track.id ? 'text-white' : 'text-gray-200'}`}>
                                        {track.title}
                                    </h3>
                                    <span className="text-xs font-mono text-gray-400">{track.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    {track.type === 'azan' ? <FaMosque className="text-xs" /> : <FaMusic className="text-xs" />}
                                    <span>{track.reciter}</span>
                                </div>
                            </div>

                            {activeId === track.id && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500/30 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-indigo-500"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 10, ease: "linear" }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500">
                        * يتوفر المزيد من الأصوات في إعدادات التطبيق
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AudioShowcase;
