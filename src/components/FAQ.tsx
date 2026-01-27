import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const isRtl = i18n.language === 'ar';

    const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {Array.isArray(faqs) && faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`w-full flex items-center justify-between p-6 ${isRtl ? 'text-right' : 'text-left'} hover:bg-gray-50 transition-colors duration-300`}
                            >
                                <span className={`text-lg font-bold ${activeIndex === index ? 'text-islamic-green' : 'text-gray-800'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${activeIndex === index ? 'bg-islamic-green text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={`p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 ${isRtl ? 'text-right' : 'text-left'}`}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
