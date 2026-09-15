import React from 'react';
import { ArrowRight, Code, Sparkles, Layers, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ darkMode, lang }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden">

            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="/hero-bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                />
                <div className={`absolute inset-0 ${darkMode ? 'bg-slate-950/80' : 'bg-white/80'} transition-colors duration-300`}></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-1"
                >
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight"
                >
                    {lang === 'ar' ? 'نحول أفكارك الرقمية إلى ' : 'Turning your digital ideas into '}
<span className={`${darkMode ? 'text-accent' : 'text-slate-900'} drop-shadow-sm`}>
    {lang === 'ar' ? 'واقع مذهل' : 'Amazing Reality'}
</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                >
                    {lang === 'ar'
                        ? 'نبتكر حلولاً متكاملة في تطوير الويب وتطبيقات الموبايل، التسويق الرقمي، التصميم الإبداعي، الاستضافة السحابية، وصناعة المحتوى.'
                        : 'We innovate comprehensive solutions in web & mobile development, digital marketing, creative design, cloud hosting, and content creation.'}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                >
                    <a
                        href="#contact"
                        className="bg-brand hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-xl shadow-brand/30 hover:scale-105 duration-300"
                    >
                        {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                        <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
                    </a>
                    <a
                        href="#portfolio"
                        className={`font-semibold px-8 py-4 rounded-xl transition border hover:scale-105 duration-300 ${darkMode ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-200' : 'bg-white/80 hover:bg-slate-100 border-slate-300 text-slate-800'}`}
                    >
                        {lang === 'ar' ? 'استعرض أعمالنا' : 'Explore Portfolio'}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    {[
                        { title: lang === 'ar' ? 'تطوير الويب والموبايل' : 'Web & Mobile', icon: <Code className="text-accent" size={22} /> },
                        { title: lang === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing', icon: <Sparkles className="text-accent" size={22} /> },
                        { title: lang === 'ar' ? 'التصميم والهوية' : 'UI/UX Design', icon: <Layers className="text-accent" size={22} /> },
                        { title: lang === 'ar' ? 'الاستضافة والمحتوى' : 'Hosting & Content', icon: <Server className="text-accent" size={22} /> }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`p-4 rounded-xl border backdrop-blur-md flex flex-col items-center text-center gap-2 transition duration-300 hover:border-accent ${darkMode
                                    ? 'bg-brand/40 border-slate-800 text-slate-100 shadow-lg shadow-brand/20'
                                    : 'bg-brand text-white border-brand/50 shadow-xl'
                                }`}
                        >
                            <div className="p-2 rounded-lg bg-accent/10">{item.icon}</div>
                            <span className="text-xs sm:text-sm font-semibold">{item.title}</span>
                        </div>
                    ))}
                </motion.div>

            </div>

        </section>
    );
}