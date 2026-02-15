import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    FaQuran, FaPrayingHands, FaBook, FaMosque, FaUsers,
    FaCompass, FaCalculator, FaCalendarAlt, FaMapMarkerAlt, FaBell, FaListUl
} from 'react-icons/fa';

// Import Assets
import ScreenPrayer from '../assets/prayerView.jpg';
import ScreenAzkar from '../assets/7.jpg';
import ScreenSebha from '../assets/sebha.jpg';

import ScreenQuran from '../assets/2.jpg';
import ScreenLibrary from '../assets/5.jpg';
import ScreenKhatma from '../assets/golbal1.jpg';
import ScreenCommunity from '../assets/radio.jpg';

interface ShowcaseItem {
    id: number;
    titleKey: string;
    descKey: string;
    phoneImg: string;
    bgImg: string;
    icon: React.ReactNode;
    color: string;
}

interface ExtraFeature {
    icon: React.ReactNode;
    titleKey: string;
    color: string;
}

const FeatureShowcase: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const items: ShowcaseItem[] = [
        {
            id: 1,
            titleKey: "features.items.quran.title",
            descKey: "features.items.quran.desc",
            phoneImg: ScreenQuran,
            bgImg: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop",
            icon: <FaQuran />,
            color: "amber"
        },
        {
            id: 2,
            titleKey: "features.items.adhkar.title",
            descKey: "features.items.adhkar.desc",
            phoneImg: ScreenAzkar,
            bgImg: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop",
            icon: <FaPrayingHands />,
            color: "indigo"
        },
        {
            id: 3,
            titleKey: "features.items.sibha.title",
            descKey: "features.items.sibha.desc",
            phoneImg: ScreenSebha,
            bgImg: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop",
            icon: <FaPrayingHands />,
            color: "indigo"
        },
        {
            id: 4,
            titleKey: "features.items.prayer.title",
            descKey: "features.items.prayer.desc",
            phoneImg: ScreenPrayer,
            bgImg: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop",
            icon: <FaMosque />,
            color: "emerald"
        },


        {
            id: 5,
            titleKey: "features.items.kids.title",
            descKey: "features.items.kids.desc",
            phoneImg: ScreenLibrary,
            bgImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
            icon: <FaBook />,
            color: "cyan"
        },

        {
            id: 7,
            titleKey: "features.items.hadith.title",
            descKey: "features.items.hadith.desc",
            phoneImg: ScreenLibrary,
            bgImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
            icon: <FaBook />,
            color: "cyan"
        },
        {
            id: 6,
            titleKey: "features.items.books.title",
            descKey: "features.items.books.desc",
            phoneImg: ScreenLibrary,
            bgImg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
            icon: <FaBook />,
            color: "cyan"
        },
        {
            id: 5,
            titleKey: "features.items.khatma.title",
            descKey: "features.items.khatma.desc",
            phoneImg: ScreenKhatma,
            bgImg: "https://images.unsplash.com/photo-1466691623998-d63796a316bf?q=80&w=1000&auto=format&fit=crop",
            icon: <FaUsers />,
            color: "violet"
        },
        {
            id: 6,
            titleKey: "features.items.radio.title",
            descKey: "features.items.radio.desc",
            phoneImg: ScreenCommunity,
            bgImg: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?q=80&w=1000&auto=format&fit=crop",
            icon: <FaUsers />,
            color: "rose"
        }
    ];

    const extraFeatures: ExtraFeature[] = [
        { icon: <FaCompass />, titleKey: "features.items.qibla.title", color: "red" },
        { icon: <FaCalculator />, titleKey: "features.items.zakat.title", color: "teal" },
        { icon: <FaCalendarAlt />, titleKey: "features.items.calendar.title", color: "emerald" },
        { icon: <FaMapMarkerAlt />, titleKey: "features.items.mosques.title", color: "lime" },
        { icon: <FaBell />, titleKey: "features.items.fajr.title", color: "rose" },
        { icon: <FaListUl />, titleKey: "features.items.awrad.title", color: "cyan" },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden" id="features">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('features.title')}
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('features.subtitle')}
                    </motion.p>
                </div>

                {/* Premium Featured Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 mb-32">
                    {items.map((item, index) => (
                        <ShowcaseCard
                            key={item.id}
                            item={item}
                            index={index}
                            isRtl={isRtl}
                            t={t}
                        />
                    ))}
                </div>

                {/* Additional Features Grid */}
                <div className="mt-40 border-t border-gray-200 pt-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">{t('features.more')}</h3>
                        <div className="h-1 w-20 bg-islamic-green mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {extraFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-islamic-green group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2`}>
                                    {feature.icon}
                                </div>
                                <span className="font-bold text-gray-700 text-center group-hover:text-islamic-green transition-colors">
                                    {t(feature.titleKey)}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-gray-500 max-w-2xl mx-auto italic">
                            {t('features.moreDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ShowcaseCard: React.FC<{ item: ShowcaseItem, index: number, isRtl: boolean, t: any }> = ({ item, index, isRtl, t }) => {
    return (
        <motion.div
            className="relative flex flex-col group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index % 2 * 0.2 }}
        >
            <div className={`relative h-[350px] md:h-[400px] flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>

                {/* Background Circle */}
                <motion.div
                    className={`absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0
                        ${index % 2 === 0 ? (isRtl ? 'right-0' : 'left-0') : (isRtl ? 'left-0' : 'right-0')}`}
                    whileInView={{
                        scale: [0.9, 1],
                        rotate: [index % 2 === 0 ? -5 : 5, 0]
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={item.bgImg} alt="" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </motion.div>

                {/* Small Iconic Badge */}
                <div className={`absolute z-20 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl text-${item.color}-500 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110
                    ${index % 2 === 0 ? (isRtl ? 'left-1/4' : 'right-1/4') : (isRtl ? 'right-1/4' : 'left-1/4')} top-1/2 -translate-y-1/2`}>
                    {item.icon}
                </div>

                {/* Phone Frame */}
                <motion.div
                    className={`relative z-10 w-[180px] md:w-[220px] transition-transform duration-500 group-hover:-translate-y-4
                        ${index % 2 === 0 ? (isRtl ? 'mr-[150px]' : 'ml-[150px]') : (isRtl ? 'ml-[150px]' : 'mr-[150px]')}`}
                >
                    <div className="relative aspect-[9/18.5] bg-gray-900 rounded-[2.5rem] p-2 border-[6px] border-gray-800 shadow-[20px_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
                        <img src={item.phoneImg} alt={t(item.titleKey)} className="w-full h-full object-cover rounded-[1.8rem]" />

                        {/* Glass Overlay on phone */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            {/* Content Area */}
            <div className={`mt-8 ${isRtl ? 'text-right' : 'text-left'} max-w-lg px-4 transition-all duration-300 group-hover:translate-x-2`}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-islamic-green transition-colors">
                    {t(item.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {t(item.descKey)}
                </p>

                {/* Decorative Line */}
                <div className={`h-1 w-12 bg-islamic-green mt-6 transition-all duration-500 group-hover:w-24 ${isRtl ? 'mr-0 ml-auto' : ''}`} />
            </div>
        </motion.div>
    );
}

export default FeatureShowcase;
