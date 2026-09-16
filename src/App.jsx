import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HorizontalPortfolio from './components/HorizontalPortfolio';
import DualRowPortfolio from './components/DualRowPortfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
        
        <Routes>
          <Route path="/services" element={<main className="pt-20"><Services darkMode={darkMode} lang={lang} /></main>} />
          <Route path="/portfolio" element={<main className="pt-20"><Portfolio darkMode={darkMode} lang={lang} /></main>} />
          <Route path="/" element={
            <main>
              <Hero darkMode={darkMode} lang={lang} />
              <Marquee darkMode={darkMode} lang={lang} />
              <HorizontalPortfolio darkMode={darkMode} lang={lang} />
              <DualRowPortfolio darkMode={darkMode} lang={lang} />
              <Stats darkMode={darkMode} lang={lang} />
              <Contact darkMode={darkMode} lang={lang} />
            </main>
          } />
        </Routes>

        <Footer darkMode={darkMode} lang={lang} />
      </div>
    </Router>
  );
}