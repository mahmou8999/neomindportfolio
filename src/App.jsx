import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HorizontalPortfolio from './components/HorizontalPortfolio';
import DualRowPortfolio from './components/DualRowPortfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('ar');
  const isServicesPage = window.location.pathname === '/services';
  const isPortfolioPage = window.location.pathname === '/portfolio';

  return (
    <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
      {isServicesPage ? (
        <main className="pt-20">
          <Services darkMode={darkMode} lang={lang} />
        </main>
      ) : isPortfolioPage ? (
        <main className="pt-20">
          <Portfolio darkMode={darkMode} lang={lang} />
        </main>
      ) : (
        <>
          <Hero darkMode={darkMode} lang={lang} />
          <Marquee darkMode={darkMode} lang={lang} />
          <HorizontalPortfolio darkMode={darkMode} lang={lang} />
          <DualRowPortfolio darkMode={darkMode} lang={lang} />

          <Stats darkMode={darkMode} lang={lang} />
          <Testimonials darkMode={darkMode} lang={lang} />
          <Contact darkMode={darkMode} lang={lang} />
        </>
      )}
      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}