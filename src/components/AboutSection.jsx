import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutSection({ darkMode, lang }) {
    return (
        <section 
            id="about"
            className={`py-24 px-4 transition-colors duration-300 ${
                darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
            }`}
        >
            <div className="max-w-6xl mx-auto">
                
                {/* البطاقة الرئيسية بتصميم بارز وظل أنيق */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`p-8 sm:p-12 rounded-3xl border transition-colors duration-300 ${
                        darkMode 
                            ? 'bg-slate-900/60 border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                            : 'bg-white border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
                    }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* الجزء الأيمن (الصورة أو الماكيت الخاص بالمشروع) */}
                        <div className="lg:col-span-6">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className={`p-4 rounded-2xl border ${
                                    darkMode 
                                        ? 'bg-slate-950/80 border-slate-800 shadow-xl' 
                                        : 'bg-slate-100/70 border-slate-200 shadow-inner'
                                }`}
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden group">
                                    {/* صورة المعاينة (يمكنك استبدالها بصورة مشروعك) */}
                                    <img
                                        src="/hero-bg.mp4" /* أو أي صورة معاينة عندك */
                                        alt="Project Preview"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    {/* تدرج لوني جمالي فوق الصورة */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                                        <span className="bg-brand text-accent text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-md border border-accent/20">
                                            {lang === 'ar' ? 'نظرة عامة على المشروع' : 'Project Overview'}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* الجزء الأيسر (النصوص والأزرار) */}
                        <div className="lg:col-span-6 flex flex-col items-start text-start">
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-accent/10 text-accent border border-accent/20">
                                <Sparkles size={14} />
                                <span>{lang === 'ar' ? 'من نحن' : 'About Us'}</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 leading-tight">
                                {lang === 'ar'
                                    ? 'استكشف حلولنا الرقمية المبتكرة'
                                    : 'Explore Our Innovative Digital Solutions'}
                            </h2>

                            <p className={`text-base sm:text-lg mb-8 leading-relaxed ${
                                darkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                                {lang === 'ar'
                                    ? 'نقدم خدمات احترافية متكاملة في تصميم وتطوير الويب والحلول التقنية المتقدمة التي تساعد الشركات على النمو والازدهار. فريقنا يركز على تقديم أعلى معايير الجودة والابتكار لكل عميل.'
                                    : 'We provide comprehensive professional services in web design, development, and advanced technical solutions that help businesses grow and thrive. Our team focuses on delivering the highest standards of quality and innovation for every client.'}
                            </p>

                            {/* الأزرار */}
                            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                                <a
                                    href="#contact"
                                    className="bg-brand hover:opacity-90 text-white font-bold px-7 py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-brand/20 hover:scale-105 duration-300"
                                >
                                    <span>{lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                                    <ArrowRight size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                                </a>

                                <a
                                    href="#portfolio"
                                    className={`font-semibold px-7 py-3.5 rounded-xl transition border hover:scale-105 duration-300 ${
                                        darkMode 
                                            ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-200' 
                                            : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm'
                                    }`}
                                >
                                    {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                                </a>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}