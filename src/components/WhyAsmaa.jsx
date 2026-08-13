import { motion } from 'framer-motion';
import { useLang } from '../App';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const icons = ['📋', '🛡️', '🤝', '⚡'];

export default function WhyAsmaa() {
  const { t } = useLang();

  const cards = [
    { icon: icons[0], title: t('why1Title'), desc: t('why1Desc') },
    { icon: icons[1], title: t('why2Title'), desc: t('why2Desc') },
    { icon: icons[2], title: t('why3Title'), desc: t('why3Desc') },
    { icon: icons[3], title: t('why4Title'), desc: t('why4Desc') },
  ];

  return (
    <section id="why-asmaa" className="relative py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('whyTitle')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-electric to-cyan-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-navy-900/60 backdrop-blur border border-white/[0.06] rounded-2xl p-6 hover:border-cyan-accent/30 hover:-translate-y-1 transition-all duration-300 glow-border-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
