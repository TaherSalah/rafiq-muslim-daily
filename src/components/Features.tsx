import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FaMosque,
    FaQuran,
    FaBook,
    FaCompass,
    FaCalculator,
    FaPrayingHands,
    FaBroadcastTower,
    FaCalendarAlt,
    FaUsers,
    FaMapMarkerAlt,
    FaBell,
    FaListUl,
    FaBookOpen,
    FaHandPointer
} from 'react-icons/fa';

interface Feature {
    icon: React.ReactNode;
    titleKey: string;
    descriptionKey: string;
    color: string;
}

const Features: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const features: Feature[] = [
        {
            icon: <FaQuran className="text-4xl" />,
            titleKey: "features.items.quran.title",
            descriptionKey: "features.items.quran.desc",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <FaPrayingHands className="text-4xl" />,
            titleKey: "features.items.adhkar.title",
            descriptionKey: "features.items.adhkar.desc",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            icon: <FaHandPointer className="text-4xl" />,
            titleKey: "features.items.sibha.title",
            descriptionKey: "features.items.sibha.desc",
            color: "from-amber-500 to-amber-600"
        },
        {
            icon: <FaMosque className="text-4xl" />,
            titleKey: "features.items.prayer.title",
            descriptionKey: "features.items.prayer.desc",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaCalendarAlt className="text-4xl" />,
            titleKey: "features.items.calendar.title",
            descriptionKey: "features.items.calendar.desc",
            color: "from-emerald-500 to-emerald-600"
        },
        {
            icon: <FaCompass className="text-4xl" />,
            titleKey: "features.items.qibla.title",
            descriptionKey: "features.items.qibla.desc",
            color: "from-red-500 to-red-600"
        },
        {
            icon: <FaBook className="text-4xl" />,
            titleKey: "features.items.hadith.title",
            descriptionKey: "features.items.hadith.desc",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: <FaBroadcastTower className="text-4xl" />,
            titleKey: "features.items.radio.title",
            descriptionKey: "features.items.radio.desc",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: <FaListUl className="text-4xl" />,
            titleKey: "features.items.awrad.title",
            descriptionKey: "features.items.awrad.desc",
            color: "from-cyan-500 to-cyan-600"
        },
        {
            icon: <FaUsers className="text-4xl" />,
            titleKey: "features.items.khatma.title",
            descriptionKey: "features.items.khatma.desc",
            color: "from-violet-500 to-violet-600"
        },
        {
            icon: <FaCalculator className="text-4xl" />,
            titleKey: "features.items.zakat.title",
            descriptionKey: "features.items.zakat.desc",
            color: "from-teal-500 to-teal-600"
        },
        {
            icon: <FaMapMarkerAlt className="text-4xl" />,
            titleKey: "features.items.mosques.title",
            descriptionKey: "features.items.mosques.desc",
            color: "from-lime-500 to-lime-600"
        },
        {
            icon: <FaBell className="text-4xl" />,
            titleKey: "features.items.fajr.title",
            descriptionKey: "features.items.fajr.desc",
            color: "from-rose-500 to-rose-600"
        },
        {
            icon: <FaBookOpen className="text-4xl" />,
            titleKey: "features.items.books.title",
            descriptionKey: "features.items.books.desc",
            color: "from-sky-500 to-sky-600"
        }
    ];
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="features">
            <div className="container mx-auto px-4">
                <ContentHeader t={t} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            index={index}
                            t={t}
                            isRtl={isRtl}
                        />
                    ))}
                </div>

                <motion.div
                    className="mt-16 bg-gradient-to-r from-islamic-green to-primary-600 rounded-3xl p-8 text-white text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="text-3xl font-bold mb-4">{t('features.more')}</h3>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        {t('features.moreDesc')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
const ContentHeader: React.FC<{ t: any }> = ({ t }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="section-title">
                {t('features.title')}
            </h2>
            <p className="section-subtitle">
                {t('features.subtitle')}
            </p>
        </motion.div>
    );
}

const FeatureCard: React.FC<{ feature: Feature; index: number; t: any; isRtl: boolean }> = ({ feature, index, t, isRtl }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={`feature-card group ${isRtl ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {t(feature.titleKey)}
            </h3>

            <p className="text-gray-600 leading-relaxed">
                {t(feature.descriptionKey)}
            </p>
        </motion.div>
    );
};

export default Features;
