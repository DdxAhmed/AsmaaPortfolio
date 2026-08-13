import { motion } from 'framer-motion';
import { useLang } from '../App';

export default function SportsAndTech() {
  const { t } = useLang();

  const traits = [
    { icon: '🎯', label: t('sportsDiscipline') },
    { icon: '⚽', label: t('sportsTeamwork') },
    { icon: '⚡', label: t('sportsDecision') },
    { icon: '💻', label: t('sportsLearning') },
  ];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900/50 border border-white/[0.06] rounded-2xl p-6 sm:p-10 glow-border"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            {t('sportsTitle')}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
            {t('sportsDesc')}
          </p>

          {/* Trait pills */}
          <div className="flex flex-wrap gap-3">
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm font-semibold text-slate-300 hover:border-cyan-accent/30 hover:text-white transition-all duration-300 cursor-default"
              >
                <span className="text-base">{trait.icon}</span>
                <span>{trait.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Small visual tags for sports / programming / IoT */}
          <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/[0.05]">
            {['🏃 Sports', '🖥️ Programming', '📡 IoT'].map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium text-slate-500 bg-white/[0.03] border border-white/[0.05] rounded-md px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
