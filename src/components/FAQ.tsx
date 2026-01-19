import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "هل التطبيق مجاني بالكامل؟",
        answer: "نعم، تطبيق رفيق المسلم مجاني بالكامل ولا يحتوي على أي إعلانات مزعجة تؤثر على تجربتك الروحانية."
    },
    {
        question: "كيف يتم حساب مواقيت الصلاة؟",
        answer: "يعتمد التطبيق على الموقع الجغرافي (GPS) لحساب مواقيت الصلاة بدقة عالية وفقاً لأقرب طريقة حساب معتمدة في منطقتك، مع إمكانية التعديل اليدوي."
    },
    {
        question: "هل يعمل التطبيق بدون إنترنت؟",
        answer: "نعم، معظم ميزات التطبيق مثل القرآن الكريم، الأذكار، والمواقيت تعمل بدون الحاجة للاتصال بالإنترنت. فقط الميزات التي تتطلب تحديثاً مباشراً مثل الراديو وتحديث الموقع تحتاج لاتصال."
    },
    {
        question: "هل يدعم التطبيق الوضع الليلي؟",
        answer: "بالتأكيد! نوفر وضعاً ليلياً مريحاً للعين لقراءة القرآن والأذكار في الإضاءة المنخفضة."
    },
    {
        question: "كيف يمكنني ختم القرآن باستخدام التطبيق؟",
        answer: "يوفر التطبيق خطط ختم متعددة، يمكنك تحديد المدة التي تريد ختم القرآن فيها وسيقوم التطبيق بتقسيم الورد اليومي وتذكيرك به."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
                        الأسئلة الشائعة
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        إجابات وافية على استفساراتك
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
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
                                className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-50 transition-colors duration-300"
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
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
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
