import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden islamic-pattern">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-islamic-green/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-right"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-block mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <img
                                src="/logo.png"
                                alt="رفيق المسلم"
                                className="w-32 h-32 mx-auto lg:mx-0 lg:mr-auto drop-shadow-2xl"
                            />
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-gradient">رفيق المسلم</span>
                            <br />
                            <span className="text-gray-800">في حياته اليومية</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 lg:mr-auto">
                            تطبيق إسلامي شامل يجمع كل ما يحتاجه المسلم من أوقات الصلاة، القرآن الكريم، الأحاديث النبوية، وأكثر من ذلك بكثير
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <motion.a
                                href="#"
                                className="btn-primary flex items-center gap-3 w-full sm:w-auto justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaApple className="text-2xl" />
                                <div className="text-right">
                                    <div className="text-xs opacity-90">حمّل من</div>
                                    <div className="text-lg font-bold">App Store</div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="#"
                                className="btn-secondary flex items-center gap-3 w-full sm:w-auto justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGooglePlay className="text-2xl" />
                                <div className="text-right">
                                    <div className="text-xs opacity-90">حمّل من</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                            </motion.a>
                        </div>

                        {/* Stats */}
                        <motion.div
                            className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 lg:mr-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="text-center lg:text-right">
                                <div className="text-3xl font-bold text-gradient">300K+</div>
                                <div className="text-sm text-gray-600">مستخدم نشط</div>
                            </div>
                            <div className="text-center lg:text-right">
                                <div className="text-3xl font-bold text-gradient">15</div>
                                <div className="text-sm text-gray-600">كتاب حديث</div>
                            </div>
                            <div className="text-center lg:text-right">
                                <div className="text-3xl font-bold text-gradient">4.8★</div>
                                <div className="text-sm text-gray-600">تقييم المستخدمين</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="relative mx-auto w-full max-w-md"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Phone Frame */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                                    {/* Placeholder for app screenshot */}
                                    <div className="w-full h-full bg-gradient-to-br from-islamic-green/20 to-primary-500/20 flex items-center justify-center">
                                        <img
                                            src="/logo.png"
                                            alt="App Screenshot"
                                            className="w-32 h-32 opacity-50"
                                        />
                                    </div>
                                </div>
                                {/* Notch */}
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-xl p-4"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-2xl">🕌</div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-4"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-2xl">📿</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-islamic-green rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-islamic-green rounded-full"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
