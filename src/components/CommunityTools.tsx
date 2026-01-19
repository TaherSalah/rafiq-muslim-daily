import React from 'react';
import { motion } from 'framer-motion';
import { FaMosque, FaBroadcastTower, FaCalendarAlt, FaMapMarkedAlt, FaPlay } from 'react-icons/fa';

const CommunityTools: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 text-9xl"><FaMosque /></div>
                <div className="absolute bottom-10 right-10 text-9xl"><FaBroadcastTower /></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        أدوات ومجتمع متكامل
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                        تواصل مع قبلتك، واستمع لإذاعتك المفضلة، ونظم وقتك بالتقويم الهجري
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Feature 1: Mosque Finder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors duration-300"
                    >
                        <div className="w-14 h-14 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-6">
                            <FaMapMarkedAlt />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">المساجد القريبة</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            لا تفوت الصلاة جماعة. اكتشف أقرب المساجد لموقعك الحالي مع تحديد المسافة والاتجاه بدقة على الخريطة.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-3 flex items-center gap-3 opacity-80">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg">
                                <FaMosque />
                            </div>
                            <div>
                                <div className="text-sm font-bold">مسجد النور</div>
                                <div className="text-xs text-gray-500">يبعد 300 متر</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Live Radio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-rose-500 transition-colors duration-300"
                    >
                        <div className="w-14 h-14 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl mb-6">
                            <FaBroadcastTower />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">إذاعة القرآن الكريم</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            بث مباشر لإذاعة القرآن الكريم من القاهرة ومكة المكرمة. استمع لتلاوات خاشعة ودروس دينية على مدار 24 ساعة.
                        </p>
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg p-3 flex items-center justify-between shadow-lg">
                            <div className="flex items-center gap-2">
                                <div className="animate-pulse w-2 h-2 bg-white rounded-full"></div>
                                <span className="font-bold text-sm">مباشر الآن</span>
                            </div>
                            <FaPlay />
                        </div>
                    </motion.div>

                    {/* Feature 3: Hijri Calendar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-amber-500 transition-colors duration-300"
                    >
                        <div className="w-14 h-14 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-6">
                            <FaCalendarAlt />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">التقويم الهجري</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            تابع التاريخ الهجري والمناسبات الإسلامية الهامة. نظم جدول عباداتك وصيامك (الأيام البيض، عاشوراء) بسهولة.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-3 text-center border-t-4 border-amber-500">
                            <div className="text-xs text-gray-500 mb-1">اليوم</div>
                            <div className="text-xl font-bold text-white">15 رجب</div>
                            <div className="text-xs text-amber-500">1446 هجري</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CommunityTools;
