import { useState, useEffect, createContext, useContext } from 'react';
import translations from './i18n';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyAsmaa from './components/WhyAsmaa';
import Services from './components/Services';
import SportsAndTech from './components/SportsAndTech';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Language Context
const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export default function App() {
  const [lang, setLang] = useState('ar');
  const [loading, setLoading] = useState(true);

  const t = (key) => translations[lang]?.[key] || key;
  const isRTL = lang === 'ar';

  // Set HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  const handleLoaded = () => setLoading(false);

  return (
    <LangContext.Provider value={{ lang, isRTL, t, toggleLang }}>
      {loading && <Preloader onFinish={handleLoaded} />}

      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700 ${isRTL ? 'font-ar' : 'font-en'}`}>
        <Navbar />
        <main>
          <Hero />
          <WhyAsmaa />
          <Services />
          <SportsAndTech />
          <WhyWorkWithMe />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangContext.Provider>
  );
}
