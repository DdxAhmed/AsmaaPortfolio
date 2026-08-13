import { useLang } from '../App';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLang();

  const footerSocials = [
    { icon: MessageCircle, href: siteConfig.socials.whatsapp },
    { icon: Facebook, href: siteConfig.socials.facebook },
    { icon: Instagram, href: siteConfig.socials.instagram },
    { icon: Mail, href: `mailto:${siteConfig.email}` },
  ];

  return (
    <footer className="relative bg-darkBg overflow-hidden pt-12 pb-12">
      {/* Top Animated SVG Wave Divider */}
      <div className="w-full overflow-hidden leading-none mb-8 opacity-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-electric fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 text-center relative z-10">
        <h3 className="text-xl font-extrabold text-textPrimary tracking-tight mb-1">
          {siteConfig.name.ar} • {siteConfig.name.en}
        </h3>
        <p className="text-xs sm:text-sm text-textSecondary mb-6 font-medium">
          {siteConfig.role.ar}
        </p>

        {/* Vector SVG Social Icons Row */}
        <div className="flex justify-center items-center gap-3 mb-6">
          {footerSocials.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-textSecondary hover:text-electric hover:border-electric/30 hover:bg-electric/10 hover:rotate-6 transition-all duration-300"
              >
                <IconComp className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-textSecondary">
          {t('footerCopy')}
        </p>
      </div>
    </footer>
  );
}
