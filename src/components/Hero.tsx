import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import HeroImage from "../assets/image.jpg";

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [nextPrayerData, setNextPrayerData] = useState({
        name: '',
        timeStr: '',
        remaining: '00:00:00'
    });

    useEffect(() => {
        const updatePrayer = () => {
            const now = new Date();
            const prayerTimes = [
                { id: 'fajr', hour: 4, minute: 45 },
                { id: 'dhuhr', hour: 12, minute: 5 },
                { id: 'asr', hour: 15, minute: 25 },
                { id: 'maghrib', hour: 18, minute: 5 },
                { id: 'isha', hour: 19, minute: 20 }
            ];

            let next = prayerTimes.find(p => {
                const pDate = new Date();
                pDate.setHours(p.hour, p.minute, 0, 0);
                return pDate > now;
            });

            const nextDate = new Date();
            if (!next) {
                next = prayerTimes[0];
                nextDate.setDate(nextDate.getDate() + 1);
            }
            nextDate.setHours(next.hour, next.minute, 0, 0);

            const diff = nextDate.getTime() - now.getTime();
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);

            const pad = (n: number) => n.toString().padStart(2, '0');
            const isPm = next.hour >= 12;
            const displayHour = next.hour % 12 || 12;

            setNextPrayerData({
                name: t(`hero.prayers.${next.id}`),
                timeStr: `${pad(displayHour)}:${pad(next.minute)} ${isPm ? (i18n.language === 'ar' ? 'م' : 'PM') : (i18n.language === 'ar' ? 'ص' : 'AM')}`,
                remaining: `${pad(h)}:${pad(m)}:${pad(s)}`
            });
        };

        const timer = setInterval(updatePrayer, 1000);
        updatePrayer();
        return () => clearInterval(timer);
    }, [t, i18n.language]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50/50 islamic-pattern py-8">
            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="flex flex-col items-center justify-center gap-6">
                    {/* Header/Logo */}
                    <motion.div
                        className="mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <div className="relative w-20 h-20">
                            <img
                                src="/logo.png"
                                alt="رفيق المسلم"
                                className="w-full h-full object-contain drop-shadow-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Typography */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight flex flex-col gap-1">
                            <span className="text-emerald-600 drop-shadow-sm">{t('hero.titlePrefix')}</span>
                            <span className="text-slate-800 text-3xl sm:text-4xl">{t('hero.titleSuffix')}</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 max-w-xs mx-auto leading-relaxed">
                            {t('hero.description')}
                        </p>
                    </motion.div>

                    {/* Next Prayer Widget */}
                    <motion.div
                        className="mb-4 bg-emerald-500/10 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/20 flex flex-col items-center gap-1 shadow-sm"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 text-emerald-700 font-black text-sm uppercase tracking-wider">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                            </span>
                            {t('hero.nextPrayer')}
                        </div>
                        <div className="text-2xl font-black text-emerald-900 leading-none py-1">
                            {nextPrayerData.name} • {nextPrayerData.timeStr}
                        </div>
                        <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full">
                            <span className="opacity-70">{t('hero.remaining')}</span>
                            <span className="tabular-nums font-black text-xs">{nextPrayerData.remaining}</span>
                        </div>
                    </motion.div>

                    {/* Phone Mockup Row */}
                    <div className="relative w-full flex justify-center items-center py-4">
                        <motion.div
                            className="relative w-48 z-10"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-800">
                                <div className="bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19]">
                                    <img
                                        src={HeroImage}
                                        alt={t('hero.altText')}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Floating Icons */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-2.5 border border-slate-100"
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-xl">🕌</span>
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-2.5 border border-slate-100"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <span className="text-xl">📿</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons - Floating Right (Mobile specific) */}
                        <div className="flex flex-col gap-3 ml-[-15px] z-20">
                            <motion.a
                                href={t('hero.links.appStore')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 text-white rounded-full py-2.5 px-5 shadow-xl flex items-center gap-3 border-2 border-emerald-600 hover:bg-emerald-700 transition-all min-w-[155px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex-1 text-right">
                                    <div className="text-[9px] opacity-80 leading-none mb-0.5">{t('hero.downloadLabel')}</div>
                                    <div className="text-xs font-bold leading-none">{t('hero.downloadAppStore')}</div>
                                </div>
                                <FaApple className="text-xl" />
                            </motion.a>

                            <motion.a
                                href={t('hero.links.googlePlay')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-emerald-600 rounded-full py-2.5 px-5 shadow-xl flex items-center gap-3 border-2 border-emerald-600 hover:bg-emerald-50 transition-all min-w-[155px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex-1 text-right">
                                    <div className="text-[9px] opacity-80 leading-none mb-0.5">{t('hero.downloadLabel')}</div>
                                    <div className="text-xs font-bold leading-none">{t('hero.downloadGooglePlay')}</div>
                                </div>
                                <FaGooglePlay className="text-lg" />
                            </motion.a>

                            <motion.a
                                href={t('hero.links.appGallery')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-emerald-600 rounded-full py-2.5 px-5 shadow-xl flex items-center gap-3 border-2 border-emerald-600 hover:bg-emerald-50 transition-all min-w-[155px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex-1 text-right">
                                    <div className="text-[9px] opacity-80 leading-none mb-0.5">{t('hero.downloadLabel')}</div>
                                    <div className="text-xs font-bold leading-none">{t('hero.downloadAppGallery')}</div>
                                </div>
                                <SiHuawei className="text-lg" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Stats Horizontal Row */}
                    <motion.div
                        className="w-full max-w-sm mt-4 bg-white/40 backdrop-blur-sm rounded-3xl p-4 flex justify-around items-center border border-white/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="text-center">
                            <div className="text-xl font-black text-slate-800 tabular-nums">{t('hero.stats.usersValue')}</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t('hero.stats.users')}</div>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="text-center">
                            <div className="text-xl font-black text-slate-800 tabular-nums">{t('hero.stats.booksValue')}</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t('hero.stats.books')}</div>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className="text-center">
                            <div className="text-xl font-black text-slate-800 flex items-center gap-0.5">
                                <span className="text-amber-400 text-sm">★</span>{t('hero.stats.ratingValue')}
                            </div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t('hero.stats.rating')}</div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <div className="mt-8">
                        <motion.div
                            className="w-6 h-10 border-2 border-emerald-600/30 rounded-full flex items-start justify-center p-1"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1.5 h-1.5 bg-emerald-600 rounded-full"
                                animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
