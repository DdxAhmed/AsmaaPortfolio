import { motion } from 'framer-motion';
import { useLang } from '../App';
import { Target, Users, Zap, Code, Cpu, Trophy } from 'lucide-react';

export default function AboutSportsTech() {
  const { t } = useLang();

  const pillars = [
    { icon: Target, label: t('pillarDiscipline'), color: 'text-electric border-electric/25 bg-electric/10' },
    { icon: Users, label: t('pillarTeamwork'), color: 'text-accentPurple border-accentPurple/25 bg-accentPurple/10' },
    { icon: Zap, label: t('pillarDecision'), color: 'text-highlightCyan border-highlightCyan/25 bg-highlightCyan/10' },
    { icon: Code, label: t('pillarLearning'), color: 'text-brandSuccess border-brandSuccess/25 bg-brandSuccess/10' },
  ];

  return (
    <section id="about" className="relative py-24 bg-darkBg overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-electric/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-highlightCyan/10 text-highlightCyan border border-highlightCyan/25">
              Personal Identity
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-6 text-textPrimary leading-snug">
            {t('aboutTitle')}
          </h2>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed mb-10 max-w-3xl">
            {t('aboutText')}
          </p>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-highlightCyan/30 transition-all cursor-default"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${item.color}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-textPrimary">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-white/[0.06]">
            <span className="text-xs font-medium text-textSecondary uppercase tracking-wider">Focus Tags:</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-electric/10 text-electric border border-electric/20">
              <Trophy className="w-3.5 h-3.5" /> Sports Mindset
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-accentPurple/10 text-accentPurple border border-accentPurple/20">
              <Code className="w-3.5 h-3.5" /> Programming
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-md bg-highlightCyan/10 text-highlightCyan border border-highlightCyan/20">
              <Cpu className="w-3.5 h-3.5" /> IoT Learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
