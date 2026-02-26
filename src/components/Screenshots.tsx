import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen, FaQuran, FaSearch, FaListUl, FaUsers, FaPray, FaChevronLeft, FaChevronRight, FaMapMarkedAlt, FaShareAlt, FaBook, FaFingerprint, FaCalculator } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ScreenLibrary from '../assets/5.jpg';
import ScreenQuran from '../assets/2.jpg';
import ScreenAzkar from '../assets/7.jpg';
import ScreenTasbih from '../assets/11.jpg';
import ScreenSearch from '../assets/13.jpg';
import ScreenIndex from '../assets/8.jpg';
import ScreenKhatma from '../assets/9.jpg';
import ScreenJourney from '../assets/childCornar.jpg';
import ScreenShare from '../assets/Screenshot_2026_02_09_12_56_57_76_4bfa514ba3a89880002cd1121a611476.jpg';
import ScreenTafsir from '../assets/Screenshot_2026_02_09_12_58_39_69_4bfa514ba3a89880002cd1121a611476.jpg';
import ScreenModernSibha from '../assets/sebha.jpg';
import ScreenFamily from '../assets/childCornar.jpg';
import ScreenInheritance from '../assets/mawrith.jpg';
import ScreenExpiation from '../assets/kafrat.jpg';

const Screenshots: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [currentIndex, setCurrentIndex] = useState(0);

    const screens = [
        { id: 1, title: t('screenshots.screen1.title'), icon: <FaBookOpen />, color: "bg-emerald-500", image: ScreenLibrary },
        { id: 2, title: t('screenshots.screen2.title'), icon: <FaQuran />, color: "bg-amber-500", image: ScreenQuran },
        { id: 3, title: t('screenshots.screen3.title'), icon: <FaPray />, color: "bg-blue-500", image: ScreenAzkar },
        { id: 4, title: t('screenshots.screen4.title'), icon: <FaPray />, color: "bg-purple-500", image: ScreenTasbih },
        { id: 5, title: t('screenshots.screen5.title'), icon: <FaSearch />, color: "bg-teal-500", image: ScreenSearch },
        { id: 6, title: t('screenshots.screen6.title'), icon: <FaListUl />, color: "bg-red-500", image: ScreenIndex },
        { id: 7, title: t('screenshots.screen7.title'), icon: <FaUsers />, color: "bg-indigo-500", image: ScreenKhatma },
        { id: 8, title: t('screenshots.screen8.title'), icon: <FaMapMarkedAlt />, color: "bg-orange-500", image: ScreenJourney },
        { id: 9, title: t('screenshots.screen9.title'), icon: <FaShareAlt />, color: "bg-pink-500", image: ScreenShare },
        { id: 10, title: t('screenshots.screen10.title'), icon: <FaBook />, color: "bg-cyan-600", image: ScreenTafsir },
        { id: 11, title: t('screenshots.screen11.title'), icon: <FaFingerprint />, color: "bg-lime-600", image: ScreenModernSibha },
        { id: 12, title: t('screenshots.screen12.title'), icon: <FaCalculator />, color: "bg-amber-600", image: ScreenInheritance },
        { id: 13, title: t('screenshots.screen13.title'), icon: <FaCalculator />, color: "bg-indigo-600", image: ScreenExpiation }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % screens.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);

    const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
        if (info.offset.x < -50) nextSlide();
        else if (info.offset.x > 50) prevSlide();
    };

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 leading-tight">
                        {t('screenshots.title')}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto">
                        {t('screenshots.subtitle')}
                    </p>
                </motion.div>

                <div className="relative max-w-lg mx-auto h-[550px] flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {[-2, -1, 0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset + screens.length) % screens.length;
                            const screen = screens[index];
                            const isCenter = offset === 0;
                            const absOffset = Math.abs(offset);

                            return (
                                <motion.div
                                    key={`${screen.id}-${offset}`}
                                    drag={isCenter ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={handleDragEnd}
                                    initial={false}
                                    animate={{
                                        x: isRtl ? -offset * 85 : offset * 85,
                                        scale: 1 - absOffset * 0.15,
                                        zIndex: 10 - absOffset,
                                        opacity: 1 - absOffset * 0.35,
                                        rotateY: isRtl ? offset * 25 : -offset * 25,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute w-52 md:w-60 cursor-grab active:cursor-grabbing"
                                >
                                    <div className={`relative aspect-[9/19] rounded-[2.5rem] bg-slate-900 shadow-2xl overflow-hidden border-4 border-slate-800 ${isCenter ? 'ring-4 ring-emerald-500/20' : ''}`}>
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-2xl z-20 shadow-inner"></div>
                                        <div className="h-full w-full overflow-hidden">
                                            <img
                                                src={screen.image}
                                                alt={screen.title}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>

                                    {isCenter && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full flex flex-col items-center"
                                        >
                                            <div className="bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap">
                                                {screen.icon}
                                                {screen.title}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center items-center gap-2 mt-20">
                    {screens.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`transition-all duration-300 rounded-full h-2 ${
                                i === currentIndex 
                                    ? 'bg-emerald-500 w-10 shadow-lg shadow-emerald-500/30' 
                                    : 'bg-slate-300 w-2 hover:bg-slate-400'
                            }`}
                            aria-label={`Go to screen ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
