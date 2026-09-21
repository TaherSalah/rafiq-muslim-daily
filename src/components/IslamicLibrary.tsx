import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaEye, FaSearch, FaHeart, FaAngleRight } from 'react-icons/fa';

const IslamicLibrary: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [activeScholar, setActiveScholar] = useState<string | null>('amjad');

    const scholars = [
        { id: 'huwaini', image: 'https://images.unsplash.com/photo-1584286595398-a42e5ba6ddb6?w=150&q=80' },
        { id: 'minshawi', image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=150&q=80' },
        { id: 'amjad', image: 'https://images.unsplash.com/photo-1606822210815-5e6080cb70e4?w=150&q=80' }
    ];

    const latestAdditions = [
        { id: 1, title: 'animalStories', tag: 'beginner', cat: 'stories', author: 'alrawi', img: 'https://images.unsplash.com/photo-1584286595398-a42e5ba6ddb6?w=300' },
        { id: 2, title: 'womenStories28', tag: 'beginner', cat: 'stories', author: 'alrawi', img: 'https://images.unsplash.com/photo-1606822210815-5e6080cb70e4?w=300' },
        { id: 3, title: 'repentance', tag: 'beginner', cat: 'general', author: 'amjad', img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=300' }
    ];

    return (
        <section className="py-16 px-4 bg-slate-900 relative overflow-hidden" id="islamic-library">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="max-w-md mx-auto relative z-10">
                <div className="text-center mb-10">
                    <span className="bg-emerald-900/40 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-emerald-500/20">
                        {t('islamicLibrary.badge')}
                    </span>
                    <h2 className="text-3xl font-black text-white mt-4 mb-3">
                        {t('islamicLibrary.title')}
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        {t('islamicLibrary.desc')}
                    </p>
                </div>

                <div className="bg-[#0f0f11] rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-800 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
                    {/* App Header */}
                    <div className="flex items-center justify-between text-slate-300 mb-6 px-2 pt-2">
                        <div className="flex gap-4">
                            <FaSearch className="text-lg hover:text-emerald-500 transition-colors cursor-pointer" />
                            <FaHeart className="text-lg hover:text-red-500 transition-colors cursor-pointer" />
                        </div>
                        <h3 className="text-emerald-500 text-lg font-bold">{t('islamicLibrary.badge')}</h3>
                        <FaAngleRight className={`text-xl ${!isRtl && 'rotate-180'} cursor-pointer`} />
                    </div>

                    {/* Scholars Section */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4 px-2">
                            <h4 className="text-white font-bold">{t('islamicLibrary.scholars')}</h4>
                        </div>
                        <div className="flex justify-between items-center px-4">
                            {scholars.map((scholar) => (
                                <div key={scholar.id} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => setActiveScholar(scholar.id)}>
                                    <div className={`w-[70px] h-[70px] rounded-full p-0.5 transition-all duration-300 ${activeScholar === scholar.id ? 'bg-gradient-to-tr from-emerald-500 to-teal-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-[#1c1c1e] border border-[#2c2c2e] group-hover:border-emerald-500/50'}`}>
                                        <img src={scholar.image} alt="" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <span className={`text-xs font-bold transition-colors ${activeScholar === scholar.id ? 'text-white' : 'text-slate-400'}`}>
                                        {t(`islamicLibrary.names.${scholar.id}`)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Latest Additions */}
                    <div>
                        <h4 className="text-white font-bold mb-4 px-2">{t('islamicLibrary.latest')}</h4>
                        <div className="space-y-4">
                            {latestAdditions.map((item) => (
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    key={item.id} 
                                    className="bg-[#1c1c1e] rounded-2xl overflow-hidden flex h-[110px] border border-[#2c2c2e]"
                                >
                                    <div className="flex-1 p-3 flex flex-col justify-between relative">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[10px] text-emerald-500 font-bold">{t(`islamicLibrary.tags.${item.cat}`)}</span>
                                            <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded font-bold">
                                                {t(`islamicLibrary.tags.${item.tag}`)}
                                            </span>
                                        </div>
                                        <h5 className="text-white font-bold text-xs sm:text-sm leading-snug line-clamp-2 my-1">
                                            {t(`islamicLibrary.videos.${item.title}`)}
                                        </h5>
                                        <div className="text-[10px] text-slate-400 flex justify-between items-end mt-auto">
                                            <span className="flex items-center gap-1"><FaEye /> 0</span>
                                            <span className="flex items-center gap-2">
                                                {item.author === 'amjad' ? t('islamicLibrary.names.amjad') : t('islamicLibrary.authors.alrawi')}
                                                <div className="w-4 h-4 rounded-full bg-red-600/90 text-white flex items-center justify-center pl-[2px] shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                                                    <FaPlay className="text-[6px]" />
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-1/3 relative">
                                        <img src={item.img} alt="" className="w-full h-full object-cover" />
                                        <div className={`absolute inset-0 bg-gradient-to-${isRtl ? 'l' : 'r'} from-[#1c1c1e] to-transparent pointer-events-none`}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IslamicLibrary;
