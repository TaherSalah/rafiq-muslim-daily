import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="رفيق المسلم" className="w-12 h-12" />
                            <h3 className="text-2xl font-bold">رفيق المسلم</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            تطبيق إسلامي شامل يجمع كل ما يحتاجه المسلم في حياته اليومية من عبادات وأذكار وقراءة القرآن والمزيد
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                                    المميزات
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    سياسة الخصوصية
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    شروط الاستخدام
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    اتصل بنا
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">تابعنا</h4>
                        <div className="flex gap-4 mb-4">
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
                        صُنع بـ <FaHeart className="text-red-500" /> للمسلمين في كل مكان
                    </p>
                    <p className="text-gray-500 mt-2">
                        © {currentYear} رفيق المسلم. جميع الحقوق محفوظة.
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">
                        جعله الله في ميزان حسناتنا وحسناتكم
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
