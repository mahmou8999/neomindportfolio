import React from 'react';

export default function Stats({ darkMode, lang }) {
    // ترجمة البيانات حسب اللغة المختارة
    const statsData = {
        ar: [
            { number: "+150", label: "مشروع ناجح" },
            { number: "+98", label: "نسبة رضا العملاء" },
            { number: "+10", label: "سنوات خبرة" },
            { number: "+12", label: "دولة تم خدمتها" }
        ],
        en: [
            { number: "+150", label: "Successful Projects" },
            { number: "+98", label: "Client Satisfaction" },
            { number: "+10", label: "Years of Experience" },
            { number: "+12", label: "Countries Served" }
        ]
    };

    const stats = statsData[lang] || statsData.ar;

    return (
        <section 
            id="stats" 
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className={`py-16 transition-colors duration-300 ${
                darkMode 
                    ? 'bg-indigo-950/40 text-white' 
                    : 'bg-[rgba(0,0,0,0.1)]  text-slate-900'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                    {stats.map((item, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-2xl transition-all duration-300 "
                        >
                            <div className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 ${
                                darkMode ? 'text-white' : 'text-brand'
                            }`}>
                                {item.number}
                            </div>
                            
                            <div className={`font-bold text-xs sm:text-sm md:text-base tracking-wide ${
                                darkMode ? 'text-white' : 'text-brand'
                            }`}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}