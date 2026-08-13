import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../App';
import { MessageSquare, Mail, ShieldAlert, Flame, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

function DashboardMockup() {
  const { t } = useLang();

  // Auto-updating stats every 4s to simulate ongoing live moderation!
  const [stats, setStats] = useState({
    comments: 18,
    messages: 7,
    reports: 3,
    engagement: 156
  });

  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerMessages = [
    '+3 new comments reviewed in #general',
    'Spam comment filtered & account blocked',
    'Customer query answered in Inbox DM',
    'Community guidelines verified for new post'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        comments: prev.comments + Math.floor(Math.random() * 2) + 1,
        engagement: prev.engagement + Math.floor(Math.random() * 3) + 1
      }));
      setTickerIndex(prev => (prev + 1) % tickerMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [tickerMessages.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full"
    >
      <div className="glass-card rounded-3xl p-5 sm:p-6 glow-border relative overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="live-pulse-dot" />
            <div>
              <h4 className="text-xs font-extrabold text-textPrimary uppercase tracking-wider">
                {t('dashTitle')}
              </h4>
              <p className="text-[11px] text-textSecondary">{t('dashSubtitle')}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-brandSuccess/70" />
          </div>
        </div>

        {/* 4 Stat Box Cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-electric/30 transition-all">
            <div className="flex items-center gap-2 text-electric mb-1">
              <MessageSquare className="w-4 h-4" />
              <span className="text-[11px] text-textSecondary">{t('dashStatComments')}</span>
            </div>
            <div className="text-2xl font-extrabold text-textPrimary font-mono">
              +{stats.comments}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-accentPurple/30 transition-all">
            <div className="flex items-center gap-2 text-accentPurple mb-1">
              <Mail className="w-4 h-4" />
              <span className="text-[11px] text-textSecondary">{t('dashStatMessages')}</span>
            </div>
            <div className="text-2xl font-extrabold text-textPrimary font-mono">
              +{stats.messages}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brandWarning/30 transition-all">
            <div className="flex items-center gap-2 text-brandWarning mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-[11px] text-textSecondary">{t('dashStatReports')}</span>
            </div>
            <div className="text-2xl font-extrabold text-textPrimary font-mono">
              +{stats.reports}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-highlightCyan/30 transition-all">
            <div className="flex items-center gap-2 text-highlightCyan mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-[11px] text-textSecondary">{t('dashStatEngagement')}</span>
            </div>
            <div className="text-2xl font-extrabold text-textPrimary font-mono">
              {stats.engagement}
            </div>
          </div>
        </div>

        {/* Action Pills Row */}
        <div className="p-3.5 rounded-2xl bg-darkBg/80 border border-white/[0.06] mb-4">
          <span className="text-[10px] font-bold text-textSecondary uppercase tracking-wider block mb-2">
            {t('dashActionsHeader')}
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brandSuccess/15 text-brandSuccess border border-brandSuccess/25 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {t('dashActionReplied')} 12
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brandWarning/15 text-brandWarning border border-brandWarning/25 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t('dashActionDeleted')} 2
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-electric/15 text-electric border border-electric/25 text-xs font-bold">
              <Send className="w-3.5 h-3.5" />
              {t('dashActionPrivate')} 8
            </span>
          </div>
        </div>

        {/* Dynamic Auto-Typing Live Feed */}
        <div className="p-3 rounded-xl bg-electric/5 border border-electric/20 text-xs font-mono text-highlightCyan flex items-center gap-2">
          <span className="live-pulse-dot shrink-0" />
          <span className="truncate">{tickerMessages[tickerIndex]}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 bg-dot-grid overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accentPurple/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Badge, Subtitle & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-right rtl:text-right ltr:text-left"
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

          {/* Right Column: Live Moderation Dashboard Workspace Visual */}
          <div className="lg:col-span-5">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
