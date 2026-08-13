import { motion } from 'framer-motion';
import { useLang } from '../App';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const icons = ['✅', '🚀', '💬', '🔍'];

export default function WhyWorkWithMe() {
  const { t } = useLang();

  const points = [
    { icon: icons[0], title: t('work1'), desc: t('work1Desc') },
    { icon: icons[1], title: t('work2'), desc: t('work2Desc') },
    { icon: icons[2], title: t('work3'), desc: t('work3Desc') },
    { icon: icons[3], title: t('work4'), desc: t('work4Desc') },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-navy-900/30">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('whyWorkTitle')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-electric to-cyan-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {points.map((point, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-4 bg-navy-900/60 border border-white/[0.06] rounded-xl p-5 hover:border-electric/25 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-electric/10 border border-electric/15 flex items-center justify-center text-base">
                {point.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{point.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
