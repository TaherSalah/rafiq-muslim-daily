import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Download: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white" id="download">
            <div className="container mx-auto px-4 max-w-lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-emerald-500 to-teal-400 rounded-[3rem] p-10 md:p-14 text-white text-center relative overflow-hidden shadow-2xl shadow-emerald-500/20"
                >
                    {/* Abstract Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                {t('download.title')}
                            </h2>
                            <p className="text-lg opacity-90 mb-12 max-w-xs mx-auto font-medium leading-relaxed">
                                {t('download.subtitle')}
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={t('hero.links.appStore')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-emerald-600 h-16 rounded-3xl flex items-center justify-center gap-4 shadow-xl shadow-black/5"
                            >
                                <FaApple size={28} />
                                <div className="text-right">
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">{t('hero.downloadLabel')}</div>
                                    <div className="text-lg font-black leading-none">{t('hero.downloadAppStore')}</div>
                                </div>
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={t('hero.links.googlePlay')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-emerald-600 h-16 rounded-3xl flex items-center justify-center gap-4 shadow-xl shadow-black/5"
                            >
                                <FaGooglePlay size={24} />
                                <div className="text-right">
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">{t('hero.downloadLabel')}</div>
                                    <div className="text-lg font-black leading-none">{t('hero.downloadGooglePlay')}</div>
                                </div>
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={t('hero.links.appGallery')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-emerald-600 h-16 rounded-3xl flex items-center justify-center gap-4 shadow-xl shadow-black/5"
                            >
                                <SiHuawei size={24} />
                                <div className="text-right">
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">{t('hero.downloadLabel')}</div>
                                    <div className="text-lg font-black leading-none">{t('hero.downloadAppGallery')}</div>
                                </div>
                            </motion.a>
                        </div>

                        <div className="mt-12">
                            <div className="flex justify-center -space-x-3 mb-4">
                                {[1, 2, 3, 4].map(i => (
                                    <img 
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/sm/${i + 10}.jpg`} 
                                        className="w-10 h-10 rounded-full border-4 border-emerald-400 object-cover"
                                        alt="User"
                                    />
                                ))}
                                <div className="w-10 h-10 rounded-full border-4 border-emerald-400 bg-emerald-600 flex items-center justify-center text-[10px] font-black">
                                    +1M
                                </div>
                            </div>
                            <p className="text-xs font-bold opacity-80 uppercase tracking-tighter">
                                {t('download.availability')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Download;
