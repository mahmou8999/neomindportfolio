import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, lang, setLang }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isHomePage = window.location.pathname === '/';
    const homeLink = (section) => isHomePage ? `#${section}` : `/#${section}`;

    const t = {
        ar: {
            home: "الرئيسية",
            services: "خدماتنا",
            portfolio: "أعمالنا",
            contact: "تواصل معنا",
            start: "ابدأ مشروعك",
            menu: "القائمة"
        },
        en: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact",
            start: "Start Project",
            menu: "Menu"
        }
    };

    // مراقبة الـ Scroll لتغيير حالة التاف بار
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? darkMode
                        ? 'bg-slate-950/75 backdrop-blur-md shadow-lg shadow-black/10'
                        : 'bg-white/75 backdrop-blur-md shadow-lg shadow-slate-200/50'
                    : darkMode
                        ? 'bg-slate-950 text-slate-100'
                        : 'bg-white text-slate-900'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                    <a href="/" className="relative group" aria-label="الصفحة الرئيسية">
                        <img
                            src={darkMode ? "/4.png" : "/3.png"}
                            alt="NEOMIND Logo"
                            className="h-14 rounded-lg object-cover group-hover:scale-105 transition duration-300"
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="hover:text-accent transition">
                            {t[lang].home}
                        </a>

                        <a href="/services" className="hover:text-accent transition">
                            {t[lang].services}
                        </a>

                        <a href="/portfolio" className="hover:text-accent transition">
                            {t[lang].portfolio}
                        </a>

                        <a href={homeLink('contact')} className="hover:text-accent transition">
                            {t[lang].contact}
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                            className={`p-2 rounded-xl border transition flex items-center gap-1.5 text-sm font-medium ${darkMode
                                ? 'border-slate-800 bg-slate-900 text-slate-300 hover:border-accent'
                                : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-accent'
                                }`}
                        >
                            <Globe size={16} className="text-accent" />
                            <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
                        </button>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2.5 rounded-xl border transition ${darkMode
                                ? 'border-slate-800 bg-slate-900 text-accent hover:bg-slate-800'
                                : 'border-slate-200 bg-slate-100 text-brand hover:bg-slate-200'
                                }`}
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <a
                            href={homeLink('contact')}
                            className="bg-brand text-white font-semibold hover:opacity-90 px-6 py-2.5 rounded-full transition shadow-lg shadow-accent/20"
                        >
                            {t[lang].start}
                        </a>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="p-2 text-accent"
                            aria-label="Open menu"
                        >
                            <Menu size={27} />
                        </button>
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                    className="fixed inset-0 z-[9999] md:hidden"
                >
                    <div
                        onClick={closeMenu}
                        className="absolute inset-0 bg-black/65"
                    />

                    <div
                        className={`
                            absolute top-0 bottom-0
                            w-[82%] max-w-[360px]
                            flex flex-col
                            shadow-[0_0_40px_rgba(0,0,0,0.35)]
                            ${lang === 'ar'
                                ? 'right-0'
                                : 'left-0'
                            }
                            ${darkMode
                                ? 'bg-slate-950 text-white'
                                : 'bg-white text-slate-900'
                            }
                        `}
                    >

                        <div
                            className={`h-20 shrink-0 px-5 flex items-center justify-between border-b ${darkMode
                                ? 'border-slate-800'
                                : 'border-slate-200'
                                }`}
                        >
                            <span className="text-xl font-bold text-accent">
                                {t[lang].menu}
                            </span>

                            <button
                                onClick={closeMenu}
                                className={`p-2.5 rounded-xl border ${darkMode
                                    ? 'bg-slate-900 border-slate-800'
                                    : 'bg-slate-50 border-slate-200'
                                    }`}
                            >
                                <X size={21} />
                            </button>
                        </div>

                        <div className="flex-1 px-5 py-6 overflow-y-auto">

                            <div className="flex flex-col">

                                <a
                                    href="/services"
                                    onClick={closeMenu}
                                    className={`py-4 text-lg font-medium border-b ${darkMode
                                        ? 'border-slate-800'
                                        : 'border-slate-200'
                                        } hover:text-accent transition`}
                                >
                                    {t[lang].services}
                                </a>

                                <a
                                    href="/portfolio"
                                    onClick={closeMenu}
                                    className={`py-4 text-lg font-medium border-b ${darkMode
                                        ? 'border-slate-800'
                                        : 'border-slate-200'
                                        } hover:text-accent transition`}
                                >
                                    {t[lang].portfolio}
                                </a>

                                <a
                                    href={homeLink('about')}
                                    onClick={closeMenu}
                                    className={`py-4 text-lg font-medium border-b ${darkMode
                                        ? 'border-slate-800'
                                        : 'border-slate-200'
                                        } hover:text-accent transition`}
                                >
                                    {t[lang].about}
                                </a>

                                <a
                                    href={homeLink('contact')}
                                    onClick={closeMenu}
                                    className={`py-4 text-lg font-medium border-b ${darkMode
                                        ? 'border-slate-800'
                                        : 'border-slate-200'
                                        } hover:text-accent transition`}
                                >
                                    {t[lang].contact}
                                </a>

                            </div>
                        </div>

                        <div
                            className={`shrink-0 p-5 border-t ${darkMode
                                ? 'border-slate-800'
                                : 'border-slate-200'
                                }`}
                        >

                            <div className="flex gap-3 mb-4">

                                <button
                                    onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                                    className={`flex-1 p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium ${darkMode
                                        ? 'bg-slate-900 border-slate-800 text-slate-200'
                                        : 'bg-slate-100 border-slate-200 text-slate-700'
                                        }`}
                                >
                                    <Globe size={18} className="text-accent" />
                                    <span>
                                        {lang === 'ar' ? 'English' : 'عربي'}
                                    </span>
                                </button>

                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className={`p-3 rounded-xl border ${darkMode
                                        ? 'bg-slate-900 border-slate-800 text-accent'
                                        : 'bg-slate-100 border-slate-200 text-brand'
                                        }`}
                                >
                                    {darkMode ? (
                                        <Sun size={20} />
                                    ) : (
                                        <Moon size={20} />
                                    )}
                                </button>

                            </div>

                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="block w-full text-center bg-brand text-accent font-semibold py-3.5 rounded-xl hover:opacity-90 transition"
                            >
                                {t[lang].start}
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}