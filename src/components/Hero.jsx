import { motion } from 'framer-motion';
import { useLang } from '../App';

// Moderation workspace visual mockup
function DashboardMockup() {
  const { t } = useLang();

  const feedItems = [
    { icon: '💬', label: t('dashComments'), count: 24, color: 'text-cyan-accent' },
    { icon: '✉️', label: t('dashMessages'), count: 8, color: 'text-blue-400' },
    { icon: '⚠️', label: t('dashReports'), count: 2, color: 'text-amber-400' },
    { icon: '🔥', label: t('dashActive'), count: 156, color: 'text-emerald-400' },
  ];

  const actions = [
    { label: t('dashApproved'), count: 18, color: 'bg-emerald-500/15 text-emerald-400' },
    { label: t('dashFlagged'), count: 3, color: 'bg-amber-500/15 text-amber-400' },
    { label: t('dashReplied'), count: 12, color: 'bg-blue-500/15 text-blue-400' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="bg-navy-900/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-2xl shadow-black/40 glow-border">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Moderation Panel
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {feedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 hover:bg-white/[0.06] hover:border-cyan-accent/20 transition-all duration-300 cursor-default"
            >
              <div className="text-lg mb-1">{item.icon}</div>
              <div className={`text-xl font-bold ${item.color}`}>{item.count}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Actions bar */}
        <div className="bg-navy-950/60 rounded-xl p-3 border border-white/[0.04]">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
            {t('dashActions')}
          </div>
          <div className="flex gap-2 flex-wrap">
            {actions.map((a, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.15 }}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md ${a.color}`}
              >
                <span>{a.label}</span>
                <span className="font-bold">{a.count}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-4 -left-4 rtl:-left-auto rtl:-right-4 bg-navy-800/90 backdrop-blur border border-cyan-accent/20 rounded-lg px-3 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
          <span className="text-slate-300 font-medium">+3 new comments</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { t, isRTL } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-grid overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-electric/10 border border-electric/25 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
              <span className="text-xs font-semibold text-cyan-accent tracking-wide">{t('heroRole')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] tracking-tight mb-5 whitespace-pre-line">
              {t('heroHeadline')}
            </h1>

            <p className="text-base text-slate-400 leading-relaxed mb-3 max-w-lg">
              <span className="text-white font-semibold">{t('heroName')}</span> — {t('heroRole')}
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t('heroDesc')}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-blue-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-electric/30 hover:shadow-electric/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t('heroCta1')}
              </a>
              <a
                href="#why-asmaa"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-electric/40 font-semibold text-sm rounded-full transition-all duration-300"
              >
                {t('heroCta2')}
              </a>
            </div>
          </motion.div>

          {/* Dashboard visual */}
          <div className={`${isRTL ? 'lg:pr-4' : 'lg:pl-4'}`}>
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
