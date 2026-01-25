import React from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaCalendarAlt, FaMoon, FaPray } from 'react-icons/fa';

const SmartWidgets: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual Side */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-emerald-200 blur-3xl opacity-30 rounded-full" />

                            {/* Widgets Grid */}
                            <div className="relative grid gap-6 w-full max-w-sm md:max-w-md mx-auto">
                                {/* Azan Widget */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500" />
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900">المغرب</h4>
                                            <p className="text-sm text-gray-500">القاهرة، مصر</p>
                                        </div>
                                        <FaPray className="text-emerald-500 text-xl" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">06:15 <span className="text-base text-gray-400 font-normal">م</span></div>
                                    <p className="text-xs text-emerald-600 font-bold">متبقي 00:45:20</p>
                                </motion.div>

                                {/* Date & Dhikr Widget */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white relative overflow-hidden"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl">
                                            <FaCalendarAlt />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">15 رمضان</div>
                                            <div className="text-sm opacity-60">1447 هجري</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-3 text-center text-sm">
                                        "اللهم إنك عفو تحب العفو فاعف عنا"
                                    </div>
                                </motion.div>

                                {/* Notification Card */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4 transform translate-x-8"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg">
                                        <FaBell />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">تذكير بسنن الجمعة</div>
                                        <div className="text-xs text-gray-500">لا تنس قراءة سورة الكهف والصلاة على النبي</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <motion.div
                        className="flex-1 text-center lg:text-right"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            ودجت الشاشة الرئيسية
                            <br />
                            <span className="text-emerald-500">منظم ومتصل دائماً</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            لا داعي لفتح التطبيق في كل مرة. مع ودجت رفيق المسلم، مواقيت الصلاة والتاريخ الهجري والأذكار دائماً أمام عينيك على شاشتك الرئيسية.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0 mt-1">
                                    <FaCalendarAlt />
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">ودجت متنوعة</h4>
                                    <p className="text-gray-600">اختر من بين أشكال وأحجام متعددة تناسب ذوقك وتنظيم شاشتك.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl flex-shrink-0 mt-1">
                                    <FaMoon />
                                </div>
                                <div className="text-right">
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">تنبيهات ذكية</h4>
                                    <p className="text-gray-600">إشعارات مخصصة للأذان، قيام الليل، وصيام الأيام البيض.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SmartWidgets;
