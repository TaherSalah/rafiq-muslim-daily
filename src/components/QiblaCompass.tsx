import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCompass } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const QiblaCompass: React.FC = () => {
    const { t } = useTranslation();
    const [heading, setHeading] = useState(0);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        // Only run on client-side
        if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
            const handleOrientation = (event: DeviceOrientationEvent) => {
                let absoluteHeading = 0;
                
                // For iOS
                if ((event as any).webkitCompassHeading !== undefined) {
                    absoluteHeading = (event as any).webkitCompassHeading;
                } else if (event.alpha !== null) {
                    // For Android
                    absoluteHeading = 360 - event.alpha;
                }
                
                setHeading(absoluteHeading);
                setIsSupported(true);
            };

            // Request permission for iOS 13+
            if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                (DeviceOrientationEvent as any).requestPermission()
                    .then((permissionState: string) => {
                        if (permissionState === 'granted') {
                            window.addEventListener('deviceorientation', handleOrientation);
                        }
                    })
                    .catch(console.error);
            } else {
                window.addEventListener('deviceorientation', handleOrientation);
            }

            return () => window.removeEventListener('deviceorientation', handleOrientation);
        }
    }, []);

    // Mock rotation for desktop/unsupported devices
    useEffect(() => {
        if (!isSupported) {
            const interval = setInterval(() => {
                setHeading(prev => (prev + 0.5) % 360);
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isSupported]);

    return (
        <div className="flex flex-col items-center gap-6 p-6 glass-dark rounded-[2.5rem] border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Compass Ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1 4" className="text-emerald-500/30" />
                </svg>

                {/* Compass Needle Container */}
                <motion.div 
                    className="relative w-full h-full flex items-center justify-center"
                    animate={{ rotate: -heading }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                    {/* Qibla Indicator (Kaaba) */}
                    <div className="absolute top-2 text-2xl filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">🕋</div>
                    
                    {/* Needle */}
                    <div className="w-1 h-32 bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent rounded-full" />
                </motion.div>

                {/* Center Point */}
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] z-10" />
            </div>

            <div className="text-center z-10">
                <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-2">
                    <FaCompass className={isSupported ? "animate-spin-slow" : ""} />
                    {isSupported ? t('premium.qibla.active') : t('premium.qibla.demo')}
                </div>
                <div className="text-xl font-black text-white">
                    {Math.round(heading)}° {t('premium.qibla.degrees')}
                </div>
                <p className="text-[10px] text-slate-500 mt-2 font-bold max-w-[150px]">
                    {isSupported 
                        ? t('premium.qibla.mobileDesc')
                        : t('premium.qibla.demo')
                    }
                </p>
            </div>
        </div>
    );
};

export default QiblaCompass;
