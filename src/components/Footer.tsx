import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {/* About */}
                    <div>
                        <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                            <img src="/logo.png" alt={t('footer.appName')} className="w-12 h-12" />
                            <h3 className="text-2xl font-bold">{t('footer.appName')}</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            {t('footer.about')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                                    {t('footer.links.features')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {t('footer.links.privacy')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {t('footer.links.terms')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {t('footer.links.contact')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">{t('footer.followUs')}</h4>
                        <div className={`flex gap-4 mb-4 ${isRtl ? '' : ''}`}>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaEnvelope />
                            <a href="mailto:info@muslimdaily.app" className="hover:text-white transition-colors">
                                info@muslimdaily.app
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400 flex items-center justify-center gap-2">
                        {t('footer.madeWith')} <FaHeart className="text-red-500" /> {t('footer.forMuslims')}
                    </p>
                    <p className="text-gray-500 mt-2">
                        © {currentYear} {t('footer.appName')}. {t('footer.rights')}
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">
                        {t('footer.blessing')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
