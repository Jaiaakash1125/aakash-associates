import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { CONTACT, WHATSAPP_MESSAGES } from '../../data/contact';

interface LayoutProps {
  children: ReactNode;
}

// Context-aware WhatsApp config per page
function useWhatsAppConfig() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/training')) {
    return { phone: CONTACT.training.whatsapp, message: WHATSAPP_MESSAGES.training };
  }
  return { phone: CONTACT.services.whatsapp, message: WHATSAPP_MESSAGES.services };
}

export function Layout({ children }: LayoutProps) {
  const wa = useWhatsAppConfig();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton phone={wa.phone} message={wa.message} variant="floating" />
    </div>
  );
}
