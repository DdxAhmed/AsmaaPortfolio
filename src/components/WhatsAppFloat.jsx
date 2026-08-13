import { useLang } from '../App';
import { siteConfig } from '../config/siteConfig';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const { isRTL } = useLang();

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Asmaa on WhatsApp"
      className={`fixed bottom-6 ${
        isRTL ? 'left-6' : 'right-6'
      } z-50 w-14 h-14 bg-brandSuccess rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:shadow-brandSuccess/50 transition-all duration-300 whatsapp-pulse group`}
    >
      <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
}
