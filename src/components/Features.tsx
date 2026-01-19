import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaMosque,
    FaQuran,
    FaBook,
    FaStar,
    FaCompass,
    FaCalculator,
    FaPrayingHands,
    FaBroadcastTower
} from 'react-icons/fa';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const features: Feature[] = [
    {
        icon: <FaMosque className="text-4xl" />,
        title: "أوقات الصلاة والأذان",
        description: "حساب دقيق لمواقيت الصلاة مع إشعارات الأذان وتنبيه الفجر المتقدم",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: <FaQuran className="text-4xl" />,
        title: "القرآن الكريم وتفسيره",
        description: "قراءة مريحة مع التفسير الميسر، تدبر الآيات، تتبع الختمة، وحفظ مكان التوقف",
        color: "from-green-500 to-green-600"
    },
    {
        icon: <FaBook className="text-4xl" />,
        title: "موسوعة الحديث الشريف",
        description: "الكتب التسعة (البخاري، مسلم، وغيرها) مع الشرح وتخريج الأحاديث",
        color: "from-amber-500 to-amber-600"
    },
    {
        icon: <FaStar className="text-4xl" />,
        title: "أسماء الله الحسنى",
        description: "رحلة تفاعلية لاستكشاف أسماء الله الحسنى مع الشرح والتفسير المفصل",
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: <FaCompass className="text-4xl" />,
        title: "اتجاه القبلة",
        description: "بوصلة دقيقة لتحديد اتجاه القبلة وعرض المساجد القريبة على الخريطة",
        color: "from-red-500 to-red-600"
    },
    {
        icon: <FaCalculator className="text-4xl" />,
        title: "حاسبة الزكاة",
        description: "حساب شامل لأنواع الزكاة المختلفة مع إنشاء تقارير PDF احترافية",
        color: "from-teal-500 to-teal-600"
    },
    {
        icon: <FaPrayingHands className="text-4xl" />,
        title: "الأذكار والأدعية",
        description: "أذكار الصباح والمساء، السبحة الإلكترونية، ومجموعة شاملة من الأدعية المأثورة",
        color: "from-indigo-500 to-indigo-600"
    },
    {
        icon: <FaBroadcastTower className="text-4xl" />,
        title: "الراديو الإسلامي",
        description: "استمع إلى محطات القرآن والدروس الدينية ببث مباشر عالي الجودة",
        color: "from-pink-500 to-pink-600"
    }
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className="feature-card group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    );
};

const Features: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="features">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        ميزات شاملة لحياة إسلامية متكاملة
                    </h2>
                    <p className="section-subtitle">
                        كل ما يحتاجه المسلم في تطبيق واحد، مصمم بعناية لتسهيل العبادات والذكر
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                {/* Additional Features Banner */}
                <motion.div
                    className="mt-16 bg-gradient-to-r from-islamic-green to-primary-600 rounded-3xl p-8 text-white text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h3 className="text-3xl font-bold mb-4">وأكثر من ذلك بكثير!</h3>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        التقويم الهجري، نظام الإنجازات، مشاركة البطاقات الإسلامية، الوضع الليلي، دعم متعدد اللغات، والعمل بدون إنترنت
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
