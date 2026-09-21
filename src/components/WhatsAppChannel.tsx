import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaQrcode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const WhatsAppChannel: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const whatsappLink = t('footer.social.whatsapp', { defaultValue: 'https://whatsapp.com/channel/0029Va8xNqw8qIzoHhV6sD0v' }); // Placeholder if not in JSON

    const benefits = t('whatsappChannel.benefits', { returnObjects: true }) as string[];

    return (
        <section className="py-24 bg-[#e8f5e9] relative overflow-hidden font-arabic">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#25D366] rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#128C7E] rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-xs mb-8 shadow-sm border border-green-200"
                        >
                            <FaWhatsapp size={14} />
                            <span>{t('whatsappChannel.tag')}</span>
                        </motion.div>

                        {/* Title & Subtitle */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight"
                        >
                            {t('whatsappChannel.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-green-600 font-bold mb-8 max-w-2xl mx-auto"
                        >
                            {t('whatsappChannel.subtitle')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
                        >
                            {t('whatsappChannel.description')}
                        </motion.p>

                        {/* QR Code Mockup (as in screenshot) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 rounded-3xl shadow-xl border-2 border-green-500/20 mb-12 relative flex flex-col items-center justify-center w-64 h-64"
                        >
                            <div className="absolute -top-6 w-12 h-12 bg-black rounded-full border-4 border-white flex items-center justify-center shadow-md">
                                <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain filter brightness-0 invert" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                            <h4 className="font-bold text-slate-800 mb-1 mt-4 text-sm font-arabic">تطبيق رفيق المسلم اليومي</h4>
                            <p className="text-slate-400 text-[10px] mb-4">WhatsApp channel</p>
                            <div className="bg-slate-100 p-2 rounded-xl relative">
                                <FaQrcode className="text-[120px] text-slate-800" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 border-2 border-slate-100 shadow-sm">
                                    <FaWhatsapp className="text-[#25D366] text-2xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 w-full px-4">
                            {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="flex items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-green-100 group hover:border-green-300 transition-all hover:shadow-md h-full"
                                >
                                    <span className="text-base font-bold text-slate-700 leading-tight text-center flex-1">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main CTA */}
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-[#25D366]/30 transition-all group"
                        >
                            <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform" />
                            <span>{t('whatsappChannel.cta')}</span>
                            <motion.div
                                animate={{ x: isRtl ? [-5, 5, -5] : [5, -5, 5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {isRtl ? <FaArrowLeft /> : <FaArrowRight />}
                            </motion.div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsAppChannel;
