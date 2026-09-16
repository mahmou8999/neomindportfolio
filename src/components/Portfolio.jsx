import React, { useState } from 'react';
import { motion } from 'framer-motion';
import data from '../db.json';

export default function Portfolio({ darkMode, lang }) {
    const [filter, setFilter] = useState('all');

    const allProjects = [
        ...(data.projects || []).map(item => ({ ...item, type: 'web' })),
        ...(data.logos || []).map(item => ({ ...item, type: 'branding' })),
        ...(data.designs || []).map(item => ({ ...item, type: 'design' }))
    ];

    const categories = [
        { id: 'all', nameAr: 'الكل', nameEn: 'All', count: allProjects.length },
        { id: 'web', nameAr: 'ويب وابلكيشن', nameEn: 'Web & App', count: (data.projects || []).length },
        { id: 'branding', nameAr: 'علامات تجارية', nameEn: 'Branding', count: (data.logos || []).length },
        { id: 'design', nameAr: 'ديزاين وسوشيال ميديا', nameEn: 'Design & Social', count: (data.designs || []).length },
    ];

    const filteredItems = filter === 'all'
        ? allProjects
        : allProjects.filter(item => {
            if (filter === 'design') {
                return item.type === 'design';
            }
            return item.type === filter;
        });

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            id="portfolio"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section with Smooth Motion */}
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        {lang === 'ar' ? 'أعمال تحكي عن نتائج حقيقية' : 'Works That Speak of Real Results'}
                    </h2>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {lang === 'ar'
                            ? 'هنا تقدر تشوف جانب من شغلنا مع عملاء من مجالات مختلفة. كل مشروع قصة نجاح تحققت بالتعاون مع فريق العمل.'
                            : 'Explore our work across various industries. Every project is a success story.'}
                    </p>
                </motion.div>

                {/* Stats Counters Grid with Staggered Scale Animation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { count: 50, label: lang === 'ar' ? 'مشاريع وويب' : 'Web & Apps' },
                        { count: 60, label: lang === 'ar' ? 'علامات تجارية' : 'Branding' },
                        { count: 250, label: lang === 'ar' ? 'تصاميم وسوشيال' : 'Designs & Social' },
                        { count: 300, label: lang === 'ar' ? 'إجمالي الأعمال' : 'Total Works' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`p-6 rounded-2xl border text-center transition-all ${darkMode
                                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 shadow-lg shadow-black/20'
                                    : 'bg-white border-gray-200 shadow-sm hover:border-gray-300'
                                }`}
                        >
                            <div className={`text-2xl sm:text-3xl font-black mb-1 ${darkMode ? 'text-white' : 'text-brand'}`}>
                                {stat.count}
                            </div>
                            <div className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sticky Full-Width Filter Bar */}
            <div className={`sticky top-20 z-40 py-4 mb-12 backdrop-blur-md bg-opacity-90 transition-colors ${darkMode
                    ? 'bg-slate-950/90 border-slate-800 shadow-black/50'
                    : 'bg-white/90 border-gray-200 shadow-gray-200/50 shadow-md'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-2 sm:gap-3 flex-wrap">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${filter === cat.id
                                    ? darkMode
                                        ? 'bg-white text-black shadow-lg shadow-white/20'
                                        : 'bg-brand text-white shadow-lg shadow-brand/30'
                                    : darkMode
                                        ? 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
                                        : 'bg-gray-100 text-slate-600 border border-gray-200 hover:bg-gray-200'
                                }`}
                        >
                            <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${filter === cat.id
                                    ? darkMode ? 'bg-black/10 text-black' : 'bg-white/20 text-white'
                                    : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-200 text-slate-500'
                                }`}>
                                {cat.count}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Items Grid with Micro-interactions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.04 }}
                            whileHover={{ y: -6 }}
                            className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${darkMode
                                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl shadow-black/30'
                                    : 'bg-white border-gray-200 shadow-xl hover:border-gray-300'
                                }`}
                        >
                            {/* Image Container */}
                            <div className="h-64 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                                <img
                                    src={item.imageUrl || item.videoUrl}
                                    alt={lang === 'ar' ? item.titleAr : item.titleEn}
                                    loading="lazy"
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md"
                                >
                                    {item.type === 'web' ? (lang === 'ar' ? 'ويب وأبلكيشن' : 'Web & App') :
                                        item.type === 'branding' ? (lang === 'ar' ? 'علامة تجارية' : 'Branding') :
                                            (lang === 'ar' ? 'ديزاين وسوشيال' : 'Design & Social')}
                                </motion.div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors ${darkMode ? 'group-hover:text-white' : 'group-hover:text-brand'}`}>
                                        {lang === 'ar' ? item.titleAr : item.titleEn}
                                    </h3>
                                    <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {lang === 'ar' ? item.descAr : item.descEn}
                                    </p>
                                </div>

                                <div className={`pt-4 border-t transition-colors ${darkMode ? 'border-slate-800' : 'border-gray-200'} flex items-center justify-between`}>
                                    <span className={`text-xs font-bold transition-transform inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-1 ${darkMode ? 'text-white' : 'text-brand'}`}>
                                        {lang === 'ar' ? 'عرض التفاصيل ←' : 'View Details →'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}