import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaMosque, FaCloudSun, FaStar } from 'react-icons/fa';

const journeySteps = [
    {
        time: "الفجر",
        title: "بداية يوم مباركة",
        desc: "استيقظ على صوت أذان الفجر الهادئ، واقرأ أذكار الصباح لتبدأ يومك بنشاط وطمأنينة.",
        icon: <FaCloudSun />,
        color: "bg-indigo-500",
        lightColor: "bg-indigo-100 text-indigo-600"
    },
    {
        time: "الظهر",
        title: "استراحة إيمانية",
        desc: "تنبيه دقيق لموعد الصلاة يذكرك بأخذ استراحة من عملك للوقوف بين يدي الله.",
        icon: <FaSun />,
        color: "bg-yellow-500",
        lightColor: "bg-yellow-100 text-yellow-600"
    },
    {
        time: "العصر",
        title: "ورد القرآن اليومي",
        desc: "الوقت الأمثل لقراءة وردك اليومي من القرآن الكريم، مع ميزة حفظ مكان التوقف تلقائياً.",
        icon: <FaMosque />,
        color: "bg-orange-500",
        lightColor: "bg-orange-100 text-orange-600"
    },
    {
        time: "المغرب والعشاء",
        title: "أذكار المساء",
        desc: "اختم نهارك بقراءة أذكار المساء وتتبع صلواتك في سجل العبادات اليومي.",
        icon: <FaMoon />,
        color: "bg-blue-600",
        lightColor: "bg-blue-100 text-blue-600"
    },
    {
        time: "قبل النوم",
        title: "الراحة السكينة",
        desc: "استمع إلى تلاوات خاشعة أو الراديو الإسلامي لتنام على ذكر الله.",
        icon: <FaStar />,
        color: "bg-slate-700",
        lightColor: "bg-slate-100 text-slate-700"
    }
];

const Journey: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        رفيقك طوال اليوم
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        كيف يرافقك تطبيقنا في every لحظة من لحظات يومك
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute right-[50%] top-0 bottom-0 w-1 bg-gray-100 transform translate-x-1/2 md:right-auto md:left-1/2 md:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {journeySteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot (Desktop only) */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-islamic-green rounded-full z-10 hidden md:block" />

                                {/* Content Card */}
                                <div className="flex-1 w-full md:w-auto">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-50 relative overflow-hidden group">
                                        <div className={`absolute top-0 right-0 w-2 h-full ${step.color}`} />

                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${step.lightColor}`}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                                    {step.time}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-islamic-green transition-colors">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for Timeline Alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
