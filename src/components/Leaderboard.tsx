import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCrown } from 'react-icons/fa';

interface User {
    rank: number;
    name: string;
    points: number;
    avatar: string;
    badge: string;
}

const topUsers: User[] = [
    {
        rank: 1,
        name: "عبد الله أحمد",
        points: 15420,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        badge: "ختمة ذهبية"
    },
    {
        rank: 2,
        name: "محمد علي",
        points: 14850,
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        badge: "ختمة فضية"
    },
    {
        rank: 3,
        name: "عمر فاروق",
        points: 13200,
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        badge: "مثابر"
    },
    {
        rank: 4,
        name: "خالد بن الوليد",
        points: 12100,
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        badge: "نشيط"
    },
    {
        rank: 5,
        name: "سعد بن معاذ",
        points: 11500,
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        badge: "جديد"
    }
];

const Leaderboard: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-10 opacity-5">
                <FaTrophy className="text-9xl text-yellow-600" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-bold text-sm mb-6">
                        <FaCrown />
                        <span>لوحة الشرف</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        أبرز المشاركين هذا الشهر
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        تنافس في الخيرات وكن من السابقين. نقاطك تزيد مع كل صلاة، قراءة قرآن، أو ذكر.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Podium for Top 3 (Desktop) */}
                    <div className="hidden md:flex justify-center items-end gap-6 mb-16">
                        {/* 2nd Place */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-t-3xl rounded-b-xl shadow-lg w-64 text-center relative pt-12 transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-gray-300 overflow-hidden shadow-xl">
                                <img src={topUsers[1].avatar} alt={topUsers[1].name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-8 right-6 text-gray-300">
                                <FaMedal className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mt-2">{topUsers[1].name}</h3>
                            <div className="text-sm text-gray-500 mb-2">{topUsers[1].badge}</div>
                            <div className="text-2xl font-black text-indigo-600">{topUsers[1].points.toLocaleString('ar-EG')}</div>
                            <div className="text-xs text-gray-400">نقطة</div>
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold mx-auto mt-4 shadow-md">2</div>
                        </motion.div>

                        {/* 1st Place */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-white to-yellow-50 p-6 rounded-t-3xl rounded-b-xl shadow-2xl w-72 text-center relative pt-16 -mt-8 z-10 border-t-4 border-yellow-400 transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                <FaCrown className="text-5xl text-yellow-400 mb-2 drop-shadow-md animate-bounce" />
                            </div>
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden shadow-xl">
                                <img src={topUsers[0].avatar} alt={topUsers[0].name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold mt-2 text-gray-900">{topUsers[0].name}</h3>
                            <div className="text-sm text-yellow-600 font-bold mb-2">{topUsers[0].badge}</div>
                            <div className="text-3xl font-black text-indigo-600">{topUsers[0].points.toLocaleString('ar-EG')}</div>
                            <div className="text-sm text-gray-500">نقطة</div>
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mt-6 shadow-md shadow-yellow-200">1</div>
                        </motion.div>

                        {/* 3rd Place */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-t-3xl rounded-b-xl shadow-lg w-64 text-center relative pt-12 transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-orange-300 overflow-hidden shadow-xl">
                                <img src={topUsers[2].avatar} alt={topUsers[2].name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-8 right-6 text-orange-300">
                                <FaMedal className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mt-2">{topUsers[2].name}</h3>
                            <div className="text-sm text-gray-500 mb-2">{topUsers[2].badge}</div>
                            <div className="text-2xl font-black text-indigo-600">{topUsers[2].points.toLocaleString('ar-EG')}</div>
                            <div className="text-xs text-gray-400">نقطة</div>
                            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold mx-auto mt-4 shadow-md">3</div>
                        </motion.div>
                    </div>

                    {/* List for rest (and Mobile Fallback) */}
                    <div className="space-y-4">
                        {topUsers.slice(3).map((user, index) => (
                            <motion.div
                                key={user.rank}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-8 text-center font-bold text-gray-400">#{user.rank}</div>
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900">{user.name}</h4>
                                    <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded-full">{user.badge}</span>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-indigo-600">{user.points.toLocaleString('ar-EG')}</div>
                                    <div className="text-xs text-gray-400">نقطة</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
                            عرض القائمة الكاملة
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Leaderboard;
