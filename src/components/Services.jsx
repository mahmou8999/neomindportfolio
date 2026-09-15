import React from 'react';
import { Code, Smartphone, TrendingUp, Palette, Server, FileText } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-indigo-400" />,
            title: "تطوير الويب",
            desc: "مواقع وتطبيقات ويب سريعة، عصرية، ومتجاوبة تماماً مع جميع الشاشات."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
            title: "تطبيقات الموبايل",
            desc: "تطبيقات آيفون وأندرويد بأداء عالي وتجربة استخدام استثنائية وسلسة."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
            title: "التسويق الرقمي",
            desc: "خطط نمو مدروسة وحملات إعلانية ناجحة تضمن وصولك لجمهورك المستهدف بدقة."
        },
        {
            icon: <Palette className="w-8 h-8 text-indigo-400" />,
            title: "التصميم الجرافيكي",
            desc: "هويات بصرية متكاملة وتصميمات إبداعية تشد الانتباه وتعزز قيمة علامتك."
        },
        {
            icon: <Server className="w-8 h-8 text-indigo-400" />,
            title: "خدمات الاستضافة",
            desc: "سيرفرات سريعة، آمنة ومستقرة بنسبة 99.9% لضمان عمل مشروعك بلا توقف."
        },
        {
            icon: <FileText className="w-8 h-8 text-indigo-400" />,
            title: "صناعة المحتوى",
            desc: "محتوى احترافي ومبتكر يخاطب عملاءك ويبني ثقة حقيقية مع جمهورك."
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا الاحترافية</h2>
                    <p className="text-slate-400">كل ما تحتاجه لنجاح مشروعك الرقمي تحت سقف واحد وبأعلى معايير الجودة.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition duration-300 group">
                            <div className="bg-indigo-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}