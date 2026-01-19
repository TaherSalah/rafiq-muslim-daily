import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaFilePdf, FaHandHoldingHeart, FaHistory, FaBell } from 'react-icons/fa';

const ZakatShowcase: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-right order-2 lg:order-1 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-bold text-sm mb-6 mx-auto lg:mx-0">
                            <FaHandHoldingHeart />
                            <span>منظومة الزكاة والصدقات</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            حساب دقيق، تتبع مستمر،
                            <br />
                            <span className="text-teal-600">وتقارير احترافية</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            أدر عباداتك المالية بدقة متناهية. من حساب زكاة المال والذهب والأسهم، إلى تتبع صدقاتك اليومية وتاريخ إخراجها، مع تقارير PDF مفصلة جاهزة للطباعة.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                            {[
                                { icon: <FaCalculator />, title: "حاسبة زكاة شاملة", desc: "تدعم كافة أنواع الأموال والأصول" },
                                { icon: <FaFilePdf />, title: "تقارير PDF", desc: "وثق زكاتك بتقرير تفصيلي لعملك" },
                                { icon: <FaHistory />, title: "سجل الصدقات", desc: "تتبع تاريخ صدقاتك ومواضعها" },
                                { icon: <FaBell />, title: "تنبيهات الحول", desc: "تذكير ذكي بموعد إخراج الزكاة" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center text-lg flex-shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Interface */}
                    <div className="flex-1 w-full order-1 lg:order-2">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-teal-200/20 blur-3xl rounded-full" />

                            {/* Main Card - Report Preview */}
                            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 max-w-md mx-auto transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                                            <FaFilePdf size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">تقرير الزكاة السنوي</h3>
                                            <p className="text-xs text-gray-500">1446 هـ - 2025 م</p>
                                        </div>
                                    </div>
                                    <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">مكتمل</span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-600 font-medium">زكاة المال السائل</span>
                                        <span className="font-bold text-gray-900">12,500 ج.م</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-600 font-medium">زكاة الذهب والفضة</span>
                                        <span className="font-bold text-gray-900">4,250 ج.م</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-teal-50 p-3 rounded-lg border border-teal-100">
                                        <span className="text-teal-800 font-bold">إجمالي المستحق</span>
                                        <span className="font-bold text-teal-700">16,750 ج.م</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-teal-500 w-3/4"></div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">75% تم إخراجه</span>
                                </div>
                            </div>


                            {/* Floating Element - Calculator */}
                            <motion.div
                                className="relative lg:absolute mt-6 lg:mt-0 lg:-bottom-10 lg:-left-10 bg-slate-900 text-white p-5 rounded-2xl shadow-xl w-full max-w-xs mx-auto lg:w-48"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-xs text-gray-400 mb-1">أدخل المبلغ (النصاب)</div>
                                <div className="text-2xl font-mono font-bold text-teal-400 mb-2">85.0g</div>
                                <div className="h-1 w-full bg-gray-700 rounded-full mb-3">
                                    <div className="h-full bg-teal-500 w-full"></div>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <FaCalculator />
                                    <span>يحسب تلقائياً</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZakatShowcase;
