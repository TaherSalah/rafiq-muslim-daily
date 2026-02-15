import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen, FaQuran, FaSearch, FaListUl, FaUsers, FaPray, FaChevronLeft, FaChevronRight, FaMapMarkedAlt, FaShareAlt, FaBook, FaFingerprint } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ScreenLibrary from '../assets/5.jpg';
import ScreenQuran from '../assets/2.jpg';
import ScreenAzkar from '../assets/7.jpg';
import ScreenTasbih from '../assets/11.jpg';
import ScreenSearch from '../assets/13.jpg';
import ScreenIndex from '../assets/8.jpg';
import ScreenKhatma from '../assets/9.jpg';
import ScreenJourney from '../assets/Screenshot_2026_02_09_12_55_51_55_4bfa514ba3a89880002cd1121a611476.jpg';
import ScreenShare from '../assets/Screenshot_2026_02_09_12_56_57_76_4bfa514ba3a89880002cd1121a611476.jpg';
import ScreenTafsir from '../assets/Screenshot_2026_02_09_12_58_39_69_4bfa514ba3a89880002cd1121a611476.jpg';
import ScreenModernSibha from '../assets/sebha.jpg';

const Screenshots: React.FC = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const screens = [
        {
            id: 1,
            title: t('screenshots.screen1.title'),
            icon: <FaBookOpen />,
            color: "bg-emerald-500",
            image: ScreenLibrary
        },
        {
            id: 2,
            title: t('screenshots.screen2.title'),
            icon: <FaQuran />,
            color: "bg-amber-500",
            image: ScreenQuran
        },
        {
            id: 3,
            title: t('screenshots.screen3.title'),
            icon: <FaPray />,
            color: "bg-blue-500",
            image: ScreenAzkar
        },
        {
            id: 4,
            title: t('screenshots.screen4.title'),
            icon: <FaPray />,
            color: "bg-purple-500",
            image: ScreenTasbih
        },
        {
            id: 5,
            title: t('screenshots.screen5.title'),
            icon: <FaSearch />,
            color: "bg-teal-500",
            image: ScreenSearch
        },
        {
            id: 6,
            title: t('screenshots.screen6.title'),
            icon: <FaListUl />,
            color: "bg-red-500",
            image: ScreenIndex
        },
        {
            id: 7,
            title: t('screenshots.screen7.title'),
            icon: <FaUsers />,
            color: "bg-indigo-500",
            image: ScreenKhatma
        },
        {
            id: 8,
            title: t('screenshots.screen8.title'),
            icon: <FaMapMarkedAlt />,
            color: "bg-orange-500",
            image: ScreenJourney
        },
        {
            id: 9,
            title: t('screenshots.screen9.title'),
            icon: <FaShareAlt />,
            color: "bg-pink-500",
            image: ScreenShare
        },
        {
            id: 10,
            title: t('screenshots.screen10.title'),
            icon: <FaBook />,
            color: "bg-cyan-600",
            image: ScreenTafsir
        },
        {
            id: 11,
            title: t('screenshots.screen11.title'),
            icon: <FaFingerprint />,
            color: "bg-lime-600",
            image: ScreenModernSibha
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % screens.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('screenshots.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('screenshots.subtitle')}
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carousel Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-30 p-4 bg-white shadow-xl rounded-full text-gray-800 hover:bg-gray-50 transition-colors hidden md:block"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-30 p-4 bg-white shadow-xl rounded-full text-gray-800 hover:bg-gray-50 transition-colors hidden md:block"
                    >
                        <FaChevronRight />
                    </button>

                    <div className="flex justify-center items-center gap-4 md:gap-8 min-h-[550px]">
                        <AnimatePresence mode='wait'>
                            {[-1, 0, 1].map((offset) => {
                                const index = (currentIndex + offset + screens.length) % screens.length;
                                const screen = screens[index];
                                const isCenter = offset === 0;

                                return (
                                    <motion.div
                                        key={`${screen.id}-${offset}`}
                                        initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                                        animate={{
                                            opacity: isCenter ? 1 : 0.4,
                                            scale: isCenter ? 1 : 0.85,
                                            x: 0,
                                            zIndex: isCenter ? 20 : 10,
                                            display: (offset !== 0 && window.innerWidth < 768) ? 'none' : 'block'
                                        }}
                                        exit={{ opacity: 0, scale: 0.8, x: -offset * 100 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className={`relative ${isCenter ? 'w-64 md:w-72' : 'w-48 lg:w-56'} flex-shrink-0 transition-all duration-500`}
                                    >
                                        <div className={`relative aspect-[9/19] border-8 border-gray-900 rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden`}>
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-gray-900 rounded-b-xl z-20"></div>
                                            <div className="bg-white h-full w-full overflow-hidden relative">
                                                <img
                                                    src={screen.image}
                                                    alt={screen.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        </div>
                                        {isCenter && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-6 flex flex-col items-center"
                                            >
                                                <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-white text-sm font-bold shadow-lg ${screen.color}`}>
                                                    {screen.icon}
                                                    {screen.title}
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {screens.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
