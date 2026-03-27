import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBookOpen, FaMoon, FaSearch, FaBookmark,
    FaMicrophone, FaChartBar, FaPen, FaTag, FaPalette, FaLanguage,
    FaHeadphones, FaMobileAlt, FaImage, FaArrowsAltV, FaShareAlt,
    FaLightbulb, FaSun, FaPrayingHands, FaStar
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import QuranImage from "../assets/2.jpg";

const QuranSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const featureIcons = [
        <FaMoon />,
        <FaBookOpen />,
        <FaBookmark />,
        <FaSearch />,
        <FaMicrophone />,
        <FaChartBar />,
        <FaPen />,
        <FaTag />,
        <FaPalette />,
        <FaLanguage />,
        <FaHeadphones />,
        <FaMobileAlt />,
        <FaImage />,
        <FaArrowsAltV />,
        <FaShareAlt />,
        <FaLightbulb />,
        <FaSun />,
        <FaPrayingHands />,
        <FaStar />
    ];

    const quranFeatures = t('quranSection.features', { returnObjects: true }) as { title: string; desc: string }[];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-4"
                    >
                        {t('quranSection.subtitle')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black mb-6 text-slate-900 leading-tight"
                    >
                        {t('quranSection.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg leading-relaxed"
                    >
                        {t('quranSection.desc')}
                    </motion.p>
                </div>

                <div className="relative mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="relative z-10 mx-auto w-64 aspect-[9/19] bg-slate-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-slate-800"
                    >
                        <div className="bg-white rounded-[2.2rem] h-full overflow-hidden relative">
                            <img
                                src={QuranImage}
                                alt="Quran Reader"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -right-6 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100"
                        >
                            <FaBookOpen className="text-emerald-500 text-xl" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute -left-6 bottom-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100"
                        >
                            <FaMoon className="text-indigo-500 text-xl" />
                        </motion.div>
                    </motion.div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/30 blur-[100px] rounded-full -z-10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {Array.isArray(quranFeatures) && quranFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index % 6) * 0.1 }}
                            className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                                {featureIcons[index]}
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 mb-1">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-bold">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <a
                        href={`https://docs.google.com/viewer?url=https://quranhayat.com/wp-content/uploads/E-Quran-PDF.pdf&embedded=true`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 text-white px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 w-full sm:w-fit"
                    >
                        <FaBookOpen />
                        {t('quranSection.ctaView') || (isRtl ? 'عرض المصحف أونلاين' : 'View Quran Online')}
                    </a>
                    
                    <a
                        href="https://quranhayat.com/wp-content/uploads/E-Quran-PDF.pdf"
                        download
                        className="bg-slate-800 text-white px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-slate-500/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 w-full sm:w-fit"
                    >
                        <FaMobileAlt />
                        {t('quranSection.ctaDownload') || (isRtl ? 'تحميل مباشر (PDF)' : 'Direct Download (PDF)')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default QuranSection;
