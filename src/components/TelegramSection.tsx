import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaArrowLeft, FaArrowRight, FaBullhorn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const TelegramSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const telegramLink = t('footer.social.telegram');

    const benefits = t('telegramSection.benefits', { returnObjects: true }) as string[];

    return (
        <section className="py-24 bg-white relative overflow-hidden font-arabic">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-600 rounded-full font-bold text-xs mb-8 shadow-sm border border-sky-200"
                        >
                            <FaTelegram size={14} />
                            <span>{t('telegramSection.tag')}</span>
                        </motion.div>

                        {/* Title & Subtitle */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight"
                        >
                            {t('telegramSection.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-sky-600 font-bold mb-8 max-w-2xl mx-auto"
                        >
                            {t('telegramSection.subtitle')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
                        >
                            {t('telegramSection.description')}
                        </motion.p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 w-full px-4">
                            {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:border-sky-300 transition-all hover:shadow-md h-full"
                                >
                                    <span className="text-base font-bold text-slate-700 leading-tight text-center flex-1">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main CTA */}
                        <motion.a
                            href={telegramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="inline-flex items-center gap-4 bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-sky-500/30 transition-all group"
                        >
                            <FaTelegram size={24} className="group-hover:rotate-12 transition-transform" />
                            <span>{t('telegramSection.cta')}</span>
                            <motion.div
                                animate={{ x: isRtl ? [-5, 5, -5] : [5, -5, 5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {isRtl ? <FaArrowLeft /> : <FaArrowRight />}
                            </motion.div>
                        </motion.a>

                        {/* Secondary Social Badge */}
                        {/* <div className="mt-12 flex items-center gap-3 text-slate-400 font-bold text-sm">
                            <span className="w-8 h-px bg-slate-200" />
                            <FaBullhorn className="text-sky-400" />
                            <span>انضم لأكثر من 50,000 مسلم</span>
                            <span className="w-8 h-px bg-slate-200" />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TelegramSection;
