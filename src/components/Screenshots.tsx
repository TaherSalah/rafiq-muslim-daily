import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaBookOpen, FaMosque, FaQuran } from 'react-icons/fa';

const screens = [
    {
        id: 1,
        title: "الشاشة الرئيسية",
        icon: <FaMosque />,
        color: "bg-emerald-500",
        content: (
            <div className="flex flex-col h-full">
                <div className="bg-emerald-600 h-32 rounded-b-3xl p-6 text-white relative">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm">الفجر</div>
                        <div className="text-xl font-bold">04:30 ص</div>
                    </div>
                    <div className="text-center mt-2">
                        <div className="text-xs opacity-80">المتبقى للصلاة القادمة</div>
                        <div className="text-3xl font-bold mt-1">00:45:20</div>
                    </div>
                </div>
                <div className="p-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <FaBookOpen className="text-emerald-500 text-2xl mx-auto mb-2" />
                        <div className="text-sm font-bold">القرآن</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <FaClock className="text-emerald-500 text-2xl mx-auto mb-2" />
                        <div className="text-sm font-bold">المواقيت</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "القرآن الكريم",
        icon: <FaQuran />,
        color: "bg-amber-500",
        content: (
            <div className="flex flex-col h-full bg-[#fffcf2]">
                <div className="bg-amber-600 h-16 flex items-center justify-center text-white font-bold">
                    سورة البقرة
                </div>
                <div className="p-6 text-center leading-loose font-serif text-lg">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                    <br />
                    الم (1) ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ (2)
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "الأذكار",
        icon: <FaBookOpen />,
        color: "bg-blue-500",
        content: (
            <div className="flex flex-col h-full bg-gray-50">
                <div className="bg-blue-600 h-20 rounded-b-3xl p-4 text-white text-center font-bold flex items-center justify-center">
                    أذكار الصباح
                </div>
                <div className="p-4 space-y-3">
                    <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500">
                        <p className="text-sm">أصبحنا وأصبح الملك لله...</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500">
                        <p className="text-sm">اللهم بك أصبحنا...</p>
                    </div>
                </div>
            </div>
        )
    }
];

const Screenshots: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        نظرة من الداخل
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        واجهة مستخدم عصرية وسهلة الاستخدام، مصممة لراحتك
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-12 relative">
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-islamic-green/5 to-primary-500/5 rounded-full blur-3xl -z-10" />

                    {screens.map((screen, index) => (
                        <motion.div
                            key={screen.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Phone Frame */}
                            <div className="relative w-64 h-[500px] border-8 border-gray-900 rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-300">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>

                                {/* Screen Content */}
                                <div className="bg-white h-full w-full overflow-hidden relative">
                                    {/* Status Bar Placeholder */}
                                    <div className="h-6 w-full bg-white z-10" />

                                    {screen.content}
                                </div>
                            </div>

                            {/* Label */}
                            <div className="text-center mt-6">
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${screen.color}`}>
                                    {screen.icon}
                                    {screen.title}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
