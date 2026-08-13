import { useLang } from '../App';
import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const { t } = useLang();
  const items = t('marqueeItems') || [];

  return (
    <div className="relative py-4 bg-darkBg/90 border-y border-white/[0.06] overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 text-sm font-semibold text-textSecondary uppercase tracking-wider">
            <span className="hover:text-electric transition-colors duration-200">{item}</span>
            <Sparkles className="w-4 h-4 text-highlightCyan/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
