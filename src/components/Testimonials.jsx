import React from 'react';

export default function Testimonials({ darkMode, lang }) {
    // ترجمة البيانات والتعليقات حسب اللغة المختارة
    const testimonialsData = {
        ar: {
            title: "آراء عملاؤنا",
            subtitle: "ماذا يقول من تعامل معنا وثق بخدماتنا.",
            reviews: [
                { name: "أحمد خالد", role: "صاحب متجر إلكتروني", comment: "تعامل راقٍ واحترافية عالية جداً في تسليم موقع الويب قبل الموعد المحدد." },
                { name: "سارة محمود", role: "مديرة تسويق", comment: "فريق الإبداع والتسويق لديهم ساهم في مضاعفة مبيعات علامتنا التجارية بنسبة كبيرة." }
            ]
        },
        en: {
            title: "Client Testimonials",
            subtitle: "What our clients say about working with us and trusting our services.",
            reviews: [
                { name: "Ahmed Khaled", role: "E-commerce Owner", comment: "Exceptional service and high professionalism in delivering the website ahead of schedule." },
                { name: "Sarah Mahmoud", role: "Marketing Manager", comment: "Their creative and marketing team significantly helped double our brand's sales." }
            ]
        }
    };

    const content = testimonialsData[lang] || testimonialsData.ar;

    return (
        <section 
            id="testimonials" 
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className={`py-20 transition-colors duration-300 ${
                darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* العنوان والوصف */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className={`text-3xl md:text-4xl font-black mb-4 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                        {content.title}
                    </h2>
                    <p className={`text-sm sm:text-base ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        {content.subtitle}
                    </p>
                </div>

                {/* شبكة الكروت */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {content.reviews.map((rev, index) => (
                        <div 
                            key={index} 
                            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                                darkMode 
                                    ? 'bg-slate-900/80 border-slate-800 text-slate-100 shadow-lg shadow-black/20 hover:border-accent' 
                                    : 'bg-white border-slate-200 text-slate-900 shadow-md shadow-slate-200/50 hover:border-indigo-500'
                            }`}
                        >
                            <p className={`italic mb-6 leading-relaxed text-base sm:text-lg ${
                                darkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                                "{rev.comment}"
                            </p>
                            
                            <div className="flex flex-col gap-1 pt-4 border-t border-slate-800/10 dark:border-slate-800">
                                <h4 className="font-bold text-base sm:text-lg">{rev.name}</h4>
                                <span className={`text-xs sm:text-sm font-medium ${
                                    darkMode ? 'text-accent' : 'text-indigo-600'
                                }`}>
                                    {rev.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}