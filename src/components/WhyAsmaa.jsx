import { motion } from 'framer-motion';
import { useLang } from '../App';
import { LayoutGrid, ShieldCheck, Users, Zap } from 'lucide-react';

const icons = [LayoutGrid, ShieldCheck, Users, Zap];

export default function WhyAsmaa() {
  const { t } = useLang();

  const cards = [
    { icon: icons[0], title: t('why1Title'), desc: t('why1Desc'), color: 'text-electric border-electric/20 bg-electric/10' },
    { icon: icons[1], title: t('why2Title'), desc: t('why2Desc'), color: 'text-accentPurple border-accentPurple/20 bg-accentPurple/10' },
    { icon: icons[2], title: t('why3Title'), desc: t('why3Desc'), color: 'text-highlightCyan border-highlightCyan/20 bg-highlightCyan/10' },
    { icon: icons[3], title: t('why4Title'), desc: t('why4Desc'), color: 'text-brandSuccess border-brandSuccess/20 bg-brandSuccess/10' },
  ];

  return (
    <section id="why-asmaa" className="relative py-24 bg-darkBg overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/10 text-electric border border-electric/25 uppercase tracking-wider">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-3 text-textPrimary">
            {t('whyTitle')}
          </h2>
          <p className="text-sm sm:text-base text-textSecondary max-w-xl mx-auto">
            {t('whySubtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 relative group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${card.color}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-highlightCyan transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
