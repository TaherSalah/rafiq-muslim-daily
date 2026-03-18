import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    const isRtl = i18n.language === 'ar';
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "amr ahmed",
            roleKey: "testimonials.roles.new",
            content: "ما شاء الله تطبيق ممتاز جزاكم الله خيرا",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a-/ALV-UjWn7r3vjPwyiiK5WVbYcCsX1RStB7KVXRfQTIy5j-Pg08Kbo-kJlQ=s64-rw"
        },
        {
            id: 2,
            name: "Mohamed Awad",
            roleKey: "testimonials.roles.new",
            content: "جميل جدا جعله الله في ميزان حسناتكم",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a-/ALV-UjUlFr19RaFBeJfV5Joyv-tWs0LRSa41ENIEAxzcor8SgQYcfYRp=s64-rw"
        },
        {
            id: 3,
            name: "Eslam Arafa",
            roleKey: "testimonials.roles.new",
            content: "رائع فيه كل المميزات المطلوبة وخاصة الأحاديث النبوية المقسمة حسب المواصيع",
            rating: 5,
            image: "https://play-lh.googleusercontent.com/a/ACg8ocJ2nrTUhnZkjyUCEcb_qdpmPvZAYRTVEWA7L7I2sVB8liv86g=s64-rw-mo"
        },
        {
            id: 4,
            name: "أحمد محمد",
            roleKey: "testimonials.roles.old",
            content: "تطبيق رائع جداً، يساعدني في الالتزام بالصلاة والأذكار. التصميم جميل ومريح للعين.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-lg">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-4 text-slate-900 leading-tight">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-lg text-slate-500 max-w-xs mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="relative h-[480px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute inset-0 flex flex-col items-center"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50 relative w-full flex flex-col items-center"
                            >
                                {/* Profile Image with Indicator */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 rounded-full p-1.5 bg-gradient-to-tr from-emerald-500 to-teal-400">
                                        <div className="w-full h-full rounded-full border-4 border-white overflow-hidden shadow-inner">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex gap-1 text-emerald-500 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} />
                                    ))}
                                </div>

                                <p className="text-xl font-bold text-slate-800 text-center leading-relaxed mb-8 h-[120px] overflow-hidden">
                                    {testimonials[currentIndex].content}
                                </p>

                                <div className="text-center mt-auto">
                                    <h4 className="text-lg font-black text-slate-900 mb-1">{testimonials[currentIndex].name}</h4>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t(testimonials[currentIndex].roleKey)}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Modern Navigation */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 group"
                    >
                        {isRtl ? (
                            <FaChevronRight className="group-active:scale-90 transition-transform" />
                        ) : (
                            <FaChevronLeft className="group-active:scale-90 transition-transform" />
                        )}
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <div 
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-emerald-500 w-8' : 'bg-slate-200 w-1.5'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 group"
                    >
                        {isRtl ? (
                            <FaChevronLeft className="group-active:scale-90 transition-transform" />
                        ) : (
                            <FaChevronRight className="group-active:scale-90 transition-transform" />
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
