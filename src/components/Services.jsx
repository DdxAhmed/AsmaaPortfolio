import { motion } from 'framer-motion';
import { useLang } from '../App';
import { 
  LayoutPanelLeft, 
  MessageSquare, 
  Inbox, 
  ShieldAlert, 
  CalendarCheck, 
  LifeBuoy, 
  Users, 
  TrendingUp 
} from 'lucide-react';

const serviceIcons = [
  LayoutPanelLeft,
  MessageSquare,
  Inbox,
  ShieldAlert,
  CalendarCheck,
  LifeBuoy,
  Users,
  TrendingUp
];

export default function Services() {
  const { t } = useLang();

  const services = [
    { title: t('svc1Title'), desc: t('svc1Desc') },
    { title: t('svc2Title'), desc: t('svc2Desc') },
    { title: t('svc3Title'), desc: t('svc3Desc') },
    { title: t('svc4Title'), desc: t('svc4Desc') },
    { title: t('svc5Title'), desc: t('svc5Desc') },
    { title: t('svc6Title'), desc: t('svc6Desc') },
    { title: t('svc7Title'), desc: t('svc7Desc') },
    { title: t('svc8Title'), desc: t('svc8Desc') },
  ];

  return (
    <section id="services" className="relative py-24 bg-darkBg/90 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accentPurple/10 text-accentPurple border border-accentPurple/25 uppercase tracking-wider">
            Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-3 text-textPrimary">
            {t('servicesTitle')}
          </h2>
          <p className="text-sm sm:text-base text-textSecondary max-w-xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, idx) => {
            const IconComp = serviceIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-highlightCyan group-hover:bg-electric group-hover:text-white transition-all duration-300 mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-highlightCyan transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
