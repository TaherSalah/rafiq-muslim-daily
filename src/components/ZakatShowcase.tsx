import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaFilePdf, FaHandHoldingHeart, FaHistory, FaBell } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ZakatShowcase: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const features = t('zakatShowcase.features', { returnObjects: true }) as { title: string; desc: string }[];
    const icons = [<FaCalculator />, <FaFilePdf />, <FaHistory />, <FaBell />];

    const formatNumber = (val: string) => {
        const num = parseFloat(val.replace(/,/g, ''));
        return isNaN(num) ? val : num.toLocaleString(isRtl ? 'ar-EG' : 'en-US');
    };

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col ${isRtl ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>

                    {/* Text Content */}
                    <motion.div
                        className={`flex-1 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} order-2 lg:order-1 w-full`}
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-bold text-sm mb-6 mx-auto ${isRtl ? 'lg:mx-0' : 'lg:mx-0'}`}>
                            <FaHandHoldingHeart />
                            <span>{t('zakatShowcase.badge')}</span>
                        </div>

                        <h2 className={`text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('zakatShowcase.title')}
                            <br />
                            <span className="text-teal-600">{t('zakatShowcase.titleHighlight')}</span>
                        </h2>

                        <p className={`text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto ${isRtl ? 'lg:mx-0' : 'lg:mx-0'} ${isRtl ? 'text-right' : 'text-left'}`}>
                            {t('zakatShowcase.desc')}
                        </p>

                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                            {features.map((item, index) => (
                                <div key={index} className={`flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center text-lg flex-shrink-0 mt-1">
                                        {icons[index]}
                                    </div>
                                    <div className={isRtl ? 'text-right' : 'text-left'}>
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
                            <div className={`relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 max-w-md mx-auto transform hover:rotate-0 transition-transform duration-500 ${isRtl ? 'lg:rotate-2' : 'lg:-rotate-2'}`}>
                                <div className={`flex items-center justify-between mb-6 border-b border-gray-100 pb-4 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`flex items-center gap-3 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                                            <FaFilePdf size={20} />
                                        </div>
                                        <div className={isRtl ? 'text-right' : 'text-left'}>
                                            <h3 className="font-bold text-gray-900">{t('zakatShowcase.report.title')}</h3>
                                            <p className="text-xs text-gray-500">{t('zakatShowcase.report.hijri')} - {t('zakatShowcase.report.gregorian')}</p>
                                        </div>
                                    </div>
                                    <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">{t('zakatShowcase.report.status')}</span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className={`flex justify-between items-center bg-gray-50 p-3 rounded-lg ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <span className="text-gray-600 font-medium">{t('zakatShowcase.report.liquidMoney')}</span>
                                        <span className="font-bold text-gray-900 tabular-nums">{formatNumber(t('zakatShowcase.report.liquidMoneyValue'))} {t('zakatShowcase.report.currency')}</span>
                                    </div>
                                    <div className={`flex justify-between items-center bg-gray-50 p-3 rounded-lg ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <span className="text-gray-600 font-medium">{t('zakatShowcase.report.goldSilver')}</span>
                                        <span className="font-bold text-gray-900 tabular-nums">{formatNumber(t('zakatShowcase.report.goldSilverValue'))} {t('zakatShowcase.report.currency')}</span>
                                    </div>
                                    <div className={`flex justify-between items-center bg-teal-50 p-3 rounded-lg border border-teal-100 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <span className="text-teal-800 font-bold">{t('zakatShowcase.report.total')}</span>
                                        <span className="font-bold text-teal-700 tabular-nums">{formatNumber(t('zakatShowcase.report.totalValue'))} {t('zakatShowcase.report.currency')}</span>
                                    </div>
                                </div>

                                <div className={`flex gap-3 ${isRtl ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-teal-500 w-3/4"></div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">{t('zakatShowcase.report.paid')}</span>
                                </div>
                            </div>


                            {/* Floating Element - Calculator */}
                            <motion.div
                                className={`relative lg:absolute mt-6 lg:mt-0 lg:-bottom-10 ${isRtl ? 'lg:-left-10' : 'lg:-right-10'} bg-slate-900 text-white p-5 rounded-2xl shadow-xl w-full max-w-xs mx-auto lg:w-48`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className={`text-xs text-gray-400 mb-1 ${isRtl ? 'text-right' : 'text-left'}`}>{t('zakatShowcase.calculator.label')}</div>
                                <div className={`text-2xl font-mono font-bold text-teal-400 mb-2 tabular-nums ${isRtl ? 'text-right' : 'text-left'}`}>{t('zakatShowcase.calculator.value')}</div>
                                <div className="h-1 w-full bg-gray-700 rounded-full mb-3">
                                    <div className="h-full bg-teal-500 w-full"></div>
                                </div>
                                <div className={`flex items-center gap-2 text-xs ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <FaCalculator />
                                    <span>{t('zakatShowcase.calculator.info')}</span>
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
