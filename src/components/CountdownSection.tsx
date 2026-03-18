import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CountdownSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target: Eid Al-Fitr (Expected March 20/21, 2026)
        const targetDate = new Date('2026-03-20T00:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: t('premium.countdown.days'), value: timeLeft.days },
        { label: t('premium.countdown.hours'), value: timeLeft.hours },
        { label: t('premium.countdown.minutes'), value: timeLeft.minutes },
        { label: t('premium.countdown.seconds'), value: timeLeft.seconds }
    ];

    return (
        <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden font-arabic">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] opacity-50 -z-10" />

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
                    >
                        {t('premium.countdown.eidTitle')}
                    </motion.h2>
                    <p className="text-slate-500 font-bold opacity-80">
                        {t('premium.countdown.ramadanTitle')}
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-4 md:gap-8">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-4 md:p-8 rounded-[2rem] border-2 border-amber-100 shadow-xl shadow-amber-500/5 flex flex-col items-center justify-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-amber-200 group-hover:bg-amber-400 transition-colors" />
                            <span className="text-3xl md:text-5xl font-black text-amber-600 mb-2 tabular-nums">
                                {unit.value.toLocaleString(i18n.language === 'ar' ? 'ar-EG' : 'en-US')}
                            </span>
                            <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">
                                {unit.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
