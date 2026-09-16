import React from 'react';
import { MessageSquare, Phone, Mail, Globe } from 'lucide-react';

export default function Contact({ darkMode, lang }) {
    const isAr = lang === 'ar';

    const socialLinks = [
        {
            nameAr: "واتساب",
            nameEn: "WhatsApp",
            icon: <MessageSquare size={24} />,
            href: "https://wa.me/201124024707",
            color: "hover:bg-green-500 hover:text-white hover:border-green-500"
        },
        {
            nameAr: "فيسبوك",
            nameEn: "Facebook",
            icon: <Globe size={24} />, 
            href: "https://www.facebook.com/NEOMINDEG", 
            color: "hover:bg-blue-600 hover:text-white hover:border-blue-600"
        },
        {
            nameAr: "إنستجرام",
            nameEn: "Instagram",
            icon: <Globe size={24} />,
            href: "https://www.instagram.com/neomind.eg?fbclid=IwY2xjawUXc2pwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUtmcVNLMEhkVjIxeW9iVExzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeUaNpzWpbES96jxBKcrWfSjzmD58n7JJf9k4jt7XY94y3UmdM94ydv2Q7MTQ_aem_kW37NmfAaDSBIfhfOAWbdA", 
            color: "hover:bg-pink-600 hover:text-white hover:border-pink-600"
        },
        {
            nameAr: "تيك توك",
            nameEn: "TikTok",
            icon: <Globe size={24} />,
            href: "https://www.tiktok.com/@neomindeg?fbclid=IwY2xjawUXc_twZG9mBWV4dG4DYWVtAjEwAGJyaWQRMUtmcVNLMEhkVjIxeW9iVExzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeUaNpzWpbES96jxBKcrWfSjzmD58n7JJf9k4jt7XY94y3UmdM94ydv2Q7MTQ_aem_kW37NmfAaDSBIfhfOAWbdA",
            color: "hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black"
        },
        {
            nameAr: "البريد الإلكتروني",
            nameEn: "Email",
            icon: <Mail size={24} />,
            href: "mailto:contact@neomind.com",
            color: "hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
        },
        {
            nameAr: "رقم الهاتف",
            nameEn: "Phone Number",
            icon: <Phone size={24} />,
            href: "tel:+201124024707",
            color: "hover:bg-purple-600 hover:text-white hover:border-purple-600"
        }
    ];

    return (
        <section 
            id="contact" 
            dir={isAr ? 'rtl' : 'ltr'} 
            className={`py-24 border-t transition-colors duration-300 ${
                darkMode 
                    ? 'border-slate-800 bg-slate-950 text-slate-100' 
                    : 'border-gray-200 bg-white text-slate-900'
            }`}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* العنوان والوصف */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    {isAr ? 'تواصل معنا مباشرة' : 'Get in Touch Directly'}
                </h2>
                <p className={`text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                    {isAr 
                        ? 'اختر الوسيلة المناسبة لك للتواصل مع فريقنا في أي وقت. نحن في انتظار بدء مشروعك القادم!' 
                        : 'Choose your preferred channel to connect with our team anytime. We are ready to start your next project!'}
                </p>

                {/* شبكة الأيقونات واللينكات */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                                darkMode 
                                    ? 'bg-slate-900/80 border-slate-800 text-slate-200' 
                                    : 'bg-slate-50 border-gray-200 text-slate-800 shadow-sm'
                            } ${social.color}`}
                        >
                            <div className={`p-3 rounded-xl transition-colors ${
                                darkMode ? 'bg-slate-800 text-white group-hover:bg-white/20' : 'bg-white text-brand group-hover:bg-white/20'
                            }`}>
                                {social.icon}
                            </div>
                            <div className="text-right rtl:text-right ltr:text-left">
                                <h3 className="font-bold text-base mb-1">
                                    {isAr ? social.nameAr : social.nameEn}
                                </h3>
                                <span className={`text-xs block truncate ${
                                    darkMode ? 'text-slate-400 group-hover:text-white/80' : 'text-slate-500 group-hover:text-white/80'
                                }`}>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}