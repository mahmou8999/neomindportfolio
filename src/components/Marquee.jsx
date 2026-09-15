import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Database, Megaphone, Cloud, Palette, ShieldCheck } from 'lucide-react';

export default function Marquee({ darkMode, lang }) {
    const services = [
        {
            en: "Web Development",
            ar: "تطوير الويب",
            icon: <Code size={26} className="text-[#61DAFB]" />
        },
        {
            en: "Dashboard & Systems",
            ar: "لوحات التحكم والأنظمة",
            icon: <Server size={26} className="text-[#FF2D20]" />
        },
        {
            en: "Mobile Apps",
            ar: "تطبيقات الموبايل",
            icon: <Smartphone size={26} className="text-[#02569B]" />
        },
        {
            en: "Databases",
            ar: "قواعد البيانات",
            icon: <Database size={26} className="text-emerald-500" />
        },
        {
            en: "Digital Marketing",
            ar: "التسويق الرقمي",
            icon: <Megaphone size={26} className="text-amber-500" />
        },
        {
            en: "Hosting",
            ar: "الاستضافة السحابية",
            icon: <Cloud size={26} className="text-sky-500" />
        },
        {
            en: "UI/UX Design",
            ar: "تصميم واجهات المستخدم",
            icon: <Palette size={26} className="text-[#F24E1E]" />
        },
        {
            en: "Security & JWT",
            ar: "الحماية والأمان",
            icon: <ShieldCheck size={26} className="text-indigo-600" />
        }
    ];

    return (
        <div className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-slate-950/60 border-slate-900' : 'bg-slate-100/80 border-slate-200'} border-y overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 text-center">
                
                {/* العنوان */}
                <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`text-sm font-semibold mb-8 uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}
                >
                    {lang === 'ar' ? 'خدماتنا المتكاملة لنمو عملك الرقمي' : 'Our comprehensive services for your digital growth'}
                </motion.p>

                {/* شبكة المربعات */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {services.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            className={`p-5 rounded-2xl border backdrop-blur-md flex flex-col items-center text-center gap-3 transition-colors duration-300 cursor-default shadow-sm ${
                                darkMode
                                    ? 'bg-slate-900/80 border-slate-800 text-slate-100 hover:border-accent shadow-brand/10'
                                    : 'bg-white border-slate-200/80 text-slate-900 hover:border-brand shadow-slate-300/40'
                            }`}
                        >
                            {/* حاوية الأيقونة */}
                            <div className={`p-3 rounded-xl transition-transform duration-300 hover:rotate-6 flex items-center justify-center ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                                {item.icon}
                            </div>

                            {/* اسم الخدمة */}
                            <span className={`text-base font-extrabold tracking-wide ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {lang === 'ar' ? item.ar : item.en}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}