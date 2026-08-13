import { motion } from 'framer-motion';
import { useLang } from '../App';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  const { t } = useLang();

  const socialCards = [
    { 
      name: t('socialWa'), 
      icon: MessageCircle, 
      href: siteConfig.socials.whatsapp,
      hoverClass: 'hover:border-brandSuccess/60 hover:shadow-brandSuccess/20 hover:text-brandSuccess'
    },
    { 
      name: t('socialFb'), 
      icon: Facebook, 
      href: siteConfig.socials.facebook,
      hoverClass: 'hover:border-electric/60 hover:shadow-electric/20 hover:text-electric'
    },
    { 
      name: t('socialIg'), 
      icon: Instagram, 
      href: siteConfig.socials.instagram,
      hoverClass: 'hover:border-accentPurple/60 hover:shadow-accentPurple/20 hover:text-accentPurple'
    },
    { 
      name: t('socialEm'), 
      icon: Mail, 
      href: `mailto:${siteConfig.email}`,
      hoverClass: 'hover:border-highlightCyan/60 hover:shadow-highlightCyan/20 hover:text-highlightCyan'
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-darkBg overflow-hidden">
      {/* Background Gradient Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-electric/15 to-accentPurple/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-14 text-center glow-border relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/25 mb-6">
            <span className="live-pulse-dot" />
            <span className="text-xs font-bold text-highlightCyan uppercase tracking-wider">
              Get Started Today
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-textPrimary leading-tight">
            {t('contactHeadline')}
          </h2>

          <p className="text-base sm:text-xl text-textSecondary mb-10 max-w-xl mx-auto font-medium">
            {t('contactSubtitle')}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-4 bg-brandSuccess hover:bg-emerald-600 text-white font-extrabold text-base rounded-full shadow-lg shadow-brandSuccess/30 hover:shadow-brandSuccess/50 transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('btnWhatsApp')}</span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/[0.04] border border-white/[0.12] hover:border-electric/40 text-textPrimary font-extrabold text-base rounded-full hover:bg-white/[0.08] transition-all transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-electric" />
              <span>{t('btnEmail')}</span>
            </a>
          </div>

          {/* SVG Social Cards Grid with Brand Color Hover Glow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]">
            {socialCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <a
                  key={idx}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-textSecondary transition-all duration-300 shadow-md ${card.hoverClass}`}
                >
                  <IconComp className="w-6 h-6 mb-2" />
                  <span className="text-xs font-bold">{card.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
