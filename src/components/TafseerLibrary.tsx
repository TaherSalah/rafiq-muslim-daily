import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBookOpen, FaSearch, FaChevronDown, FaAngleRight } from 'react-icons/fa';

const TafseerLibrary: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const books = [
        { id: 'saadi', key: 'saadi' },
        { id: 'jalalayn', key: 'jalalayn' },
        { id: 'ibn_katheer', key: 'ibn_katheer' },
        { id: 'muyassar', key: 'muyassar' }
    ];

    return (
        <section className="py-16 px-4 bg-[#0a0a0a] relative overflow-hidden" id="tafseer-library">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="max-w-md mx-auto relative z-10">
                <div className="text-center mb-10">
                    <span className="bg-emerald-900/40 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-emerald-500/20">
                        {t('tafseerLibrary.badge')}
                    </span>
                    <h2 className="text-3xl font-black text-white mt-4 mb-3">
                        {t('tafseerLibrary.title')}
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        {t('tafseerLibrary.desc')}
                    </p>
                </div>

                <div className="bg-[#0f0f11] rounded-[2.5rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-[5px] border-[#1c1c1e] relative h-[600px] flex flex-col overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
                    {/* App Header */}
                    <div className="flex items-center justify-between text-emerald-500 mb-6 px-2 pt-2">
                        <div className="w-6"></div>
                        <h3 className="text-lg font-bold">{t('tafseerLibrary.badge')}</h3>
                        <FaAngleRight className={`text-xl ${!isRtl && 'rotate-180'} cursor-pointer text-white`} />
                    </div>

                    {/* Filters & Search */}
                    <div className="space-y-3 mb-6">
                        <div className="bg-[#1c1c1e] rounded-xl flex items-center px-4 py-3 border border-[#2c2c2e]">
                            <FaSearch className="text-slate-500 mr-3 rtl:ml-3" />
                            <input 
                                type="text" 
                                placeholder={t('tafseerLibrary.search')}
                                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-slate-500"
                            />
                        </div>
                        
                        <div className="bg-[#1c1c1e] rounded-xl flex justify-between items-center px-4 py-3 border border-[#2c2c2e] cursor-pointer">
                            <span className="text-slate-400 text-sm font-bold">{t('tafseerLibrary.languages')}: <span className="text-white">عربي</span></span>
                            <FaChevronDown className="text-slate-500 text-xs" />
                        </div>
                    </div>

                    {/* Books Grid */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 grid grid-cols-2 gap-4 pb-4">
                        {books.map((book, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                key={book.id}
                                className="bg-[#1c1c1e] border border-[#2c2c2e] rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                            >
                                <div className="h-40 bg-gradient-to-b from-[#2c2c2e] to-[#1c1c1e] relative p-4 flex items-center justify-center">
                                    <div className="w-[70%] h-[90%] bg-emerald-950 border border-emerald-900 rounded-lg shadow-lg relative flex flex-col items-center justify-center p-2 text-center group-hover:scale-105 transition-transform duration-300">
                                        <div className="w-full h-2 bg-emerald-900/50 absolute top-2 rounded-full"></div>
                                        <div className="w-full h-2 bg-emerald-900/50 absolute bottom-2 rounded-full"></div>
                                        <FaBookOpen className="text-emerald-500/30 text-3xl absolute" />
                                        <h4 className="text-emerald-400 font-bold text-xs relative z-10 leading-tight line-clamp-3">
                                            {t(`tafseerLibrary.books.${book.key}`)}
                                        </h4>
                                    </div>
                                    <div className="absolute top-2 right-2 rtl:left-2 rtl:right-auto">
                                        <span className="bg-emerald-500 text-black text-[9px] font-bold px-2 py-0.5 rounded-full">جديد</span>
                                    </div>
                                </div>
                                <div className="p-3 bg-[#18181a] border-t border-[#2c2c2e]">
                                    <h4 className="text-white text-xs font-bold text-center mb-2 line-clamp-1">
                                        {t(`tafseerLibrary.books.${book.key}`)}
                                    </h4>
                                    <button className="w-full py-1.5 rounded-lg bg-emerald-600/20 text-emerald-500 text-[10px] font-bold hover:bg-emerald-500 hover:text-black transition-colors">
                                        {t('tafseerLibrary.action')}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TafseerLibrary;
