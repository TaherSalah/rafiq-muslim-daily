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
        name: "amr ahmed",
        role: "مستخدمة جديدة",
        content: "ما شاء الله تطبيق ممتاز جزاكم الله خيرا",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a-/ALV-UjWn7r3vjPwyiiK5WVbYcCsX1RStB7KVXRfQTIy5j-Pg08Kbo-kJlQ=s64-rw"
    }
    ,
    {
        id: 3,
        name: "عمر خالد",
        role: "مستخدمة جديدة",
        content: "المكتبة الحديثية شاملة جداً وسهلة البحث. هذا التطبيق كنز لكل مسلم يبحث عن العلم والفائدة في مكان واحد.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        id: 4,
        name: "Mohamed Awad",
        role: "مستخدمة جديدة",
        content: "جميل جدا جعله الله في ميزان حسناتكم",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a-/ALV-UjUlFr19RaFBeJfV5Joyv-tWs0LRSa41ENIEAxzcor8SgQYcfYRp=s64-rw"
    }
    ,
    {
        id: 5,
        name: "Eslam Arafa",
        role: "مستخدمة جديدة",
        content: "رائع فيه كل المميزات المطلوبة وخاصة الأحاديث النبوية المقسمة حسب المواصيع",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocJ2nrTUhnZkjyUCEcb_qdpmPvZAYRTVEWA7L7I2sVB8liv86g=s64-rw-mo"
    }
    ,

    {
        id: 6,
        name: "محمد غالب",
        role: "مستخدمة جديدة",
        content: "تطبيق ممتاز جدا ولدي ملاحظة في العلامة.المرجعية.لزم.تكون.على.رقم. الآية.وليس.على.السورة.وجزاكم.الله خيرا إضافة.ابقاء.الشاشة.مضاءة.اثناء القراءة.",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocKwQIHOGBznmHUbChRF8bkmlZ7Qxb3cILhqSzWdN-Hm8VKM8A=s64-rw-mo"
    },
    {
        id: 7,
        name: "رجب هارون",
        role: "مستخدمة جديدة",
        content: "جميل ولكن ناقص الاذان لكل صلاة",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocJGXwvx2lKFIJWUo0W5UaaUquBPmzstL-4vA3Ty6ss-LeIFmqQ=s64-rw-mo"
    },

    {
        id: 8,
        name: "Salah Matar",
        role: "مستخدمة جديدة",
        content: "ماشاء الله تطبيق ممتاز",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a-/ALV-UjUhaPpN84yUhMkMoUjc-NoWY8dDGeIAb_WggXxHxRZGqydk7fdI=s64-rw"
    },
    {
        id: 9,
        name: "Khalid Mahmood",
        role: "مستخدمة جديدة",
        content: "تطبيق ممتاز ربنا يجزيك خير الجزاء ♥️",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocL_DsJJrLNoyMjp5ovnY0TGiEyl1oyvTfCGy1aLmCswCnzF0Q=s64-rw-mo"
    },
    {
        id: 10,
        name: "محمد منير",
        role: "مستخدمة جديدة",
        content: "ماشاء الله تطبيق ممتاممتاز ربنا يجازيك كل خير",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocIPJC…sMiyASvP-16Kxi8AFHGyp0XCyMd03tbfA3oNvV8=s64-rw-mo"
    },
    {
        id: 11,
        name: "Ahmed Hosny",
        role: "مستخدمة جديدة",
        content: "ربنا يجازيك خير ويجعله في ميزان حسناتك",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocJE1Yk0mla1BltKNFwQAWrBaRAqmuIKTP5gbq3RYRdryfizlA=s64-rw-mo"
    },
    {
        id: 12,
        name: "Ahmed M",
        role: "مستخدمة جديدة",
        content: "ممتاز جدا",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a-/ALV-UjWWZQvBFUKDzCpFwvPY05esAvi1CogGyicq2PdVwOq9AO5-veFKrw=s64-rw"
    },
    {
        id: 13,
        name: "Tamir Rady",
        role: "مستخدمة جديدة",
        content: "ممتاز،، بارك الله فيكم",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocKfdbtydb8SpLB_BJCG95IoxN7N7sr4K-sQcNwZKptDrtVnyQ=s64-rw-mo"
    },
    {
        id: 14,
        name: "ahmed salah",
        role: "مستخدمة جديدة",
        content: "جزاكم الله خير الجزاء وجعله في ميزان حسناتكم.",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocISH8nZAX-SfTd0OWXwU81TDISHpl6AdF3bzbNYnlMnmrJXBgKj=s64-rw-mo"
    },
    {
        id: 15,
        name:  "احمد سمير",
        role: "مستخدمة جديدة",
        content: "جميل جدا",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocKwU_N0zHyApAFAK0pWuwLwk5G_Vmd4eOIqKDPAn93bFL6qzw=s64-rw-mo"
    },
    {
        id: 16,
        name: "Lolo Fahd",
        role: "مستخدمة جديدة",
        content:"ممتاز",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocLyQ0F7PbIZnurQKS-E6awCXwV0yCx27abHs6xqboK8KI4SJA=s64-rw-mo"
    },
    {
        id: 17,
        name: "Hamd Mohamd",
        role: "مستخدمة جديدة",
        content:"ماشاء الله",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocI49Zsxw9YFkjaqMfte_uVixaUgNHc9okeqP1TmqwAVMESktA=s64-rw-mo"
    },
    {
        id: 18,
        name: "Ebrahim Elsaeed",
        role: "مستخدمة جديدة",
        content:"جزاك الله كل خير ♥️",
        rating: 5,
        image: "https://play-lh.googleusercontent.com/a/ACg8ocLy7UZXAMghQmOar4qAI8ebB2IgHf9r1_mnujZ5aPgIIIq9kg=s64-rw-mo"
    },
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
