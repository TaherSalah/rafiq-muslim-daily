import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "أحمد محمد",
        role: "مستخدم منذ سنة",
        content: "تطبيق رائع جداً، يساعدني في الالتزام بالصلاة والأذكار. التصميم جميل ومريح للعين، وأحب ميزة تحديد القبلة بدقة.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "سارة علي",
        role: "مستخدمة جديدة",
        content: "أفضل تطبيق إسلامي جربته حتى الآن. ميزة ختمة القرآن نظمت قراءتي بشكل كبير، والتنبيهات دقيقة ومفيدة.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "عمر خالد",
        role: "طالب علم شرعي",
        content: "المكتبة الحديثية شاملة جداً وسهلة البحث. هذا التطبيق كنز لكل مسلم يبحث عن العلم والفائدة في مكان واحد.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        id: 4,
        name: "منى السيد",
        role: "ربة منزل",
        content: "الأذكار والرقية الشرعية الموجودة في التطبيق ساعدتني كثيراً. جزاكم الله خيراً على هذا المجهود الطيب.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance carousel
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
                        ماذا يقول مستخدمونا؟
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        آراء حقيقية من مستخدمين وجدوا في رفيق المسلم ضالتهم
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 text-islamic-green/10 text-9xl font-serif leading-none select-none z-0">
                        <FaQuoteRight />
                    </div>

                    <div className="relative z-10 bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex flex-col md:flex-row items-center gap-8"
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

                                <div className="flex-1 text-center md:text-right">
                                    <div className="flex justify-center md:justify-start gap-1 text-yellow-500 mb-4">
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
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-islamic-green hover:text-white transition-colors duration-300"
                            aria-label="Previous"
                        >
                            <FaChevronRight />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-islamic-green hover:text-white transition-colors duration-300"
                            aria-label="Next"
                        >
                            <FaChevronLeft />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
