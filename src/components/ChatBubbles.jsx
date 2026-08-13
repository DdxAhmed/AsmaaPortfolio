import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../App';
import { Facebook, Instagram, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ChatBubbles() {
  const { t } = useLang();
  const [activeSet, setActiveSet] = useState(0);

  const bubbleSets = [
    {
      platform: 'facebook',
      platformName: 'Facebook Page',
      platformIcon: Facebook,
      platformColor: 'bg-electric/15 text-electric border-electric/30',
      userMsg: t('chat1User'),
      replyMsg: t('chat1Reply')
    },
    {
      platform: 'instagram',
      platformName: 'Instagram DM',
      platformIcon: Instagram,
      platformColor: 'bg-accentPurple/15 text-accentPurple border-accentPurple/30',
      userMsg: t('chat2User'),
      replyMsg: t('chat2Reply')
    },
    {
      platform: 'client',
      platformName: 'Page Owner',
      platformIcon: MessageCircle,
      platformColor: 'bg-highlightCyan/15 text-highlightCyan border-highlightCyan/30',
      userMsg: t('chat3User'),
      replyMsg: t('chat3Reply')
    }
  ];

  // Infinite cycle every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet(prev => (prev + 1) % bubbleSets.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [bubbleSets.length]);

  const current = bubbleSets[activeSet];
  const IconComp = current.platformIcon;

  return (
    <div className="w-full max-w-md mx-auto space-y-3 font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={`set-${activeSet}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="space-y-3"
        >
          {/* User Question Bubble */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="flex items-start gap-2.5 rtl:flex-row-reverse ltr:flex-row"
          >
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${current.platformColor}`}>
              <IconComp className="w-4 h-4" />
            </div>

            <div className="glass-card rounded-2xl rounded-tr-none rtl:rounded-tr-2xl rtl:rounded-tl-none p-3.5 max-w-[85%] shadow-lg border-white/[0.1]">
              <div className="flex items-center justify-between gap-3 mb-1">
                <span className="text-[11px] font-bold text-textSecondary">{current.platformName}</span>
                <span className="text-[10px] text-textSecondary">Just now</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-textPrimary leading-relaxed">
                {current.userMsg}
              </p>
            </div>
          </motion.div>

          {/* Asmaa Reply Bubble */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.35 }}
            className="flex items-start gap-2.5 rtl:flex-row ltr:flex-row-reverse"
          >
            {/* Asmaa Avatar Badge */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric to-accentPurple flex items-center justify-center text-white font-extrabold text-xs shadow-md shrink-0 border border-white/30">
              AS
            </div>

            <div className="bg-electric/15 border border-electric/30 rounded-2xl rounded-tl-none rtl:rounded-tl-2xl rtl:rounded-tr-none p-3.5 max-w-[85%] shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-1">
                <span className="text-[11px] font-bold text-highlightCyan">أسماء شاهين</span>
                <span className="inline-flex items-center gap-1 text-[10px] text-brandSuccess font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Sent
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-textPrimary leading-relaxed">
                {current.replyMsg}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dot Indicators */}
      <div className="flex justify-center items-center gap-1.5 pt-2">
        {bubbleSets.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSet(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSet === idx ? 'w-6 bg-highlightCyan' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Jump to chat dialogue ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
