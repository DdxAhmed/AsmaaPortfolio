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
    <footer className="border-t border-white/[0.06] py-12 bg-darkBg/95">
      <div className="max-w-6xl mx-auto px-5 text-center">
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
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-textSecondary hover:text-electric hover:border-electric/30 hover:bg-electric/10 transition-all"
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
