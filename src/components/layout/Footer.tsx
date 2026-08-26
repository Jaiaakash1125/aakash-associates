import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT, BRAND } from '../../data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border text-primary">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Aakash Associates Logo" className="h-12 w-auto object-contain bg-white rounded p-1" />
          </div>
          <p className="text-primary/70 text-sm leading-relaxed mb-5">
            {BRAND.tagline} — based in Ambattur Industrial Estate, Chennai.
          </p>
          {/* Contact at a glance */}
          <div className="space-y-2">
            <a href={`tel:${CONTACT.services.phone}`} className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
              <Phone size={14} className="text-primary-400" />
              Services: {CONTACT.services.display}
            </a>
            <a href={`tel:${CONTACT.training.phone}`} className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
              <Phone size={14} className="text-primary-400" />
              Training: {CONTACT.training.display}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors">
              <Mail size={14} className="text-primary-400" />
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-700 text-primary text-base mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Training', to: '/training' },
              { label: 'Register / Enquire', to: '/enquire' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-primary/70 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-700 text-primary text-base mb-4">Services</h3>
          <ul className="space-y-2.5">
            {[
              { label: 'Accounting in Tally', to: '/services#accounting-tally' },
              { label: 'GST Registration & Filing', to: '/services#gst' },
              { label: 'TDS Deduction & E-Filing', to: '/services#tds' },
              { label: 'PF & ESI', to: '/services#pf-esi' },
              { label: 'Management Reports', to: '/services#management-reports' },
              { label: 'Udyam Registration', to: '/services#udyam' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-primary/70 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Training + Address */}
        <div>
          <h3 className="font-display font-700 text-primary text-base mb-4">Training</h3>
          <ul className="space-y-2.5 mb-6">
            {[
              { label: 'Tally Accounts', to: '/training#tally-accounts' },
              { label: 'GST Filing', to: '/training#gst-training' },
              { label: 'TDS Filing', to: '/training#tds-training' },
              { label: 'PF & ESI', to: '/training#pf-esi-training' },
              { label: 'Management Reports', to: '/training#management-reports-training' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-primary/70 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-2 text-sm text-primary/70">
            <MapPin size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
            <address className="not-italic leading-relaxed">
              {CONTACT.address.line1}<br />
              {CONTACT.address.line2}<br />
              {CONTACT.address.line3}<br />
              {CONTACT.address.city}
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-primary/50">
            © {currentYear} Aakash Associates. All Rights Reserved.
          </p>
          <p className="text-xs text-primary/40">
            Ambattur Industrial Estate, Chennai – 600058
          </p>
        </div>
      </div>
    </footer>
  );
}
