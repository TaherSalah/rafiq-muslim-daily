import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LiveUserCounter: React.FC<{ className?: string }> = ({ className = "" }) => {
    const { t } = useTranslation();
    const [count, setCount] = useState(1245);

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly increment/decrement count to simulate live users
            const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
            setCount(prev => Math.max(1200, prev + change));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-emerald-500/20 ${className}`}>
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black text-emerald-800 tracking-wider flex gap-1 items-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={count}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="tabular-nums font-bold"
                    >
                        {count.toLocaleString()}
                    </motion.span>
                </AnimatePresence>
                {t('premium.liveUser.now')}
            </span>
        </div>
    );
};

export default LiveUserCounter;
