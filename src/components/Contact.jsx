import { motion } from 'framer-motion';
import { useLang } from '../App';

export default function Contact() {
  const { t } = useLang();

  const socials = [
    { icon: '📱', label: 'WhatsApp', href: '#' },
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '✉️', label: 'Email', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="bg-navy-900/60 backdrop-blur border border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center glow-border"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {t('contactHeadline')}
          </h2>

          <p className="text-lg text-slate-400 mb-8 font-medium">
            {t('contactText')}
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-electric to-blue-600 text-white font-bold text-base rounded-full shadow-lg shadow-electric/30 hover:shadow-electric/50 hover:-translate-y-0.5 transition-all duration-300 mb-10"
          >
            {t('contactCta')}
          </a>

          {/* Social links */}
          <div className="flex justify-center flex-wrap gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm font-medium text-slate-400 hover:text-white hover:border-electric/30 transition-all duration-200"
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
