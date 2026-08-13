import { useLang } from '../App';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <div className="text-xl font-extrabold text-white mb-1 tracking-tight">
          Asmaa Shaheen
        </div>
        <p className="text-sm text-slate-500 mb-4">
          {t('footerRole')}
        </p>

        {/* Social icons row */}
        <div className="flex justify-center gap-3 mb-5">
          {['📱', '📘', '📷', '✉️'].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm hover:border-electric/30 hover:bg-electric/10 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600">
          {t('footerCopy')}
        </p>
      </div>
    </footer>
  );
}
