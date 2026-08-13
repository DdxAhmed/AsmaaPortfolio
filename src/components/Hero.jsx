import { motion } from 'framer-motion';
import { useLang } from '../App';
import ChatBubbles from './ChatBubbles';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 bg-dot-grid overflow-hidden">
      {/* Studio Lighting: Top Spotlight Beam Cone */}
      <div className="hero-spotlight" />

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accentPurple/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-right rtl:text-right ltr:text-left"
          >
            {/* Status Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-electric/10 border border-electric/25 mb-6">
              <span className="live-pulse-dot" />
              <span className="text-xs font-bold text-highlightCyan tracking-wide">
                {t('heroBadge')} • {t('heroAvailable')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.2] tracking-tight text-textPrimary mb-6 whitespace-pre-line">
              {t('heroHeadline')}
            </h1>

            <p className="text-base sm:text-lg text-textSecondary leading-relaxed mb-8 max-w-xl">
              {t('heroSubheadline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-electric hover:bg-blue-600 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-electric/30 hover:shadow-electric/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>{t('heroCtaPrimary')}</span>
              </a>

              <a
                href="#timeline"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.12] hover:border-electric/40 text-textPrimary font-semibold text-sm sm:text-base rounded-full hover:bg-white/[0.08] transition-all duration-300"
              >
                <span>{t('heroCtaSecondary')}</span>
              </a>
            </div>
          </motion.div>

          {/* Warm Human Visual Column: Avatar with 12s Rotating Ring Glow + Animated Chat Bubbles */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Avatar Frame with 12s Rotating Glow Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center"
            >
              {/* Outer 12s Rotating Light Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-highlightCyan/40 animate-spin-slow p-2" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-electric/30 to-accentPurple/30 blur-xl opacity-70" />

              {/* Avatar Container */}
              {/* TODO: Place Asmaa's real photo here -> <img src="/path-to-photo.jpg" alt="Asmaa Shaheen" className="w-full h-full object-cover rounded-full" /> */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-slate-900 via-navyCard to-slate-800 border-2 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden group">
                
                {/* Stylized Artistic Avatar Placeholder */}
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-electric to-accentPurple flex items-center justify-center text-2xl font-black text-white shadow-lg mb-2">
                    AS
                  </div>
                  <span className="text-xs font-bold text-textPrimary">أسماء شاهين</span>
                  <span className="text-[10px] text-highlightCyan">Moderator & CM</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Looping Social Media Chat Bubbles */}
            <ChatBubbles />

          </div>

        </div>
      </div>
    </section>
  );
}
