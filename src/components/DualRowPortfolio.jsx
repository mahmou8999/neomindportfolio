import React, { useEffect, useRef, useState } from 'react';
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useTransform,
} from 'framer-motion';
import data from '../db.json';

export default function AutoScrollPortfolio({ darkMode, lang }) {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    const [row1Width, setRow1Width] = useState(0);
    const [row2Width, setRow2Width] = useState(0);

    const baseX1 = useMotionValue(0);
    const baseX2 = useMotionValue(0);

    const items = data.logos;

    const half = Math.ceil(items.length / 2);

    const originalRow1 = items.slice(0, half);
    const originalRow2 = items.slice(half);

    const row1 = [...originalRow1, ...originalRow1];
    const row2 = [...originalRow2, ...originalRow2];

    useEffect(() => {
        const calculateWidths = () => {
            if (row1Ref.current) {
                const styles = window.getComputedStyle(row1Ref.current);
                const gap = parseFloat(styles.columnGap || styles.gap || 0);

                setRow1Width(
                    (row1Ref.current.scrollWidth + gap) / 2
                );
            }

            if (row2Ref.current) {
                const styles = window.getComputedStyle(row2Ref.current);
                const gap = parseFloat(styles.columnGap || styles.gap || 0);

                setRow2Width(
                    (row2Ref.current.scrollWidth + gap) / 2
                );
            }
        };

        calculateWidths();

        const resizeObserver = new ResizeObserver(() => {
            calculateWidths();
        });

        if (row1Ref.current) {
            resizeObserver.observe(row1Ref.current);
        }

        if (row2Ref.current) {
            resizeObserver.observe(row2Ref.current);
        }

        window.addEventListener('resize', calculateWidths);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', calculateWidths);
        };
    }, [items.length, lang]);

    const x1 = useTransform(baseX1, (value) => {
        if (!row1Width) {
            return '0px';
        }

        const position =
            ((value % row1Width) + row1Width) % row1Width;

        return `${-position}px`;
    });

    const x2 = useTransform(baseX2, (value) => {
        if (!row2Width) {
            return '0px';
        }

        const position =
            ((value % row2Width) + row2Width) % row2Width;

        return `${-position}px`;
    });

    useAnimationFrame((_, delta) => {
        const moveBy = 0.04 * delta;

        baseX1.set(baseX1.get() + moveBy);
        baseX2.set(baseX2.get() - moveBy);
    });

    const renderCard = (project, idx) => (
        <div
            key={`${project.id}-${idx}`}
            dir="ltr"
            className="relative shrink-0 w-[45vw] sm:w-[32vw] md:w-[22vw] flex flex-col items-center gap-4 group"
        >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-slate-200/80 dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition duration-700">
                <img
                    src={project.imageUrl || project.videoUrl}
                    alt={lang === 'ar' ? project.titleAr : project.titleEn}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition duration-700"
                />
            </div>

            <div
                className={`flex flex-col items-center ${
                    lang === 'ar' ? 'text-right' : 'text-left'
                }`}
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
                <h3 className="text-base sm:text-lg font-bold tracking-tight">
                    {lang === 'ar'
                        ? project.titleAr
                        : project.titleEn}
                </h3>
            </div>
        </div>
    );

    return (
        <section
            id="dual-portfolio"
            dir="ltr"
            className={`relative py-20 overflow-hidden flex flex-col justify-center gap-10 ${
                darkMode
                    ? 'bg-slate-950 text-slate-100'
                    : 'bg-white text-slate-900'
            }`}
        >
            <div className="w-full overflow-hidden">
                <motion.div
                    ref={row1Ref}
                    style={{ x: x1 }}
                    dir="ltr"
                    className="flex flex-row gap-8 w-max shrink-0 will-change-transform items-center"
                >
                    {row1.map((project, idx) =>
                        renderCard(project, idx)
                    )}
                </motion.div>
            </div>

            <div className="w-full overflow-hidden">
                <motion.div
                    ref={row2Ref}
                    style={{ x: x2 }}
                    dir="ltr"
                    className="flex flex-row gap-8 w-max shrink-0 will-change-transform items-center"
                >
                    {row2.map((project, idx) =>
                        renderCard(project, idx)
                    )}
                </motion.div>
            </div>
        </section>
    );
}