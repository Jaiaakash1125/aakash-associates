import { MessageCircle } from 'lucide-react';
import { CONTACT, makeWhatsAppUrl } from '../../data/contact';

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  label?: string;
  className?: string;
  variant?: 'floating' | 'inline';
}

export function WhatsAppButton({
  phone = CONTACT.services.whatsapp,
  message = 'Hello Aakash Associates, I would like to know more about your services.',
  label = 'WhatsApp Us',
  className = '',
  variant = 'floating',
}: WhatsAppButtonProps) {
  const url = makeWhatsAppUrl(phone, message);

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`
          fixed bottom-6 right-6 z-50
          flex items-center gap-2 px-4 py-3
          bg-[#25D366] text-white font-semibold text-sm rounded-full
          shadow-lg whatsapp-pulse
          hover:bg-[#1dba58] hover:shadow-xl
          transition-all duration-200
          ${className}
        `}
      >
        <MessageCircle size={22} strokeWidth={2.5} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2 px-5 py-2.5
        bg-[#25D366] text-white font-semibold text-sm rounded-lg
        hover:bg-[#1dba58] transition-colors duration-200
        ${className}
      `}
    >
      <MessageCircle size={18} strokeWidth={2.5} />
      {label}
    </a>
  );
}
