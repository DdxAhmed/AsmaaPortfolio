import { useState, useEffect, createContext, useContext } from 'react';
import { translations } from './i18n/translations';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhyAsmaa from './components/WhyAsmaa';
import Services from './components/Services';
import Timeline from './components/Timeline';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import AboutSportsTech from './components/AboutSportsTech';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Language Context definition
const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export default function App() {
  const [lang, setLang] = useState('ar');
  const [loading, setLoading] = useState(true);

  const isRTL = lang === 'ar';

  const t = (key) => {
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  // Switch document direction & lang attributes
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <LangContext.Provider value={{ lang, isRTL, t, toggleLang }}>
      {/* 1. Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* 2. Mouse Cursor Glow Spotlight */}
      <CursorGlow />

      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700 ${isRTL ? 'font-ar' : 'font-enBody'}`}>
        {/* 3. Sticky Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: Marquee Separator */}
          <Marquee />

          {/* Section 3: Why Asmaa? */}
          <WhyAsmaa />

          {/* Section 4: Services ("أقدر أساعدك في إيه؟") */}
          <Services />

          {/* Section 5: "Day in the Life of Managing Your Page" Timeline */}
          <Timeline />

          {/* Section 6: Why Work With Me */}
          <WhyWorkWithMe />

          {/* Section 7: About - Sports + Tech Personality */}
          <AboutSportsTech />

          {/* Section 8: Contact & Social CTA */}
          <Contact />
        </main>

        {/* 4. Footer */}
        <Footer />

        {/* 5. Fixed Floating WhatsApp Button */}
        <WhatsAppFloat />
      </div>
    </LangContext.Provider>
  );
}
