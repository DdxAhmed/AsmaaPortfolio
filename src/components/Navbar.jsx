import { useState, useEffect } from 'react';
import { useLang } from '../App';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('navHome'), href: '#home' },
    { label: t('navAbout'), href: '#why-asmaa' },
    { label: t('navSkills'), href: '#services' },
    { label: t('navContact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Reading Progress Bar */}
      <div className="w-full h-1 bg-white/[0.05]">
        <div
          className="h-full bg-gradient-to-r from-electric via-accentPurple to-highlightCyan transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-darkBg/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl sm:text-2xl font-extrabold tracking-tight text-textPrimary hover:text-electric transition-colors">
            {t('navLogo')}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-textSecondary hover:text-textPrimary transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Language Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full border border-highlightCyan/30 text-highlightCyan bg-highlightCyan/5 hover:bg-highlightCyan/15 hover:border-highlightCyan transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('langToggle')}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-textPrimary hover:text-electric transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-[84px] inset-x-0 bg-darkBg/95 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-bold text-textSecondary hover:text-textPrimary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
