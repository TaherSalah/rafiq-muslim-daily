import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteRight, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface Testimonial {
    id: number;
    name: string;
    roleKey: string;
    content: string;
    rating: number;
    image: string;
}

const Testimonials: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const isRtl = i18n.language === 'ar';

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "أحمد محمد",
            roleKey: "testimonials.roles.old",
            content: "تطبيق رائع جداً، يساعدني في الالتزام بالصلاة والأذكار. التصميم جميل ومريح للعين، وأحب ميزة تحديد القبلة بدقة.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "amr ahmed",
            roleKey: "testimonials.roles.new",
            content: "ما شاء الله تطبيق ممتاز جزاكم الله خيرا",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a-/ALV-UjWn7r3vjPwyiiK5WVbYcCsX1RStB7KVXRfQTIy5j-Pg08Kbo-kJlQ=s64-rw"
        },
        {
            id: 3,
            name: "عمر خالد",
            roleKey: "testimonials.roles.new",
            content: "المكتبة الحديثية شاملة جداً وسهلة البحث. هذا التطبيق كنز لكل مسلم يبحث عن العلم والفائدة في مكان واحد.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
            id: 4,
            name: "Mohamed Awad",
            roleKey: "testimonials.roles.new",
            content: "جميل جدا جعله الله في ميزان حسناتكم",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a-/ALV-UjUlFr19RaFBeJfV5Joyv-tWs0LRSa41ENIEAxzcor8SgQYcfYRp=s64-rw"
        },
        {
            id: 5,
            name: "Eslam Arafa",
            roleKey: "testimonials.roles.new",
            content: "رائع فيه كل المميزات المطلوبة وخاصة الأحاديث النبوية المقسمة حسب المواصيع",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a/ACg8ocJ2nrTUhnZkjyUCEcb_qdpmPvZAYRTVEWA7L7I2sVB8liv86g=s64-rw-mo"
        },
        {
            id: 6,
            name: "محمد غالب",
            roleKey: "testimonials.roles.new",
            content: "تطبيق ممتاز جدا ولدي ملاحظة في العلامة.المرجعية.لزم.تكون.على.رقم. الآية.وليس.على.السورة.وجزاكم.الله خيرا إضافة.ابقاء.الشاشة.مضاءة.اثناء القراءة.",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a/ACg8ocKwQIHOGBznmHUbChRF8bkmlZ7Qxb3cILhqSzWdN-Hm8VKM8A=s64-rw-mo"
        },
        {
            id: 7,
            name: "رجب هارون",
            roleKey: "testimonials.roles.new",
            content: "جميل ولكن ناقص الاذان لكل صلاة",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a/ACg8ocJGXwvx2lKFIJWUo0W5UaaUquBPmzstL-4vA3Ty6ss-LeIFmqQ=s64-rw-mo"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className={`absolute top-0 ${isRtl ? 'right-0 -mr-4' : 'left-0 -ml-4'} -mt-4 text-islamic-green/10 text-9xl font-serif leading-none select-none z-0`}>
                        {isRtl ? <FaQuoteRight /> : <FaQuoteLeft />}
                    </div>

                    <div className="relative z-10 bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isRtl ? -50 : 50 }}
                                transition={{ duration: 0.5 }}
                                className={`w-full flex flex-col ${isRtl ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-islamic-green/20 p-1">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className={`flex-1 ${isRtl ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                                    <div className={`flex justify-center ${isRtl ? 'md:justify-start' : 'md:justify-end'} gap-1 text-yellow-500 mb-4`}>
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-800 italic mb-6 leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {t(testimonials[currentIndex].roleKey)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={isRtl ? prevSlide : nextSlide}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-islamic-green hover:text-white transition-colors duration-300"
                            aria-label="Previous"
                        >
                            {isRtl ? <FaChevronRight /> : <FaChevronLeft />}
                        </button>
                        <button
                            onClick={isRtl ? nextSlide : prevSlide}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-islamic-green hover:text-white transition-colors duration-300"
                            aria-label="Next"
                        >
                            {isRtl ? <FaChevronLeft /> : <FaChevronRight />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
