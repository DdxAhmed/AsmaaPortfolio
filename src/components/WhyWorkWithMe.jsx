import { motion } from 'framer-motion';
import { useLang } from '../App';
import { CheckCircle2, Sparkles, HeartHandshake, Search } from 'lucide-react';

const icons = [CheckCircle2, Sparkles, HeartHandshake, Search];

export default function WhyWorkWithMe() {
  const { t } = useLang();

  const points = [
    { icon: icons[0], title: t('w1Title'), desc: t('w1Desc') },
    { icon: icons[1], title: t('w2Title'), desc: t('w2Desc') },
    { icon: icons[2], title: t('w3Title'), desc: t('w3Desc') },
    { icon: icons[3], title: t('w4Title'), desc: t('w4Desc') },
  ];

  return (
    <section className="relative py-24 bg-darkBg/95 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brandSuccess/10 text-brandSuccess border border-brandSuccess/25 uppercase tracking-wider">
            Trust & Dedication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-3 text-textPrimary">
            {t('whyWorkTitle')}
          </h2>
          <p className="text-sm sm:text-base text-textSecondary max-w-xl mx-auto">
            {t('whyWorkSubtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all duration-300 shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-highlightCyan transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
