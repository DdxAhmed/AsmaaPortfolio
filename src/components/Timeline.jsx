import { motion } from 'framer-motion';
import { useLang } from '../App';
import { Bell, Inbox, Calendar, MessageSquare, ShieldAlert, FileText } from 'lucide-react';

const timelineIcons = [Bell, Inbox, Calendar, MessageSquare, ShieldAlert, FileText];

export default function Timeline() {
  const { t, isRTL } = useLang();

  const steps = [
    { time: t('t1Time'), title: t('t1Title'), desc: t('t1Desc') },
    { time: t('t2Time'), title: t('t2Title'), desc: t('t2Desc') },
    { time: t('t3Time'), title: t('t3Title'), desc: t('t3Desc') },
    { time: t('t4Time'), title: t('t4Title'), desc: t('t4Desc') },
    { time: t('t5Time'), title: t('t5Title'), desc: t('t5Desc') },
    { time: t('t6Time'), title: t('t6Title'), desc: t('t6Desc') },
  ];

  return (
    <section id="timeline" className="relative py-24 bg-darkBg overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accentPurple/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accentPurple/15 text-accentPurple border border-accentPurple/25 uppercase tracking-wider">
            Daily Operational Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-3 text-textPrimary">
            {t('timelineTitle')}
          </h2>
          <p className="text-sm sm:text-base text-textSecondary max-w-xl mx-auto">
            {t('timelineSubtitle')}
          </p>
        </motion.div>

        {/* Vertical Timeline Track */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-6 md:right-1/2 md:translate-x-1/2' : 'left-6 md:left-1/2 md:-translate-x-1/2'} w-0.5 bg-gradient-to-b from-electric via-accentPurple to-highlightCyan opacity-40`} />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const IconComp = timelineIcons[idx];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Node Dot */}
                  <div className={`absolute ${isRTL ? 'right-2 md:right-1/2 md:translate-x-1/2' : 'left-2 md:left-1/2 md:-translate-x-1/2'} z-20 w-9 h-9 rounded-full bg-darkBg border-2 border-electric flex items-center justify-center text-electric shadow-lg shadow-electric/20`}>
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isRTL ? 'pr-14 md:pr-0' : 'pl-14 md:pl-0'}`}>
                    <div className="glass-card rounded-2xl p-6 glow-border-hover relative group">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric/10 text-electric border border-electric/20 text-xs font-bold font-mono mb-3">
                        <span>⏰</span>
                        <span>{step.time}</span>
                      </div>
                      <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-highlightCyan transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-textSecondary leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
