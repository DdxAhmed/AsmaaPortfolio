import { motion } from 'framer-motion';
import { useLang } from '../App';

const svcIcons = ['📊', '🛡️', '✉️', '🤝', '📌', '🚫', '👥', '📈'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  const { t } = useLang();

  const services = [
    t('svc1'), t('svc2'), t('svc3'), t('svc4'),
    t('svc5'), t('svc6'), t('svc7'), t('svc8'),
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-navy-900/30">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t('servicesTitle')}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-electric to-cyan-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group flex items-center gap-3 bg-navy-900/80 border border-white/[0.06] rounded-xl px-4 py-4 hover:border-electric/30 hover:bg-navy-800/50 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-electric/10 border border-electric/15 flex items-center justify-center text-base group-hover:scale-110 transition-transform duration-300">
                {svcIcons[i]}
              </div>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
                {svc}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
