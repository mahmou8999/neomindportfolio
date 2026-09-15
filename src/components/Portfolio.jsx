import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio({ darkMode, lang }) {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            title: lang === 'ar' ? "منصة حواء سيكريت للتجارة الإلكترونية" : "Hawa Secret E-Commerce Platform",
            category: "web",
            desc: lang === 'ar' ? "متجر متكامل لمستحضرات التجميل بـ React و Laravel." : "Full-stack cosmetics store built with React & Laravel.",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-web-developer-working-on-code-43093-large.mp4"
        },
        {
            title: lang === 'ar' ? "تطبيق يلا سينا للسياحة والرحلات" : "Yalla Sina Tourism App",
            category: "mobile",
            desc: lang === 'ar' ? "تطبيق موبايل لحجز الرحلات واستكشاف المعالم السياحية." : "Mobile application for bookings and tourism discovery.",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-41589-large.mp4"
        },
        {
            title: lang === 'ar' ? "لوحة تحكم إدارية لشركة عقارية" : "Real Estate Admin Dashboard",
            category: "web",
            desc: lang === 'ar' ? "لوحة تحكم مرتبطة بـ ASP.NET Core API و SQL Server." : "Admin dashboard connected to ASP.NET Core & SQL Server.",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-financial-graphs-31910-large.mp4"
        },
        {
            title: lang === 'ar' ? "هوية بصرية متكاملة لعرض العطور" : "Perfume Brand Visual Identity",
            category: "design",
            desc: lang === 'ar' ? "تصميم شعار ومطبوعات وهوية رقمية متكاملة." : "Logo design, print materials, and complete digital branding.",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-creative-team-working-in-an-office-42792-large.mp4"
        },
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className={`py-20 border-t ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{lang === 'ar' ? "معرض أعمالنا المتحرك" : "Interactive Portfolio"}</h2>
                    <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                        {lang === 'ar' ? "مرر الماوس فوق المشاريع لمشاهدة معاينة حية بالفيديو." : "Hover over projects to watch live video previews."}
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {['all', 'web', 'mobile', 'design'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full font-medium transition capitalize ${filter === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25' : darkMode ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            {cat === 'all' ? (lang === 'ar' ? 'الكل' : 'All') : cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid with Video & Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`border rounded-2xl overflow-hidden group transition ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 hover:border-indigo-500/50 shadow-xl'}`}
                        >
                            {/* Video Preview Container */}
                            <div className="h-56 bg-slate-950 relative overflow-hidden">
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
                                <span className="inline-block text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full font-medium">
                                    {lang === 'ar' ? 'مشروع مميز' : 'Featured Project'}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}