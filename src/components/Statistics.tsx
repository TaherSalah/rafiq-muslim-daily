import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

const stats: Stat[] = [
    {
        value: "300,000",
        label: "مستخدم نشط",
        suffix: "+"
    },
    {
        value: "600,000,000",
        label: "صلاة تم تتبعها",
        suffix: "+"
    },
    {
        value: "50,000,000",
        label: "آية تمت قراءتها",
        suffix: "+"
    },
    {
        value: "4.8",
        label: "تقييم المستخدمين",
        suffix: "★"
    }
];

const CountUpAnimation: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = "" }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, end]);

    return (
        <span ref={ref}>
            {count.toLocaleString('ar-EG')}{suffix}
        </span>
    );
};

const Statistics: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-20 bg-gradient-to-br from-islamic-green to-primary-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="text-sm font-bold">إحصائيات مباشرة من لوحة التحكم</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        مجتمع ينمو كل لحظة
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        نفتخر بخدمة المسلمين في شتى بقاع الأرض، وهذه أرقامنا تتحدث
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center group"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 hover:-translate-y-2 shadow-lg">
                                <div className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                                    {stat.value.includes(',') ? (
                                        <CountUpAnimation
                                            end={parseInt(stat.value.replace(/,/g, ''))}
                                            suffix={stat.suffix}
                                        />
                                    ) : (
                                        `${stat.value}${stat.suffix || ''}`
                                    )}
                                </div>
                                <div className="h-px w-12 bg-white/30 mx-auto mb-4 group-hover:w-24 transition-all duration-300"></div>
                                <div className="text-lg font-medium text-white/90">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Dashboard Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
                        <div className="py-4 md:py-0">
                            <div className="text-sm opacity-70 mb-1">ختمات مكتملة هذا الشهر</div>
                            <div className="text-3xl font-bold">12,540</div>
                        </div>
                        <div className="py-4 md:py-0">
                            <div className="text-sm opacity-70 mb-1">مساجد مضافة</div>
                            <div className="text-3xl font-bold">8,920</div>
                        </div>
                        <div className="py-4 md:py-0">
                            <div className="text-sm opacity-70 mb-1">دول نشطة</div>
                            <div className="text-3xl font-bold">142</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Statistics;
