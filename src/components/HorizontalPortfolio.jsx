import React, { useEffect, useRef, useState } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring
} from 'framer-motion';
import data from '../db.json';

export default function HorizontalPortfolio({ darkMode, lang }) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(0);
    const items = data.projects;
    useEffect(() => {
        const calculateDistance = () => {
            if (!trackRef.current || !containerRef.current) return;

            const trackWidth = trackRef.current.scrollWidth;
            const containerWidth = containerRef.current.offsetWidth;

            setScrollDistance(Math.max(0, trackWidth - containerWidth));
        };

        calculateDistance();
        window.addEventListener('resize', calculateDistance);

        return () => {
            window.removeEventListener('resize', calculateDistance);
        };
    }, [items]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        mass: 0.5
    });

    const x = useTransform(
        smoothProgress,
        [0, 1],
        lang === 'ar'
            ? [0, scrollDistance]
            : [0, -scrollDistance]
    );

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className={`relative h-[400vh] ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
                }`}
        >
            <div className="sticky top-20 w-full flex items-center overflow-hidden">
                <div
                    ref={containerRef}
                    className="w-full h-full flex items-center overflow-hidden"
                >
                    <motion.div
                        ref={trackRef}
                        style={{ x }}
                        dir="ltr"
                        className={`flex ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'
                            } gap-0 px-0 w-max shrink-0 will-change-transform items-center h-full`}
                    >
                        {items.map((project) => (
                            <div
                                key={project.id}
                                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                                className="relative shrink-0 w-[100vw] sm:w-[50vw] md:w-[33.3333vw] h-[calc(100vh-5rem)] flex flex-col justify-between p-8 sm:p-12 overflow-hidden bg-slate-950 group border-r border-slate-900/50"
                            >
                                <img
                                    src={project.imageUrl || project.videoUrl}
                                    alt={lang === 'ar' ? project.titleAr : project.titleEn}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-90 group-hover:brightness-75"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30"></div>
                                <div className="relative z-10 flex justify-start w-full">
                                    <div className="bg-slate-900/80 backdrop-blur-md text-indigo-400 border border-indigo-500/30 px-3 py-1 text-xs font-bold rounded-lg">
                                        {lang === 'ar' ? project.categoryAr : project.categoryEn}
                                    </div>
                                </div>

                                <div className="relative z-10 my-auto flex justify-center items-center">
                                    <a
                                        href="#contact"
                                        className={`${darkMode ? 'bg-white text-black' : 'bg-brand text-white'} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-bold px-6 py-3 rounded-xl flex items-center gap-2`}
                                    >
                                        <span>{lang === 'ar' ? 'اعرف التفاصيل' : 'View Details'}</span>
                                        <span className={lang === 'ar' ? 'rotate-180' : ''}>→</span>
                                    </a>
                                </div>

                                <div className="relative z-10 flex flex-col items-center text-center gap-2 pt-4 border-t border-slate-800/80">
                                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                                        {lang === 'ar' ? project.titleAr : project.titleEn}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 leading-relaxed">
                                        {lang === 'ar' ? project.descAr : project.descEn}
                                    </p>


                                </div>



                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}