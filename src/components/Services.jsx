import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Services({ darkMode, lang }) {
    const isAr = lang === 'ar';

    const servicesList = [
        {
            num: "01",
            titleAr: "تطوير الويب والتطبيقات",
            titleEn: "Web & App Development",
            descAr: "موقع بطيء أو قديم بيكلفك عملاء كل يوم. بنصميم ونطور مواقع وتطبيقات ويب مخصصة تبان احترافية، تحمل بسرعة، وتوجه الزوار للتصرف. سواء محتاج موقع جديد، متجر إلكتروني، أو تطبيق ويب — بنبنيه صح من الأساس وأهدافك التجارية في المركز.",
            descEn: "A slow website costs you clients daily. We design and develop custom web and mobile apps that load fast and drive action.",
            features: isAr ? [
                "تصميم UI/UX مخصص",
                "تطوير Mobile-First",
                "الأداء والسرعة العالية",
                "منصات التجارة الإلكترونية"
            ] : [
                "Custom UI/UX Design",
                "Mobile-First Development",
                "Performance & Speed",
                "E-Commerce Platforms"
            ],
            imageLight: "/web-lite.jpg",
            imageDark: "/web-dark.jfif"
        },
        {
            num: "02",
            titleAr: "العلامة التجارية",
            titleEn: "Branding",
            descAr: "معظم البراندات بتجوع متشابهة. بتاعتك مش هيبقى كده. بنتعمق في سوقك ومنافسيك وجمهورك قبل ما نصمم أي حاجة. اللي يطلع هو هوية بصرية مبنية تيميز، تدوم، وتكبر معاك — من اللوجو ونظام الألوان لصوت البراند والدليل البصري الكامل.",
            descEn: "Most brands look alike. Yours won't. We dive deep into your market before designing anything to build a lasting identity.",
            features: isAr ? [
                "بحث واستراتيجية العلامة التجارية",
                "تصميم اللوجو والرمز",
                "نظام هوية بصرية متكامل",
                "صوت البراند والرسائل"
            ] : [
                "Brand Strategy & Research",
                "Logo & Icon Design",
                "Complete Visual Identity",
                "Brand Voice & Messaging"
            ],
            imageLight: "/branding-lite.jfif",
            imageDark: "/branding-dark.jfif"
        },
        {
            num: "03",
            titleAr: "إدارة السوشيال ميديا",
            titleEn: "Social Media Management",
            descAr: "جمهورك بيسكرول كل يوم — السؤال هو هل بيوقف عندك؟ بنتوفر كل حاجة: خطط محتوى شهرية، إنتاج إبداعي، إدارة مجتمع، وحملات مدفوعة. كل بوست ليه هدف، كل حملة ليها غاية، وكل شهر بتاخد تقرير واضح بيوريك بالضبط إيه اللي شغال.",
            descEn: "Your audience scrolls every day—the question is do they stop at yours? We handle monthly content plans, creative production, and paid ads.",
            features: isAr ? [
                "استراتيجية محتوى شهرية",
                "تصميم إبداعي وكتابة محتوى",
                "حملات سوشيال مدفوعة",
                "إدارة المجتمع والتفاعل"
            ] : [
                "Monthly Content Strategy",
                "Creative Design & Copywriting",
                "Paid Social Campaigns",
                "Community Management"
            ],
            imageLight: "/social-media-lite.jfif",
            imageDark: "/social-media-dark.jfif"
        },
        {
            num: "04",
            titleAr: "الإنتاج الإعلامي",
            titleEn: "Media Production",
            descAr: "الصورة بتعبر عن ألف كلمة والفيديو بيحكي القصة كاملة. بنقدم خدمات إنتاج مرئي وفوتوغرافي احترافي يبرز تفاصيل مشروعك بأعلى جودة سينمائية تجذب الانتباه وتعكس مدى احترافية شركتك.",
            descEn: "Visuals tell the full story. We provide professional video and photography production to highlight your project details with cinematic quality.",
            features: isAr ? [
                "تصوير فوتوغرافي احترافي للمنتجات والخدمات",
                "إنتاج ومونتاج الفيديوهات والريلز",
                "فيديوهات موشن جرافيك وتوضيحية",
                "تغطية الفعاليات والمناسبات"
            ] : [
                "Professional Product & Service Photography",
                "Video Production & Editing (Reels)",
                "Motion Graphics & Explainer Videos",
                "Events Coverage"
            ],
            imageLight: "/media-lite.jfif",
            imageDark: "/media-dark.jfif"
        }
    ];

    return (
        <section
            id="services"
            dir={isAr ? 'rtl' : 'ltr'}
            className={`pt-15 pb-20 transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-15">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        {isAr ? 'حلول شاملة لتسريع نمو علامتك التجارية' : 'Comprehensive Solutions to Accelerate Your Brand'}
                    </h2>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {isAr
                            ? 'نقدم في NeoMind حزمة متكاملة من خدمات التكنولوجيا، والتصميم، والتسويق الرقمي — لتكون محط أنظار عملائك من أول نظرة وحتى إتمام الصفقة.'
                            : 'We offer an integrated package of technology, design, and digital marketing services.'}
                    </p>
                </div>

                {/* Services Detailed List */}
                <div className="space-y-24">
                    {servicesList.map((service, index) => {
                        const isEven = index % 2 !== 0;
                        const rowDirectionClass = isEven
                            ? (isAr ? 'lg:flex-row-reverse' : 'lg:flex-row')
                            : (isAr ? 'lg:flex-row' : 'lg:flex-row-reverse');

                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center gap-12 lg:gap-16 ${rowDirectionClass}`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className={`rounded-3xl overflow-hidden shadow-xl transition-colors ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-gray-200'
                                        }`}>
                                        <div className="rounded-2xl overflow-hidden relative group flex items-center justify-center">
                                            <img
                                                src={darkMode ? service.imageDark : service.imageLight}
                                                alt={isAr ? service.titleAr : service.titleEn}
                                                className="w-full h-auto max-h-[350px] object-cover rounded-2xl group-hover:scale-105 transition duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <span className={`font-mono font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-brand'}`}>
                                        {service.num}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">
                                        {isAr ? service.titleAr : service.titleEn}
                                    </h3>
                                    <p className={`text-sm sm:text-base mb-8 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {isAr ? service.descAr : service.descEn}
                                    </p>

                                    {/* Features List */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2.5">
                                                <CheckCircle2 size={18} className={`shrink-0 ${darkMode ? 'text-white' : 'text-brand'}`} />
                                                <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href="#contact"
                                            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center gap-2 ${darkMode
                                                    ? 'bg-white text-black hover:bg-slate-200 shadow-white/10'
                                                    : 'bg-brand text-white hover:opacity-90 shadow-brand/25'
                                                }`}
                                        >
                                            <span>{isAr ? 'ابدأ الآن' : 'Start Now'}</span>
                                        </a>

                                        <a
                                            href="#contact"
                                            className={`px-6 py-3 rounded-xl font-bold text-sm border transition-all flex items-center gap-2 group ${darkMode
                                                    ? 'border-slate-800 text-slate-300 hover:border-white'
                                                    : 'border-slate-300 text-slate-700 hover:border-brand'
                                                }`}
                                        >
                                            <span>{isAr ? 'اعرف أكثر' : 'Learn More'}</span>
                                            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}