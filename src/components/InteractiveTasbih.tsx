import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFingerprint, FaRedo } from 'react-icons/fa';

const InteractiveTasbih: React.FC = () => {
    const [count, setCount] = useState(0);
    const [showPraise, setShowPraise] = useState(false);

    const handleTap = () => {
        setCount(prev => prev + 1);
        setShowPraise(true);

        // Haptic feedback if available
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        // Reset praise animation
        setTimeout(() => setShowPraise(false), 500);
    };

    const handleReset = () => {
        setCount(0);
        setShowPraise(false);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-islamic-green text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute top-10 left-10 text-9xl">📿</div>
                <div className="absolute bottom-10 right-10 text-9xl">🕌</div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Side */}
                    <motion.div
                        className="flex-1 text-center lg:text-right"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            جرب السبحة الإلكترونية
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            استشعر روحانية الذكر في أي وقت ومكان. تصميم أنيق، اهتزاز تفاعلي، وحفظ تلقائي لعدد التسبيحات.
                            <br />
                            <span className="text-emerald-400 font-bold mt-2 block">
                                جربها الآن بنفسك 👇
                            </span>
                        </p>
                    </motion.div>

                    {/* Interactive Demo Side */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            {/* Device Frame */}
                            <div className="bg-gray-800 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-700 w-full max-w-sm mx-auto">
                                <div className="bg-gray-900 rounded-[2.5rem] p-6 h-[500px] flex flex-col items-center justify-between relative overflow-hidden">

                                    {/* Screen Header */}
                                    <div className="text-center w-full pt-4">
                                        <div className="text-emerald-500 text-sm font-bold mb-1">سبحان الله</div>
                                        <div className="h-1 w-16 bg-gray-800 mx-auto rounded-full"></div>
                                    </div>

                                    {/* Counter Display */}
                                    <div className="relative z-10 my-auto">
                                        <motion.div
                                            key={count}
                                            initial={{ scale: 0.8, opacity: 0.5 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-7xl font-bold font-mono text-white tabular-nums drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                                        >
                                            {count.toString().padStart(3, '0')}
                                        </motion.div>
                                    </div>

                                    {/* Tap Area */}
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleTap}
                                        className="w-48 h-48 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700 shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center relative group"
                                    >
                                        <div className="absolute inset-2 rounded-full border-2 border-white/20"></div>
                                        <FaFingerprint className="text-6xl text-white/90 group-hover:scale-110 transition-transform duration-300" />

                                        {/* Ripple Effect */}
                                        <AnimatePresence>
                                            {showPraise && (
                                                <motion.div
                                                    initial={{ scale: 1, opacity: 0.5 }}
                                                    animate={{ scale: 2, opacity: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0 rounded-full bg-emerald-400/30"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.button>

                                    {/* Reset Button */}
                                    <button
                                        onClick={handleReset}
                                        className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2"
                                        title="إعادة تعيين"
                                    >
                                        <FaRedo className="text-sm" />
                                    </button>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-6 -right-6 bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12"
                            >
                                اضغط هنا للتجربة!
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveTasbih;
