import { useState, useEffect } from 'react';
import { useLang } from '../App';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Preloader({ onFinish }) {
  const { t } = useLang();
  const [step, setStep] = useState(1);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const t1 = setTimeout(() => setStep(2), 500);
    const t2 = setTimeout(() => setStep(3), 1000);
    const t3 = setTimeout(() => setExiting(true), 1400);
    const t4 = setTimeout(() => onFinish(), 1750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050810] flex flex-col items-center justify-center transition-all duration-500 ${
        exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Soft Center Radial Spotlight */}
      <div className="absolute w-96 h-96 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-md">
        
        {/* Badge Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-bold font-mono text-highlightCyan mb-8 tracking-widest uppercase">
          <span className="live-pulse-dot" />
          <span>{t('preloadBadge')}</span>
        </div>

        {/* Dynamic Animated Icon / Wave Node */}
        <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/25 flex items-center justify-center text-highlightCyan shadow-xl shadow-electric/10 mb-6 transition-all duration-300">
          {step === 3 ? (
            <CheckCircle2 className="w-8 h-8 text-brandSuccess animate-bounce" />
          ) : (
            <MessageSquare className="w-8 h-8 text-highlightCyan animate-pulse" />
          )}
        </div>

        {/* Pulsing Dots Stream */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-electric scale-125' : 'bg-white/20'}`} />
          <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-accentPurple scale-125' : 'bg-white/20'}`} />
          <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-highlightCyan scale-125' : 'bg-white/20'}`} />
        </div>

        {/* Tagline Reveal */}
        <h3 className="text-base sm:text-lg font-bold text-textPrimary leading-snug mb-8">
          {t('preloadTagline')}
        </h3>

        {/* Progress Step Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs font-bold text-textSecondary">
          <span className="text-highlightCyan">0{step}</span>
          <span className="w-12 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
            <span
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-electric to-highlightCyan transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </span>
          <span>03</span>
        </div>

      </div>
    </div>
  );
}
