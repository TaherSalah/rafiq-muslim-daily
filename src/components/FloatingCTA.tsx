import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToDownload = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToDownload}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-islamic-green to-primary-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group"
                >
                    <FaDownload className="text-xl" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
                        حمّل التطبيق
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
